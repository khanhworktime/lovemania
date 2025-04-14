import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";
import { env } from "@/constants/env";
const httpLink = new HttpLink({
  uri: env.NEXT_PUBLIC_BE_GRAPHQL_URL,
});

export const createApolloClient = () => {
  return new ApolloClient({
    uri: env.NEXT_PUBLIC_BE_GRAPHQL_URL,
    cache: new InMemoryCache(),
    link: from([removeTypenameFromVariables(), httpLink]),
  });
};

export default createApolloClient;
