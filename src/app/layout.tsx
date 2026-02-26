import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Origin Tech | Engineering Ideas to Life",
  description:
    "One Origin is the digital product studio for founders who refuse to compromise on performance. Next.js, AI, and Mobile engineering at global standards.",
  keywords: [
    "digital agency",
    "web development",
    "Next.js",
    "React Native",
    "AI integration",
    "software engineering",
  ],
  authors: [{ name: "One Origin Technologies Pvt. Ltd." }],
  icons: {
    icon: "/logo/one_origin_logo_bg.png",
    shortcut: "/logo/one_origin_logo_bg.png",
    apple: "/logo/one_origin_logo_bg.png",
  },
  openGraph: {
    title: "One Origin Tech | Engineering Ideas to Life",
    description:
      "The global Idea-to-Production studio. We bridge the gap between visionary concepts and scalable software.",
    url: "https://oneorigintech.com",
    siteName: "One Origin Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
