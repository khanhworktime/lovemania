import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

// Example hook to get the connected wallet address
export const useWalletAddress = () => {
  return useAddress();
};

// Example hook to interact with a smart contract
export const useSmartContract = (contractAddress: string) => {
  const { contract } = useContract(contractAddress);

  // Read contract data example
  const useReadContractData = (functionName: string) => {
    return useContractRead(contract, functionName);
  };

  // Write to contract example
  const useWriteToContract = (functionName: string) => {
    return useContractWrite(contract, functionName);
  };

  return {
    contract,
    useReadContractData,
    useWriteToContract,
  };
};

// Example function to format wallet address
export const formatAddress = (address: string | undefined): string => {
  if (!address) return "";
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
};
