export interface IPost {
  id: string;
  content: string;
  createdAt: Date;
  author: {
    id: string;
    name: string;
    avatar: string;
    location: string;
  };
  image: string;
}
