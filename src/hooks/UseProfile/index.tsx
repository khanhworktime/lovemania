import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { useState, useEffect } from "react";
import { NFT } from "thirdweb";
import moment from "moment";
import { resolveScheme } from "thirdweb/storage";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { basicClient } from "@/providers/thirdweb.provider";

export function useProfileSBT() {
  const account = useGetCurrentUser();
  const [nfts, setNfts] = useState<NFT[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!account) return;
    setIsLoading(true);
    const fetchNfts = async () => {
      const nfts = await getOwnedNFTs({
        contract: getNftProfileContract({ client: basicClient }),
        owner: account.address,
      });
      setNfts(nfts);
      setIsLoading(false);
    };
    fetchNfts();
  }, [account]);

  return { sbt: nfts[0] || null, isLoading };
}
