import Script from "next/script";
import { SiteConfig } from "@/config/siteConfig";

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": `${SiteConfig.url}/#localbusiness`,
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
        "telephone": "+971551831901",
        "priceRange": "$$",
        "email": SiteConfig.email,
        "hasMap": SiteConfig.GMB.mapsLink,
        
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SiteConfig.streetAddress,
          "addressLocality": SiteConfig.city,
          "addressRegion": SiteConfig.addressRegion,
          "addressCountry": SiteConfig.addressCountry,
          "postalCode": SiteConfig.postalCode
        },
        
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": SiteConfig.GMB.latitude,
          "longitude": SiteConfig.GMB.longitude
        },
        
        // 🛠️ Highly Optimized 24/7 Structure for Google Maps
        "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": item.day,
          "opens": "00:00",
          "closes": "00:00" 
        })),
        
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971551831901",
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"]
        },
        
        "areaServed": SiteConfig.serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          "name": `${area.name}, ${SiteConfig.city}`
        })),
        
        "sameAs": [
          ...SiteConfig.socialLinks.map((social) => social.href),
          `https://www.google.com/maps?cid=${SiteConfig.GMB.CID}`
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