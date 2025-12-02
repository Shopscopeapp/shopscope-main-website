import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | ShopScope",
  description: "Learn how ShopScope collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  robots: "index, follow",
};

export default function PrivacyPolicy() {
  return <PrivacyContent />;
}
