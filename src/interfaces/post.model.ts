import { IUserExample } from "./user.model";

export interface IPost {
  id: string;
  content: string;
  createdAt: Date;
  author: IUserExample;
  image: string;
}
