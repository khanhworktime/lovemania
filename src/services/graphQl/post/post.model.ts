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
