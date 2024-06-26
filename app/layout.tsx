import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MilkyWay Cooperation",
  description: "Created by Steved!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/vercel.svg" sizes="any" />
        <title>{metadata.title as string}</title>{" "}
        <meta name="description" content={metadata.description || ""} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
