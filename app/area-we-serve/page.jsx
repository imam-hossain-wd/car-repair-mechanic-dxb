import { SiteConfig } from "@/app/siteConfig";
import ServiceAreaPage from "@/pages/AreaWeServePage/AreaWeServePage";


export const metadata = {
    title: "Car Repair Service Areas in Dubai | Mobile Mechanic Near You",
    description: "Professional mobile car repair service available in 50+ locations across Dubai including Al Karama, Business Bay, Damac Hills, JLT, Marina & more. 24/7 emergency service with 15-30 min response.",
    keywords: "car repair dubai, mobile mechanic near me, car service areas dubai, al karama car repair, business bay mechanic, damac hills car service",
    alternates: {
        canonical: "https://carrepairmechanic.ae/dubai/area-we-serve",
    },
    openGraph: {
        title: "Car Repair Service Areas in Dubai | 50+ Locations",
        description: "Find mobile car repair service near you in Dubai. Available in Al Karama, Business Bay, Marina, JLT, and 50+ locations. 24/7 emergency service.",
        url: "https://carrepairmechanic.ae/dubai/area-we-serve",
        siteName: SiteConfig.brandName,
        locale: "en_AE",
        type: "website",
    },
};


export default function AreaWeServe() {
    return <ServiceAreaPage />;
}