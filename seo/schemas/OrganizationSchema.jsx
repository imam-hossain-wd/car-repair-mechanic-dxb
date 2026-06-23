// import Script from "next/script";
// import { SiteConfig } from "@/config/siteConfig"; 

// export default function OrganizationSchema() {
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "AutoRepair",
//         "@id": `${SiteConfig.url}/#organization`,
//         "name": SiteConfig.brandName,
//         "url": SiteConfig.url,
//         "logo": `${SiteConfig.url}/logo.png`, 
//         "image": `${SiteConfig.url}/og-image.jpg`,
//         "description": SiteConfig.description,
//         "telephone": SiteConfig.displayNumber,
//         "priceRange": "$$", 
//         "email": SiteConfig.email,
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "Dubai Healthcare City, Umm Hurair Second",
//           "addressLocality": SiteConfig.city,
//           "addressRegion": SiteConfig.city,
//           "addressCountry": "AE"
//         },
//         "geo": {
//           "@type": "GeoCoordinates",
//           "latitude": "25.2285", // Healthcare City এর কাছাকাছি ম্যাপ কোঅর্ডিনেট
//           "longitude": "55.3221"
//         },
//         "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
//           "@type": "OpeningHoursSpecification",
//           "dayOfWeek": item.day,
//           "opens": "00:00",
//           "closes": "23:59"
//         })),
//         "areaServed": SiteConfig.serviceAreas.map((area) => ({
//           "@type": "AdministrativeArea",
//           "name": area.name
//         })),
//         "knowsAbout": [
//           "Car Battery Replacement",
//           "Mobile Car Repair",
//           "Roadside Assistance",
//           "Car AC Repair",
//           "Emergency Mechanic",
//           "Mobile Mechanic",
//         ]
//       },
//       {
//         "@type": "Service",
//         "@id": `${SiteConfig.url}/#mobileservice`,
//         "serviceType": "Mobile Mechanic & Emergency Roadside Assistance",
//         "provider": {
//           "@id": `${SiteConfig.url}/#organization`
//         },
//         "areaServed": {
//           "@type": "AdministrativeArea",
//           "name": SiteConfig.city
//         },
//         "hasOfferCatalog": {
//           "@type": "OfferCatalog",
//           "name": "On-Site Auto Repair Services",
//           "itemListElement": [
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "24/7 Car Battery Replacement",
//                 "description": "Emergency on-site car battery testing, jump-start, and brand new battery replacement anywhere in Dubai within 15 minutes."
//               }
//             },
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Mobile Car AC Repair & Gas Refill",
//                 "description": "On-site automotive air conditioning fix, cooling leak detection, and top-quality AC gas charging service."
//               }
//             },
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Roadside Mechanical Repair & Breakdown Diagnostics",
//                 "description": "Instant support for brake servicing, engine overheating diagnostics, belt replacement, and unexpected vehicle breakdowns."
//               }
//             }
//           ]
//         }
//       }
//     ]
//   };

//   return (
//     <Script
//       id="organization-json-ld"
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//     />
//   );
// }

import Script from "next/script";
import { SiteConfig } from "@/config/siteConfig";

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": `${SiteConfig.url}/#organization`,
        "name": SiteConfig.brandName,
        "url": SiteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "@id": `${SiteConfig.url}/#logo`,
          "url": `${SiteConfig.url}/logo.png`,
          "caption": SiteConfig.brandName
        },
        "image": `${SiteConfig.url}/og-image.jpg`,
        "description": SiteConfig.description,
        "telephone": "+971551831901", 
        "priceRange": "$$",
        "email": SiteConfig.email,
        "hasMap": SiteConfig.GMB.mapsLink || SiteConfig.url,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SiteConfig.streetAddress,
          "addressLocality": SiteConfig.city,
          "addressRegion": SiteConfig.city,
          "addressCountry": SiteConfig.addressCountry,
          "postalCode": SiteConfig.postalCode
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": SiteConfig.GMB.latitude,
          "longitude": SiteConfig.GMB.longitude
        },
        "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": item.day,
          "opens": "00:00",
          "closes": "23:59"
        })),
        
        "sameAs": SiteConfig.socialLinks.map((social) => social.href),
        "areaServed": SiteConfig.serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          "name": `${area.name}, ${SiteConfig.city}`
        })),
        "knowsAbout": [
          "Car Battery Replacement",
          "Mobile Car Repair",
          "Roadside Assistance",
          "Car AC Repair",
          "Emergency Mechanic",
          "Mobile Mechanic",
          "Breakdown Diagnostics"
        ]
      },
      {
        "@type": "Service",
        "@id": `${SiteConfig.url}/#mobileservice`,
        "serviceType": "Mobile Mechanic & Emergency Roadside Assistance",
        "provider": {
          "@id": `${SiteConfig.url}/#organization`
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": SiteConfig.city
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "On-Site Auto Repair Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "24/7 Car Battery Replacement",
                "description": "Emergency on-site car battery testing, jump-start, and brand new battery replacement anywhere in Dubai within 15 minutes."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile Car AC Repair & Gas Refill",
                "description": "On-site automotive air conditioning fix, cooling leak detection, and top-quality AC gas charging service."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roadside Mechanical Repair & Breakdown Diagnostics",
                "description": "Instant support for brake servicing, engine overheating diagnostics, belt replacement, and unexpected vehicle breakdowns."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <Script
      id="organization-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}