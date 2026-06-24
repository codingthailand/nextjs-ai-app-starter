import type { Metadata } from "next";
import { Prompt, Lora, Open_Sans, Source_Code_Pro } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";

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

export const promptFont = Prompt({
  weight: ["400", "500", "700"],
  subsets: ["thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ระบบ ล็อกอิน",
  description: "เรียนรู้การเขียน Nex.tjs",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={cn(
        promptFont.className,
        "font-sans",
        lora.variable,
        openSans.variable,
        sourceCodePro.variable
      )}
    >
      <body>{children}</body>
    </html>
  );
}
