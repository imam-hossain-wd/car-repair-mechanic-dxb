import React from 'react'
import VehiclesWeServePage from '@/pages/VehiclesWeServePage/VehiclesWeServePage'
import { SiteConfig } from '@/app/siteConfig';

export const metadata = {
    title: "Vehicles We Service in Dubai | All Makes & Models | Car Repair Mechanic",
    description: "Professional mobile car repair in Dubai for Sedans, SUVs, Luxury Cars, EVs, Trucks & Commercial Vehicles. Certified mechanics, 24/7 doorstep service.",
    keywords: "vehicle repair dubai, car service, suv repair, truck maintenance, electric vehicle repair, luxury car service, commercial vehicle repair",
    alternates: { canonical: "https://carrepairmechanic.ae/dubai/vehicles-we-serve" },
    openGraph: {
        title: "Vehicles We Service | All Types | Dubai's Premier Auto Repair",
        description: "Expert repair for Sedans, SUVs, Trucks, Luxury Cars, EVs & Commercial Vehicles. 24/7 mobile service at your doorstep.",
        url: "https://carrepairmechanic.ae/dubai/vehicles-we-serve",
        siteName: SiteConfig.brandName,
        locale: "en_AE",
        type: "website",
    },
};

export default function page() {
    return <VehiclesWeServePage />
}
