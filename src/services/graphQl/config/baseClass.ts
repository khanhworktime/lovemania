import { ApolloClient, ApolloLink } from "@apollo/client";
import { storageKeys } from "../authentication/constants/storage.key";
import { validateJwtToken } from "@/utils/validateJwtToken";
import createApolloClient from ".";

export class ApolloClientWrapper {
  private static instance: ApolloClient<any>;
  private static isInitialized = false;

  private constructor() {}

  public static getInstance(): ApolloClient<any> {
    if (!ApolloClientWrapper.isInitialized) {
      ApolloClientWrapper.instance = createApolloClient();
      ApolloClientWrapper.isInitialized = true;

      const currentLink = ApolloClientWrapper.instance.link;

      const authLink = new ApolloLink((operation, forward) => {
        const token = sessionStorage.getItem(storageKeys.TOKEN);

        if (token) {
          const isValid = validateJwtToken(token);
          if (isValid) {
            operation.setContext({
              headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
              },
            });
          }
        }

        return forward(operation);
      });

      ApolloClientWrapper.instance.setLink(authLink.concat(currentLink));
    }
    return ApolloClientWrapper.instance;
  }

  public static resetInstance(): void {
    ApolloClientWrapper.isInitialized = false;
    ApolloClientWrapper.instance?.clearStore();
  }
}

export abstract class ApolloClientBase {
  protected instance: ApolloClient<any>;

  constructor() {
    this.instance = ApolloClientWrapper.getInstance();
  }
}
