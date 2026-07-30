// // components/CarBrandsWeServe.jsx
// "use client";

// import { 
//   Car, 
//   Star,
//   CheckCircle
// } from "lucide-react";
// import { SiteConfig } from "@/config/siteConfig";
// import { carBrands } from "@/data/carBrands";


// // Flatten all brands for SEO
// const allBrands = Object.values(carBrands).flat();
// const popularBrands = allBrands.filter(brand => brand.popular === true);
// const totalBrands = allBrands.length;

// export function CarBrandsWeServe() {
//   const { brandName } = SiteConfig;

//   return (
//     <section className="py-5 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-4">

//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
//             Car Brands <span className="text-primary">We Serve</span>
//           </h2>

//           <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>

//           <p className="text-gray-600 text-sm md:text-lg dark:text-gray-300">
//             Expert repair and maintenance for {totalBrands}+ car brands | Specialized diagnostics for all makes
//           </p>
//         </div>

//         {/* Brands Grid by Category */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           <div className=" rounded-xl border  p-2 ">
//             <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary">
//               <span className="text-xl">🇯🇵</span>
//               <h3 className="text-lg font-bold text-black dark:text-white">
//                 Japanese Brands
//               </h3>
//               <span className="text-xs text-gray-500">({carBrands.japanese.length})</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {carBrands.japanese.map((brand, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1.5 font-semibold bg-white text-black dark:text-gray-300 text-sm rounded-lg border-b-2 border-primary border-t-2"
//                 >
//                   {brand.name}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* German Brands */}
//           <div className="bg-gray-50 border  dark:bg-gray-800 rounded-xl p-2">
//             <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary dark:border-gray-700">
//               <span className="text-xl">🇩🇪</span>
//               <h3 className="text-lg font-bold text-black dark:text-white">
//                 German Brands
//               </h3>
//               <span className="text-xs text-gray-500">({carBrands.german.length})</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {carBrands.german.map((brand, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1.5 font-semibold bg-white text-blackdark:text-gray-300 text-sm rounded-lg border-primary border-t-2 border-b-2 cursor-default"
//                 >
//                   {brand.name}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* American Brands */}
//           <div className="bg-gray-50 border  dark:bg-gray-800 rounded-xl p-2">
//             <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary dark:border-gray-700">
//               <span className="text-xl">🇺🇸</span>
//               <h3 className="text-lg font-bold text-black dark:text-white">
//                 American Brands
//               </h3>
//               <span className="text-xs text-gray-500">({carBrands.american.length})</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {carBrands.american.map((brand, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1.5 bg-white font-semibold text-black dark:text-gray-300 text-sm rounded-lg border-primary border-t-2 border-b-2 cursor-default"
//                 >
//                   {brand.name}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Korean Brands */}
//           <div className="bg-gray-50 border  dark:bg-gray-800 rounded-xl p-2">
//             <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary dark:border-gray-700">
//               <span className="text-xl">🇰🇷</span>
//               <h3 className="text-lg font-bold text-black dark:text-white">
//                 Korean Brands
//               </h3>
//               <span className="text-xs text-gray-500">({carBrands.korean.length})</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {carBrands.korean.map((brand, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1.5 bg-white font-semibold text-black dark:text-gray-300 text-sm rounded-lg border-primary border-t-2 border-b-2 cursor-default"
//                 >
//                   {brand.name}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* European Brands */}
//           <div className="bg-gray-50 border  dark:bg-gray-800 rounded-xl p-2">
//             <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary dark:border-gray-700">
//               <span className="text-xl">🇪🇺</span>
//               <h3 className="text-lg font-bold text-black dark:text-white">
//                 European Brands
//               </h3>
//               <span className="text-xs text-gray-500">({carBrands.european.length})</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {carBrands.european.map((brand, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1.5 bg-white font-semibold text-black dark:text-gray-300 text-sm rounded-lg border-primary border-t-2 border-b-2 cursor-default"
//                 >
//                   {brand.name}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Chinese Brands */}
//           <div className="bg-gray-50 border  dark:bg-gray-800 rounded-xl p-2">
//             <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary dark:border-gray-700">
//               <span className="text-xl">🇨🇳</span>
//               <h3 className="text-lg font-semibold text-black dark:text-white">
//                 Chinese Brands
//               </h3>
//               <span className="text-xs text-gray-500">({carBrands.chinese.length})</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {carBrands.chinese.map((brand, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1.5 bg-white font-bold text-black dark:text-gray-300 text-sm rounded-lg border-primary border-t-2 border-b-2 cursor-default"
//                 >
//                   {brand.name}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Trust Badge */}
//         <div className="mt-5 p-4 bg-primary/5 rounded-xl text-center border border-primary/20">
//           <div className="flex items-center justify-center gap-2 mb-2">
//             <CheckCircle className="h-5 w-5 text-primary" />
//             <span className="font-semibold text-gray-900 dark:text-white">
//               Specialized Diagnostics for All Brands
//             </span>
//           </div>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             Our certified mechanics use brand-specific diagnostic tools for accurate repairs
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/CarBrandsWeServe.jsx
"use client";

