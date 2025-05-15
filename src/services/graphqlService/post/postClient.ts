import { ApolloClientBase } from "../config/baseClass";
import {
  DefaultErc721Response,
  IDefaultResponse,
} from "../interface/response.model";
import { PostsOnFeed, Post } from "./queries/posts.graphql";
import { IPost, MintPostMetadata } from "./post.model";
import { CreatePost } from "./mutaties/createPost.graphql";
import { MintingPost } from "./queries/getPostTx.graphql";

class PostClient extends ApolloClientBase {
  constructor() {
    super();
  }

  // Get posts on feed
  async getPostsOnFeed(request: {
    cursor: string | null;
    limit: number;
  }): Promise<IDefaultResponse<IPost>> {
    const { data } = await this.instance.query<{
      postsOnFeed: IDefaultResponse<IPost>;
    }>({
      query: PostsOnFeed,
      variables: request,
      fetchPolicy: "no-cache",
    });

    return data.postsOnFeed;
  }

  // Get post by id
  async getPostById(request: { id: string }): Promise<IPost> {
    const { data } = await this.instance.query<{
      post: IPost;
    }>({
      query: Post,
      variables: request,
      fetchPolicy: "no-cache",
    });

    return data.post;
  }

  // Create post
  async createPost(request: { tokenId: number }): Promise<IPost | undefined> {
    const { data } = await this.instance.mutate<
      {
        createPost: IPost;
      },
      {
        tokenId: number;
      }
    >({
      mutation: CreatePost,
      variables: request,
      fetchPolicy: "no-cache",
    });

    return data?.createPost;
  }

  // Mint post
  async mintPost(request: {
    address: string;
    metadata: MintPostMetadata;
  }): Promise<DefaultErc721Response> {
    const { data } = await this.instance.query<{
      mintingPost: DefaultErc721Response;
    }>({
      query: MintingPost,
      variables: request,
      fetchPolicy: "no-cache",
    });
    return data.mintingPost;
  }
}

export const postClient = new PostClient();
