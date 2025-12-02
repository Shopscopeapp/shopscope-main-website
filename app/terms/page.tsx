import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | ShopScope",
  description: "Read the ShopScope Terms of Service. Understand your rights and obligations when using our fashion discovery platform.",
  robots: "index, follow",
};

export default function TermsOfService() {
  return <TermsContent />;
}
