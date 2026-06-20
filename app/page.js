import { SiteConfig } from "@/config/siteConfig";
import HomePage from "@/pages/HomePage/HomePage";

export const metadata = {
  title: "Mobile Mechanic Dubai | 24/7 Car Repair at Your Doorstep",
  description: "Broke down? Get Dubai's #1 mobile mechanic at your doorstep in 30 mins. We provide 24/7 car repair, battery replacement & AC service across Dubai. Call now!",
  keywords: ["Mobile Mechanic Dubai", "Car Repair Dubai", "Emergency Car Service Dubai", "Battery Replacement Dubai", "Roadside Assistance Dubai"],
  alternates: {
    canonical: SiteConfig.url,
  },
};


export default function Home() {
  return <HomePage />;
}
