import { services } from '@/data/services/services';
import { notFound } from 'next/navigation'
import { SiteConfig } from '@/config/siteConfig';
import ServiceDetailsPage from '@/pages/ServicesPage/ServiceDetailsPage';

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services?.find((s) => s?.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Car Repair Mechanic Dubai",
      description: "The requested service could not be found in Dubai.",
    }
  }
  return {
    title: service.metaTitle || `${service.name} in Dubai |Car Repair Mechanic Dubai`,
    description: service.metaDescription || service?.intro?.content,
    alternates: {
      canonical: `${SiteConfig.url}/services/${service.slug}`,
    }
  }
}



export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug);
  if (!service) return notFound();

  //   const schema = {
  //     "@context": "https://schema.org",
  //     "@graph": [

  //       // ✅ MAIN LOCAL BUSINESS (ENTITY ROOT)
  //       {
  //         "@type": "LocalBusiness",
  //         "@id": `${SiteConfig.url}/#business`,
  //         "name": SiteConfig.brandName,
  //         "url": SiteConfig.url,
  //         "image": service.service_image,
  //         "telephone": SiteConfig.displayNumber,
  //         "email": SiteConfig.email,
  //         "description": SiteConfig.description,
  //         "priceRange": "$$",
  //         "address": {
  //           "@type": "PostalAddress",
  //           "streetAddress": SiteConfig.location,
  //           "addressLocality": SiteConfig.city,
  //           "addressCountry": "AE"
  //         },
  //         "geo": {
  //           "@type": "GeoCoordinates",
  //           "latitude": SiteConfig.latitude,
  //           "longitude": SiteConfig.longitude
  //         },
  //         "areaServed": SiteConfig.serviceAreas.map((area) => ({
  //           "@type": "Place",
  //           "name": area.name
  //         })),
  //         "sameAs": SiteConfig.socialLinks.map((s) => s.href),
  //         "openingHoursSpecification": SiteConfig.operatingHours.map((day) => ({
  //           "@type": "OpeningHoursSpecification",
  //           "dayOfWeek": day.day,
  //           "opens": "00:00",
  //           "closes": "23:59"
  //         }))
  //       },

  //       // ✅ SERVICE ENTITY (MAIN RANKING DRIVER)
  //       {
  //         "@type": "Service",
  //         "@id": `${SiteConfig.url}/dubai/services/${service.slug}#service`,
  //         "name": service.name,
  //         "description": service.metaDescription || service?.intro?.content,
  //         "url": `${SiteConfig.url}/dubai/services/${service.slug}`,
  //         "image": service.service_image,
  //         "serviceType": service.name,

  //         "provider": {
  //           "@id": `${SiteConfig.url}/#business`
  //         },

  //         "areaServed": {
  //           "@type": "City",
  //           "name": SiteConfig.city
  //         },

  //         "hasOfferCatalog": {
  //           "@type": "OfferCatalog",
  //           "name": "Car Repair Services Dubai",
  //           "itemListElement": SiteConfig.services.map((s) => ({
  //             "@type": "Offer",
  //             "itemOffered": {
  //               "@type": "Service",
  //               "name": s.name,
  //               "url": `${SiteConfig.url}${s.slug}`
  //             }
  //           }))
  //         },

  //         "availableChannel": {
  //           "@type": "ServiceChannel",
  //           "serviceLocation": {
  //             "@type": "Place",
  //             "geo": {
  //               "@type": "GeoCoordinates",
  //               "latitude": SiteConfig.latitude,
  //               "longitude": SiteConfig.longitude
  //             }
  //           }
  //         },

  //         "offers": {
  //           "@type": "Offer",
  //           "url": `${SiteConfig.url}/dubai/services/${service.slug}`,
  //           "priceCurrency": "AED",
  //           "availability": "https://schema.org/InStock"
  //         }
  //       },

  //       // ✅ FAQ SCHEMA (CTR BOOSTER)
  //       {
  //         "@type": "FAQPage",
  //         "@id": `${SiteConfig.url}/dubai/services/${service.slug}#faq`,
  //         "mainEntity": service.faq.map((item) => ({
  //           "@type": "Question",
  //           "name": item.question,
  //           "acceptedAnswer": {
  //             "@type": "Answer",
  //             "text": item.answer
  //           }
  //         }))
  //       },

  //       // ✅ BREADCRUMB (VERY IMPORTANT FOR SEO)
  //       {
  //         "@type": "BreadcrumbList",
  //         "@id": `${SiteConfig.url}/dubai/services/${service.slug}#breadcrumb`,
  //         "itemListElement": [
  //           {
  //             "@type": "ListItem",
  //             "position": 1,
  //             "name": "Home",
  //             "item": SiteConfig.url
  //           },
  //           {
  //             "@type": "ListItem",
  //             "position": 2,
  //             "name": "Services",
  //             "item": `${SiteConfig.url}/dubai/services`
  //           },
  //           {
  //             "@type": "ListItem",
  //             "position": 3,
  //             "name": service.name,
  //             "item": `${SiteConfig.url}/dubai/services/${service.slug}`
  //           }
  //         ]
  //       }

  //     ]
  //   };

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
      <ServiceDetailsPage service={service} />
    </>
  );
}
