import { IOtherUser } from "../user/user.model";

export interface IPost {
  id: string;
  thumbnail: string;
  description: string;
  media: string;
  createdAt: string;
  views: number;
  author: IOtherUser;
}

export interface MintPostMetadata {
  name: string;
  description: string;
  image: string;
  media: string[];
}
