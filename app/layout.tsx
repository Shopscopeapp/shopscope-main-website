import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopScope - Connect Style With Discovery | Fashion Discovery App",
  description: "A smarter way to find clothes you actually love. Swipe through curated pieces, save collections, and checkout from multiple brands in one seamless cart. Join the waitlist for early access.",
  keywords: ["fashion app", "shopping app", "style discovery", "clothing discovery", "fashion brands", "multi-brand shopping", "fashion deals", "style matching", "swipe fashion"],
  authors: [{ name: "ShopScope" }],
  creator: "ShopScope",
  publisher: "ShopScope",
  robots: "index, follow",
  icons: {
    icon: "/images/app-screens/FAVICON.png",
    shortcut: "/images/app-screens/FAVICON.png",
    apple: "/images/app-screens/FAVICON.png",
  },
  openGraph: {
    title: "ShopScope - Connect Style With Discovery",
    description: "A smarter way to find clothes you actually love. Join our waitlist for early access.",
    type: "website",
    url: "https://shopscope.app",
    siteName: "ShopScope",
    images: [
      {
        url: "/images/app-screens/LOGO.png",
        alt: "ShopScope - Fashion Discovery App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopScope - Connect Style With Discovery",
    description: "A smarter way to find clothes you actually love",
    images: ["/images/app-screens/LOGO.png"],
    creator: "@shopscope",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://shopscope.app" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="ShopScope" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

