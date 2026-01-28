import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Origin Tech | Digital Agency",
  description: "We build innovative digital experiences that drive results. Web development, UI/UX design, and digital strategy.",
  icons: {
    icon: "/logo/one_origin_logo_bg.png",
    shortcut: "/logo/one_origin_logo_bg.png",
    apple: "/logo/one_origin_logo_bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