import { useState } from "react";
import {
  Car,
  Star,
  CheckCircle,
  Globe,
  Wrench,
  Shield
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import { carBrands } from "@/data/carBrands";

// Flatten all brands for SEO
const allBrands = Object.values(carBrands).flat();
const popularBrands = allBrands.filter(brand => brand.popular === true);
const totalBrands = allBrands.length;

// Category configurations
const categories = [
  {
    id: "japanese",
    label: "Japanese",
    icon: "🇯🇵",
    color: "border-blue-500/30",
    bgColor: "hover:bg-blue-50/50"
  },
  {
    id: "german",
    label: "German",
    icon: "🇩🇪",
    color: "border-amber-500/30",
    bgColor: "hover:bg-amber-50/50"
  },
  {
    id: "american",
    label: "American",
    icon: "🇺🇸",
    color: "border-red-500/30",
    bgColor: "hover:bg-red-50/50"
  },
  {
    id: "korean",
    label: "Korean",
    icon: "🇰🇷",
    color: "border-purple-500/30",
    bgColor: "hover:bg-purple-50/50"
  },
  {
    id: "european",
    label: "European",
    icon: "🇪🇺",
    color: "border-green-500/30",
    bgColor: "hover:bg-green-50/50"
  },
  {
    id: "chinese",
    label: "Chinese",
    icon: "🇨🇳",
    color: "border-rose-500/30",
    bgColor: "hover:bg-rose-50/50"
  }
];

export function CarBrandsWeServe() {
  const [activeTab, setActiveTab] = useState("japanese");


  // Get current brands based on active tab
  const currentBrands = carBrands[activeTab] || [];

  return (
    <section className="py-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">


          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Car Brands <span className="text-primary">We Serve</span>
          </h2>

          <div className="w-16 h-0.5 bg-primary mx-auto my-3"></div>

          <p className="text-gray-600 text-sm md:text-base dark:text-gray-400">
            Expert repair and maintenance for <span className="font-semibold text-primary">{totalBrands}+</span> car brands | Specialized diagnostics for all makes
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`
                flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeTab === category.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary"
                }
              `}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className={`text-[10px] ${activeTab === category.id ? "text-white/80" : "text-gray-400"}`}>
                ({carBrands[category.id]?.length || 0})
              </span>
            </button>
          ))}
        </div>

        {/* Brands Display */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-5">
          {/* Category Header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-primary/30">
            <span className="text-xl">
              {categories.find(c => c.id === activeTab)?.icon}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {categories.find(c => c.id === activeTab)?.label} Brands
            </h3>
            <span className="text-xs text-gray-500">({currentBrands.length})</span>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {currentBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {brand.name}
                </span>
                {brand.popular && (
                  <span className="ml-auto text-[8px] bg-yellow-500/10 text-yellow-600 px-1.5 py-0.5 rounded-full">
                    ★
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {currentBrands.length === 0 && (
            <div className="text-center py-6">
              <p className="text-gray-500 dark:text-gray-400">No brands available in this category</p>
            </div>
          )}
        </div>
    
      </div>
    </section>
  );
}