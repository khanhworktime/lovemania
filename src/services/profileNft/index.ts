import { NFTMetadata } from "thirdweb/utils";

class ProfileNftUtils {
  static transformAttributes(attributes: NFTMetadata["attributes"]) {
    if (!attributes || !Array.isArray(attributes)) {
      return {
        birthday: undefined,
        genderType: undefined,
        gender: undefined,
      };
    }

    const result: Record<string, string | number | undefined> = {
      birthday: undefined,
      genderType: undefined,
      gender: undefined,
    };

    attributes.forEach((attr) => {
      if (!attr.trait_type || attr.value === undefined) return;

      const traitType = attr.trait_type.toLowerCase();

      if (traitType === "birthday") {
        result.birthday = attr.value;
      } else if (traitType === "gender type") {
        result.genderType = attr.value;
      } else if (traitType === "gender") {
        result.gender = attr.value;
      }
    });

    return result;
  }
}

export default ProfileNftUtils;
