import { services } from '@/data/services/services';
import { notFound } from 'next/navigation';
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
    };
  }

  const title = service.metaTitle;
  const description = service.metaDescription;
  const canonical = `${SiteConfig.url}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SiteConfig.brandName,
      locale: "en_AE",
      type: "website",
    },
  };
}


export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug);
  if (!service) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. SERVICE ENTITY
      {
        "@type": "Service",
        "@id": `${SiteConfig.url}/services/${service.slug}#service`,
        "name": service.name || service.title,
        "description": service.metaDescription || service?.intro?.content,
        "url": `${SiteConfig.url}/services/${service.slug}`,
        "serviceType": service.name || service.title,
        "provider": {
          "@id": `${SiteConfig.url}/#organization`
        },
        "areaServed": {
          "@type": "City",
          "name": SiteConfig.city
        },
        "offers": {
          "@type": "Offer",
          "url": `${SiteConfig.url}/services/${service.slug}`,
          "priceCurrency": "AED",
          "price": service.price || "199",
          "availability": "https://schema.org/InStock"
        }
      },

      // 2. FAQ SCHEMA (IF FAQ EXISTS)
      ...(service.faq && service.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${SiteConfig.url}/services/${service.slug}#faq`,
              "mainEntity": service.faq.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            }
          ]
        : []),

      // 3. BREADCRUMB LIST
      {
        "@type": "BreadcrumbList",
        "@id": `${SiteConfig.url}/services/${service.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SiteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${SiteConfig.url}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.name || service.title,
            "item": `${SiteConfig.url}/services/${service.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetailsPage service={service} />
    </>
  );
}
