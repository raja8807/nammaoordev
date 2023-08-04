import NodHeader from "@/components/layout/header";
import "@/styles/globals.css";
// import { SessionProvider } from "next-auth/react";
// import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SessionProvider session={pageProps.session}> */}
      {/* <SSRProvider> */}
      <NodHeader />
      <Component {...pageProps} />
      {/* </SSRProvider> */}
      {/* </SessionProvider> */}
    </>
  );
}
