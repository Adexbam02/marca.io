import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
// import Bgl from "../../public/bg-line.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marca.io",
  description: "Branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FCFCFF] bg`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
