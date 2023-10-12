import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/pages/layouts/Header";
import Footer from "@/pages/layouts/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
