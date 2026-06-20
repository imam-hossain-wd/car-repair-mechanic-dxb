// app/dubai/privacy/page.jsx

import { SiteConfig } from "@/config/siteConfig";
import { PrivacyPage } from "@/pages/PrivacyPage/PrivacyPage";

export const metadata = {
  title: `Privacy Policy | ${SiteConfig.brandName}`,
  description: `Read our Privacy Policy to understand how ${SiteConfig.brandName} collects, uses, and protects your personal information. We are committed to your data privacy and security.`,
  keywords: "privacy policy, data protection, GDPR, personal information, data security, cookie policy, privacy rights",
  alternates: {
    canonical: `${SiteConfig.url}/privacy`,
  },
  openGraph: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Learn how ${SiteConfig.brandName} protects your personal information and respects your privacy rights.`,
    url: `${SiteConfig.url}/privacy`,
    type: "website",
  },
};

export default function PrivacyPageRoute() {
  return <PrivacyPage />;
}