import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Layout } from "@/component/Layout";
import apolloClient from "../lib/apolloClient";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = apolloClient();
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
