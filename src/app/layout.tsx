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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneorigintech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "One Origin Tech | Engineering Ideas to Life",
    template: "%s | One Origin Tech"
  },
  description:
    "One Origin is the digital product studio for founders who refuse to compromise on performance. Next.js, AI, and Mobile engineering at global standards.",
  keywords: [
    "digital agency",
    "web development",
    "Next.js",
    "React Native",
    "AI integration",
    "software engineering",
    "full stack development",
    "UI/UX design"
  ],
  authors: [{ name: "One Origin Technologies Pvt. Ltd." }],
  creator: "One Origin Tech",
  publisher: "One Origin Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo/one_origin_logo_bg.png",
    shortcut: "/logo/one_origin_logo_bg.png",
    apple: "/logo/one_origin_logo_bg.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "One Origin Tech | Engineering Ideas to Life",
    description:
      "The global Idea-to-Production studio. We bridge the gap between visionary concepts and scalable software.",
    url: siteUrl,
    siteName: "One Origin Tech",
    images: [
      {
        url: "/logo/one_origin_logo_bg.png",
        width: 1200,
        height: 630,
        alt: "One Origin Tech Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Origin Tech",
    description: "Engineering Ideas to Life. Next.js, AI, and Mobile engineering at global standards.",
    images: ["/logo/one_origin_logo_bg.png"],
    creator: "@oneorigintech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
