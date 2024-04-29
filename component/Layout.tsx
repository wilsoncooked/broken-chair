import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Broken Chair</title>
      </Head>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <main>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
