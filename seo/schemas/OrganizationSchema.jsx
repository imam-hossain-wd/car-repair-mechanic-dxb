import Script from "next/script";
import { SiteConfig } from "@/config/siteConfig";
import { serviceAreas } from "@/data/servicearea";

export default function OrganizationSchema() {
  const telephoneNumber = SiteConfig.displayNumber
    ? SiteConfig.displayNumber.replace(/\s+/g, "")
    : "+971551831901";

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
        "telephone": telephoneNumber,
        "priceRange": "$$",
        "email": SiteConfig.email,
        "hasMap": SiteConfig.GMB?.mapsLink || SiteConfig.mapsLink || SiteConfig.url,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SiteConfig.streetAddress,
          "addressLocality": SiteConfig.city,
          "addressRegion": SiteConfig.addressRegion || SiteConfig.city,
          "addressCountry": SiteConfig.addressCountry || "AE",
          "postalCode": SiteConfig.postalCode || "00000"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": SiteConfig.GMB?.latitude || "25.24398130",
          "longitude": SiteConfig.GMB?.longitude || "55.31207400"
        },
        "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": item.day,
          "opens": "00:00",
          "closes": "23:59"
        })),
        "sameAs": [
          ...SiteConfig.socialLinks.map((social) => social.href),
          `https://www.google.com/maps?cid=${SiteConfig.GMB?.CID || "17371170169148373037"}`
        ],
        "areaServed": serviceAreas.map((area) => ({
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