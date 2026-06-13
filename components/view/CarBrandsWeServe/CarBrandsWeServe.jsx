// components/CarBrandsWeServe.jsx
"use client";

import { 
  Car, 
  Star,
  CheckCircle
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import { carBrands } from "@/data/carBrands";


// Flatten all brands for SEO
const allBrands = Object.values(carBrands).flat();
const popularBrands = allBrands.filter(brand => brand.popular === true);
const totalBrands = allBrands.length;

export function CarBrandsWeServe() {
  const { brandName } = SiteConfig;

  return (
    <section className="py-5 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
            <Car className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              All Makes & Models
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Car Brands <span className="text-primary">We Serve</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
          
          <p className="text-gray-600 dark:text-gray-300">
            Expert repair and maintenance for {totalBrands}+ car brands | Specialized diagnostics for all makes
          </p>
        </div>

        {/* Popular Brands Highlight */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Most Popular Brands
            </h3>
          </div>
          <div className="w-[80%] mx-auto flex flex-wrap justify-center gap-2">
            {popularBrands.map((brand, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>

        {/* Brands Grid by Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* <div className="space-y-8 "> */}
          {/* Japanese Brands */}
          {/* mt-8 p-4 bg-primary/5 rounded-xl text-center border border-primary/20 */}
          <div className=" rounded-xl p-2 ">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xl">🇯🇵</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Japanese Brands
              </h3>
              <span className="text-xs text-gray-500">({carBrands.japanese.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {carBrands.japanese.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border  dark:border-gray-600 border-primary/20"
                >
                  {brand.name}
                </span>
              ))}
              {/* {carBrands.japanese.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {brand.name}
                </span>
              ))} */}
            </div>
          </div>

          {/* German Brands */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xl">🇩🇪</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                German Brands
              </h3>
              <span className="text-xs text-gray-500">({carBrands.german.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {carBrands.german.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>

          {/* American Brands */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xl">🇺🇸</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                American Brands
              </h3>
              <span className="text-xs text-gray-500">({carBrands.american.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {carBrands.american.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>

          {/* Korean Brands */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xl">🇰🇷</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Korean Brands
              </h3>
              <span className="text-xs text-gray-500">({carBrands.korean.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {carBrands.korean.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>

          {/* European Brands */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xl">🇪🇺</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                European Brands
              </h3>
              <span className="text-xs text-gray-500">({carBrands.european.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {carBrands.european.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>

          {/* Chinese Brands */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xl">🇨🇳</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Chinese Brands
              </h3>
              <span className="text-xs text-gray-500">({carBrands.chinese.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {carBrands.chinese.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 p-4 bg-primary/5 rounded-xl text-center border border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Specialized Diagnostics for All Brands
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Our certified mechanics use brand-specific diagnostic tools for accurate repairs
          </p>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": brandName,
              "areaServed": SiteConfig.city,
              "availableService": allBrands.map(brand => ({
                "@type": "Service",
                "name": `${brand.name} Repair & Maintenance`,
                "description": `Professional ${brand.name} repair and maintenance services in ${SiteConfig.city}. Certified mechanics, genuine parts, warranty included.`,
                "provider": {
                  "@type": "AutoRepair",
                  "name": brandName
                },
                "serviceType": ["Car Repair", "Maintenance", "Diagnostics"]
              })),
              "knowsAbout": allBrands.map(brand => ({
                "@type": "Brand",
                "name": brand.name,
                "manufacturer": {
                  "@type": "Organization",
                  "name": brand.origin === "Japan" ? "Japanese Manufacturer" :
                            brand.origin === "Germany" ? "German Manufacturer" :
                            brand.origin === "USA" ? "American Manufacturer" : 
                            brand.origin === "Korea" ? "Korean Manufacturer" : "International Manufacturer"
                }
              }))
            })
          }}
        />

        {/* ItemList Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Car Brands Serviced in Dubai",
              "description": `Complete list of car brands we service at ${brandName} in ${SiteConfig.city}`,
              "numberOfItems": totalBrands,
              "itemListElement": allBrands.map((brand, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": brand.name,
                "url": `https://carrepairmechanic.ae/dubai/brands/${brand.slug}`,
                "description": `Expert ${brand.name} repair and maintenance services in ${SiteConfig.city}. 24/7 mobile service available.`
              }))
            })
          }}
        />

        {/* Geo Targeting Meta */}
        <div className="sr-only">
          <span itemScope itemType="https://schema.org/AutoRepair">
            <span itemProp="name">{brandName}</span>
            <span itemProp="areaServed">{SiteConfig.city}, {SiteConfig.country}</span>
            <span itemProp="brand">
              {allBrands.map(brand => brand.name).join(", ")}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}