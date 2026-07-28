import AboutPage from '@/pages/AboutPage.jsx/AboutPage'
import { siteMetadata } from '@/seo/siteMetadata/siteMetadata';
import React from 'react'


// export const metadata = {
//   title: "About Us | Dubai's Premier Mobile Car Repair Service",
//   description: "13+ years of excellence, 5000+ happy customers, and a mission to revolutionize car repair in Dubai. Meet the team behind Dubai's most trusted mobile mechanic service.",
//   keywords: "about car repair dubai, mobile mechanic company, best car service dubai, auto repair specialists",
//   alternates: {
//     canonical: "https://carrepairmechanic.ae/dubai/about",
//   },
// };

export const metadata = siteMetadata.about;


export default function page() {
    return <AboutPage />;
}
