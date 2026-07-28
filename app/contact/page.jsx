import ContactPage from '@/pages/ContactPage/ContactPage'
import { siteMetadata } from '@/seo/siteMetadata/siteMetadata'
import React from 'react'


// export const metadata = {
//   title: "Contact Us | 24/7 Car Repair Service in Dubai",
//   description: "Get in touch with our expert team. Call us, WhatsApp, email, or visit our location. 24/7 emergency mobile car repair service across Dubai.",
//   keywords: "contact car repair dubai, mobile mechanic contact, emergency car service dubai",
//   alternates: {
//     canonical: "https://carrepairmechanic.com/contact",
//   },
// };

export const metadata = siteMetadata.contact;
export default function page() {
    return <ContactPage />
}
