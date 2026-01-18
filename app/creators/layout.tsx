import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Creators | ShopScope - Get Paid to Share Your Style",
  description: "Join ShopScope's creator program. Flat fees per video, performance bonuses, plus your affiliate codes work in-app. TikTok & Instagram creators welcome. Real money, not just free clothes.",
  keywords: ["fashion creator", "paid brand deals", "TikTok creator", "Instagram creator", "fashion influencer", "creator program", "UGC creator", "style influencer", "get paid to create content", "affiliate marketing"],
  openGraph: {
    title: "ShopScope for Creators - Get Paid to Share Your Style",
    description: "Real money for real content. Flat fees, performance bonuses, and affiliate integration. Join our creator program.",
    type: "website",
    url: "https://shopscope.app/creators",
    siteName: "ShopScope",
    images: [
      {
        url: "/images/app-screens/LOGO.png",
        alt: "ShopScope Creator Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopScope for Creators - Get Paid to Share Your Style",
    description: "Real money for real content. Flat fees, performance bonuses, and affiliate integration.",
    images: ["/images/app-screens/LOGO.png"],
    creator: "@shopscope",
  },
  robots: "index, follow",
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
