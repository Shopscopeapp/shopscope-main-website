import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Brands | ShopScope - Turn Style Swipes Into Sales",
  description: "Join ShopScope as a founding brand partner. Pay only when you make a sale – no upfront ad spend, no monthly minimums. Reach Gen Z & young millennials through our swipe-to-shop discovery app.",
  keywords: ["fashion brand partner", "affiliate marketing", "Gen Z marketing", "fashion discovery", "performance marketing", "Shopify brands", "fashion ecommerce", "swipe to shop"],
  openGraph: {
    title: "ShopScope for Brands - Performance-Based Fashion Discovery",
    description: "Turn style swipes into new customers. Pay only on confirmed sales. Join our founding brand program.",
    type: "website",
    url: "https://shopscope.app/brands",
    siteName: "ShopScope",
    images: [
      {
        url: "/images/app-screens/LOGO.png",
        alt: "ShopScope - Fashion Discovery App for Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopScope for Brands - Performance-Based Fashion Discovery",
    description: "Turn style swipes into new customers. Pay only on confirmed sales.",
    images: ["/images/app-screens/LOGO.png"],
    creator: "@shopscope",
  },
  robots: "index, follow",
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

