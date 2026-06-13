// components/BatteriesWeProvide.jsx
"use client";

import { Battery, Zap, Shield, CheckCircle, Truck, Clock } from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import { batteriesData } from "@/data/battriesData";

const allBatteries = [
  ...batteriesData.premiumBrands,
  ...batteriesData.standardBrands
];
const totalBrands = allBatteries.length;
const popularBrands = allBatteries.filter(b => b.popular === true);

export function BatteriesWeProvide() {
  const { brandName, city, displayNumber } = SiteConfig;

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-0.5 rounded-full mb-2">
            <Battery className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Premium Quality
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Genuine <span className="text-primary">Batteries</span> We Provide
          </h2>
          
          <div className="w-12 h-0.5 bg-primary mx-auto my-2"></div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {totalBrands}+ top brands | All types available | Free installation
          </p>
        </div>

        {/* Popular Brands Highlight */}
        <div className="mb-5">
          <div className="flex items-center justify-center gap-1 mb-2">
            <Shield className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Most Demanded:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {popularBrands.map((brand, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>

        {/* Battery Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {/* Premium Brands */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-primary" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  Premium Brands
                </h3>
              </div>
              <span className="text-xs text-primary font-medium">2 Yrs Warranty</span>
            </div>
            <div className="space-y-1.5">
              {batteriesData.premiumBrands.map((brand, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {brand.name}
                  </span>
                  <span className="text-xs text-green-600 dark:text-green-400">
                    {brand.origin}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Brands */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  Standard Brands
                </h3>
              </div>
              <span className="text-xs text-primary font-medium">18 Months</span>
            </div>
            <div className="space-y-1.5">
              {batteriesData.standardBrands.map((brand, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {brand.name}
                  </span>
                  <span className="text-xs text-green-600 dark:text-green-400">
                    {brand.origin}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Battery Types */}
        <div className="mb-5">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white text-center mb-2">
            Battery Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {batteriesData.batteryTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-2 text-center border border-gray-200 dark:border-gray-700">
                  <Icon className="h-3.5 w-3.5 text-primary mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                    {type.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vehicle Compatibility */}
        <div className="mb-5">
          <div className="flex items-center justify-center gap-1 mb-2">
            <Truck className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Compatible With:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {batteriesData.vehicleCompatibility.map((vehicle, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700"
              >
                {vehicle}
              </span>
            ))}
          </div>
        </div>

        {/* Service Badge */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <CheckCircle className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs text-gray-700 dark:text-gray-300">
              Free Installation
            </span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <Clock className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs text-gray-700 dark:text-gray-300">
              30 Min Service
            </span>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="p-2.5 bg-primary/5 rounded-lg text-center border border-primary/20">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            🔋 All batteries come with warranty | Old battery disposal included | On-site installation
          </p>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": `${brandName} - Battery Services`,
              "areaServed": SiteConfig.city,
              "makesOffer": allBatteries.map(battery => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": `${battery.name} Car Battery`,
                  "brand": {
                    "@type": "Brand",
                    "name": battery.name
                  },
                  "category": battery.type === "Premium" ? "Premium Automotive Battery" : "Standard Automotive Battery",
                  "warranty": battery.warranty,
                  "manufacturer": {
                    "@type": "Organization",
                    "name": battery.origin
                  }
                },
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "AED",
                  "price": "Varies by model"
                }
              })),
              "serviceType": batteriesData.batteryTypes.map(type => type.name),
              "availableLanguage": ["English", "Arabic", "Urdu", "Hindi"]
            })
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Car Battery Brands Available in Dubai",
              "description": `Complete list of genuine battery brands we provide at ${brandName}`,
              "numberOfItems": totalBrands,
              "itemListElement": allBatteries.map((battery, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": `${battery.name} Battery`,
                "url": `https://carrepairmechanic.ae/dubai/battery/${battery.name.toLowerCase()}`,
                "description": `${battery.name} ${battery.type} car battery with ${battery.warranty} warranty. Available for all car models in ${SiteConfig.city}.`
              }))
            })
          }}
        />
      </div>
    </section>
  );
}