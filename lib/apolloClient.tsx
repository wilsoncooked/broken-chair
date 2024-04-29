import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT,
    cache: new InMemoryCache(),
  });
};
export default apolloClient;
