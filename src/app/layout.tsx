import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
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
        <meta name="robots" content="noindex" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <html lang="en">
        <body className={clsx(robotoFlex.className, "bg-black text-white")}>
          {props.children}
        </body>
      </html>
    </>
  );
}
