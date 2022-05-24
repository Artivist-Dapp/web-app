import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const tetsnet = "https://mintbase-testnet.hasura.app/v1/graphql";
///const mainnet = https://mintbase-mainnet.hasura.app/v1/graphql

function createApolloClient(graphUri: string) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: graphUri,
      credentials: "same-origin",
      headers: {
        "x-hasura-role": "anonymous",
      },
    }),
    cache: new InMemoryCache(),
  });
}

const client = createApolloClient(tetsnet);

export default client;
