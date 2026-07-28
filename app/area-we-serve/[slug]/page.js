import { serviceAeas } from "@/data/servicearea";
import AreaWeServeDetailPage from "@/pages/AreaWeServePage/AreaWeServeDetailPage";
import { SiteConfig } from "@/config/siteConfig";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = serviceAeas.find((item) => item.slug === slug);

  if (!area) {
    return {
      title: "Area Not Found | Car Repair Mechanic Dubai",
      description: "The requested service area could not be found.",
    };
  }

  const title = `24/7 Mobile Mechanic in ${area.name} Dubai | On-Site Car Repair`;
  const description = `Fast 15-minute mobile mechanic in ${area.name}, Dubai. On-site car battery replacement, jump start, AC repair & emergency roadside assistance in ${area.name}. Call 24/7!`;
  const canonical = `${SiteConfig.url}/area-we-serve/${area.slug}`;

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

export default async function AreaWeServeDetail({ params }) {
  const { slug } = await params;
  const area = serviceAeas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SiteConfig.url}/area-we-serve/${area.slug}#service`,
        "name": `Mobile Car Repair in ${area.name}`,
        "description": `24/7 mobile mechanic and roadside emergency car repair service in ${area.name}, Dubai.`,
        "provider": {
          "@id": `${SiteConfig.url}/#organization`
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${area.name}, Dubai`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SiteConfig.url}/area-we-serve/${area.slug}#breadcrumb`,
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
            "name": "Areas We Serve",
            "item": `${SiteConfig.url}/area-we-serve`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": area.name,
            "item": `${SiteConfig.url}/area-we-serve/${area.slug}`
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
      <AreaWeServeDetailPage area={area} />
    </>
  );
}