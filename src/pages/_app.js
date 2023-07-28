import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
// import { SessionProvider } from "next-auth/react";
// import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SessionProvider session={pageProps.session}> */}
      {/* <SSRProvider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </SSRProvider> */}
      {/* </SessionProvider> */}
    </>
  );
}
