import "@/styles/globals.css";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Josefin_Sans } from "next/font/google";
import Head from "next/head";
// import { SessionProvider } from "next-auth/react";
// import { SSRProvider } from "react-bootstrap";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
});

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
      {/* <Head>
        <style jsx global>{`
          html {
            p {

              background-color: #161925;
              font-family: ${josefin_Sans.style.fontFamily};
            }
          }
        `}</style>
      </Head> */}

      {/* <SessionProvider session={pageProps.session}> */}
      {/* <SSRProvider> */}
      {/* <NodHeader /> */}
      <main className={josefin_Sans.className}>
        <Component {...pageProps} />
      </main>
      {/* </SSRProvider> */}
      {/* </SessionProvider> */}
    </>
  );
}
