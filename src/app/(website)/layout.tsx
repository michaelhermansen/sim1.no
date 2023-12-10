import type { Metadata } from "next";
import Header from "./Header";

export const metadata: Metadata = {
  title: "sim1",
  description: "Sound design · Mixing · Production",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}
