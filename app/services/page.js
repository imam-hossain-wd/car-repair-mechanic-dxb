import ServicesPage from "@/pages/ServicesPage/ServicePage"
import { siteMetadata } from "@/seo/siteMetadata/siteMetadata";


// export const metadata = {
//     title: siteMetadata.services.title,
//     description: siteMetadata.services.description,
//     alternates: {
//         canonical: siteMetadata.services.canonical,
//     },
// }

export const metadata = siteMetadata.services;

const ServicePage = () => {
    return <ServicesPage />

}
export default ServicePage;