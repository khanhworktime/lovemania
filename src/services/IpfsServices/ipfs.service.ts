import { getFileFromBase64 } from "@/utils/converBase64toFile";
import { upload, resolveScheme } from "thirdweb/storage";
import { basicClient } from "@/providers/thirdweb.provider";

// Define types for function parameters
interface IpfsMetadata {
  name?: string;
  description?: string;
  image?: string;
  properties?: Record<string, any>;
  [key: string]: any;
}

// Types that match what thirdweb/storage expects
type UploadableFile = File | string | Record<string, unknown>;

class IpfsService {
  async uploadIpfs(
    data: UploadableFile,
    metadata?: IpfsMetadata
  ): Promise<string> {
    // console.log("");
    const uri = await upload({
      client: basicClient,
      files: [data],
      metadata,
    });

    return uri;
  }

  async uploadIpfsArray(array: UploadableFile[]): Promise<string[]> {
    const uris = await upload({
      client: basicClient,
      files: array,
    });
    return uris;
  }

  async uploadIpfsImage64Base(
    image64Base: string,
    metadata?: IpfsMetadata
  ): Promise<string> {
    const image = getFileFromBase64(image64Base, "image.jpg");

    const uri = await upload({
      client: basicClient,
      files: [image],
      metadata,
    });
    return uri;
  }

  async uploadIpfsImageList64Base(
    image64BaseList: string[]
  ): Promise<string[]> {
    const images = image64BaseList.map((image: string, index: number) =>
      getFileFromBase64(image, `image_${index}.jpg`)
    );

    const uri = await upload({
      client: basicClient,
      files: images,
    });
    return uri;
  }

  async getIpfsData(
    uri: string
  ): Promise<string | Record<string, any> | Blob | null> {
    if (!uri) {
      return null;
    }

    const data = resolveScheme({ uri, client: basicClient });
    const file = await fetch(data);

    const contentType = file.headers.get("content-type");

    // Handle different content types
    if (contentType?.startsWith("image/")) {
      // For images, return the resolved link
      return data;
    } else if (contentType === "application/json") {
      // For JSON files, parse and return as object
      try {
        const jsonData = await file.json();
        return jsonData;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        throw new Error("Invalid JSON format");
      }
    } else if (
      contentType === "text/plain" ||
      contentType?.startsWith("text/")
    ) {
      // For text files, return raw text
      const text = await file.text();
      return text;
    }

    // Default fallback - return as blob
    const blob = await file.blob();

    return blob;
  }
}

export const ipfsService = new IpfsService();
