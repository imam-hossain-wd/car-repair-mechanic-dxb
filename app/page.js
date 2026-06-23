import HomePage from "@/pages/HomePage/HomePage";
import { siteMetadata } from "@/seo/siteMetadata/siteMetadata";

// export const metadata = {
//   title: "Mobile Mechanic Dubai | 24/7 Car Repair at Your Doorstep",
//   description: "Broke down? Get Dubai's #1 mobile mechanic at your doorstep in 30 mins. We provide 24/7 car repair, battery replacement & AC service across Dubai. Call now!",
//   keywords: ["Mobile Mechanic Dubai", "Car Repair Dubai", "Emergency Car Service Dubai", "Battery Replacement Dubai", "Roadside Assistance Dubai"],
//   alternates: {
//     canonical: SiteConfig.url,
//   },
// };


export const metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  alternates: {
    canonical: siteMetadata.home.canonical,
  },
  // Recommended additions for local SEO visibility
  openGraph: {
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    url: siteMetadata.home.canonical,
    siteName: "Car Repair Mechanic Dubai",
    locale: "en_AE",
    type: "website",
  }
};


export default function Home() {
  return <HomePage />;
}
