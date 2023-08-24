import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Header from "./Header";
import Head from "next/head";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  axes: ["opsz", "wdth", "slnt"],
  variable: "--font-roboto-flex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "sim1",
  description: "Sound design · Mixing · Production",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/assets/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/assets/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <html lang="en">
        <body className={clsx(robotoFlex.className, "bg-black text-white")}>
          <Header />
          <main>{props.children}</main>
        </body>
      </html>
    </>
  );
}
