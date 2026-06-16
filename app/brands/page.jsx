import { SiteConfig } from "@/app/siteConfig";
import BrandWeServePage from "@/pages/BrandWeServePage/BrandWeServePage";

export const metadata = {
  title: "All Car Brands We Service in Dubai | 40+ Makes & Models",
  description: "Expert car repair for all major brands including Toyota, BMW, Mercedes, Honda, Nissan, Audi, and 40+ more. Specialized diagnostics for Japanese, German, American, Korean & European cars.",
  keywords: "car brands dubai, toyota repair dubai, bmw service dubai, mercedes mechanic, honda repair, nissan service, audi specialist, all car brands",
  alternates: {
    canonical: "https://carrepairmechanic.ae/dubai/brands",
  },
  openGraph: {
    title: "All Car Brands We Service in Dubai | 40+ Makes",
    description: "Professional car repair for all major brands. Certified mechanics for Japanese, German, American, Korean & European vehicles.",
    url: "https://carrepairmechanic.ae/dubai/brands",
    siteName: SiteConfig.brandName,
    locale: "en_AE",
    type: "website",
  },
};

export default function BrandWeServe() {
    return <BrandWeServePage />;

}