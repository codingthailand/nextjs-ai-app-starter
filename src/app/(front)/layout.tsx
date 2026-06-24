import { Suspense } from "react";
import type { Metadata } from "next";
import { Lora, Open_Sans, Source_Code_Pro } from "next/font/google";
import { Toaster } from "sonner";
import "../globals.css";
import Navbar from "@/components/navbar";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ระบบ E-Commerce",
  description: "เรียนรู้การเขียน Nex.tjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${lora.variable} ${openSans.variable} ${sourceCodePro.variable} font-sans`}
    >
      <body>
        <Suspense fallback={<div className="h-16 border-b bg-background" />}>
          <Navbar />
        </Suspense>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
