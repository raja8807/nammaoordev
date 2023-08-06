import NodHeader from "@/components/layout/header";
import "@/styles/globals.css";

import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
// import { SessionProvider } from "next-auth/react";
// import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      // easing: "ease-out-cubic",
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {/* <SessionProvider session={pageProps.session}> */}
      {/* <SSRProvider> */}
      {/* <NodHeader /> */}
      <Component {...pageProps} />
      {/* </SSRProvider> */}
      {/* </SessionProvider> */}
    </>
  );
}
