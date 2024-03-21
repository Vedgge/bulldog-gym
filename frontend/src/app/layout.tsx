import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulldog Gym",
  description: "Gym website created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-50 text-opacity-90 relative h-[5000px]`}>
        <Header></Header>
        {/* <Footer></Footer> */}
        {children}
      </body>
    </html>
  );
}
