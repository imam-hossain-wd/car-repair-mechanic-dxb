import Script from "next/script";
import { SiteConfig, serviceAreas } from "@/config/siteConfig";

export default function LocalBusinessSchema() {
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
        "image": [
          `${SiteConfig.url}/og-image.jpg`
        ],
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
        
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": telephoneNumber,
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"]
        },
        
        "areaServed": (serviceAreas || SiteConfig.serviceAreas || []).map((area) => ({
          "@type": "AdministrativeArea",
          "name": `${area.name}, ${SiteConfig.city}`
        })),
        
        "sameAs": [
          ...SiteConfig.socialLinks.map((social) => social.href),
          `https://www.google.com/maps?cid=${SiteConfig.GMB?.CID || "17371170169148373037"}`
        ]
      }
    ]
  };

  return (
    <Script
      id="localbusiness-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}