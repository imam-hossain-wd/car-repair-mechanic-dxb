// // components/ServiceArea/AllServices.jsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { 
//   Wrench, 
//   ArrowRight,
//   CheckCircle2
// } from "lucide-react";
// import { getServicesNameSlug } from "@/utils/getServicesNameSlug";

// export function AreaServices({ area }) {
//   const areaName = area?.name || "Dubai";

//   // Get all services with their slugs
//   const allServices = getServicesNameSlug();

//   return (
//     <section className="py-16 bg-white dark:bg-gray-950">
//       <div className="container mx-auto px-4">

//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto text-center mb-10">
//           <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
//             <Wrench className="h-3.5 w-3.5 text-primary" />
//             <span className="text-xs font-medium text-primary uppercase tracking-wide">
//               Our Services
//             </span>
//           </div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
//             All Car Repair Services in{' '}
//             <span className="text-primary">{areaName}</span>
//           </h2>

//           <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
//             Professional mobile car repair solutions for every vehicle problem in {areaName}
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
//           {allServices.map((service, index) => (
//             <Link
//               key={index}
//               href={`/services/${service.slug}`}
//               className="group bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* Icon Container */}
//               <div className="flex justify-center mb-2">
//                 <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
//                   {service.icon ? (
//                     <Image
//                       src={service.icon}
//                       alt={service.name}
//                       width={40}
//                       height={40}
//                       className="h-10 w-10 object-contain"
//                     />
//                   ) : (
//                     <Wrench className="h-3 w-3 text-primary" />
//                   )}
//                 </div>
//               </div>

//               {/* Service Name */}
//               <h3 className="text-xs  text-gray-900 dark:text-white group-hover:text-primary transition-colors">
//                 {service.name + " "+ area.name}
//               </h3>
//             </Link>
//           ))}
//         </div>

//         {/* Service Categories */}
//         <div className="max-w-4xl mx-auto mt-10 p-5 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-700">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center">
//             {[
//               { label: "Battery Services", count: "3" },
//               { label: "AC & Cooling", count: "2" },
//               { label: "Engine & Performance", count: "4" },
//               { label: "Brake & Suspension", count: "2" },
//             ].map((category, index) => (
//               <div key={index} className="p-2">
//                 <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
//                   {category.label}
//                 </span>
//                 <span className="block text-lg font-bold text-primary">
//                   {category.count}+
//                 </span>
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-xs text-gray-500 mt-3">
//             All services available at your location in {areaName}
//           </p>
//         </div>

//         {/* SEO Hidden Content */}
//         <div className="sr-only">
//           <p>
//             We provide professional car repair services in {areaName} including 
//             {allServices.map(s => s.name).join(", ")}. 
//             Our mobile mechanics serve all areas of {areaName} with fast response times.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/ServiceArea/AllServicesMinimal.jsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Wrench } from "lucide-react";
// import { areaServices } from "@/utils/getAreasService";
// // import { getServicesNameSlug } from "@/utils/getServicesNameSlug";

// export function AllServicesMinimal({ area }) {
//   const areaName = area?.name || "Dubai";
//   const allServices = areaServices;

//   return (
//     <section className="py-5 bg-gray-50 dark:bg-gray-900/50">
//       <div className="container mx-auto px-4">

//         <div className="text-center max-w-3xl mx-auto mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
//             Services We Offer in{' '}
//             <span className="text-primary">{areaName}</span>
//           </h2>
//         </div>

//         {/* <div className="grid grid-cols-4 justify-center gap-3 w-[90%] mx-auto">
//           {allServices.map((service, index) => (
//             <div
//               key={index}

//               className="flex items-center gap-2 w-65 px-2 py-1.5 bg-white  rounded-lg border border-primary "
//             >
//               {service.icon ? (
//                 <Image
//                   src={service.icon}
//                   alt={service.name}
//                   width={18}
//                   height={18}
//                   quality={100}
//                   className="h-6 w-6 object-contain"
//                 />
//               ) : (
//                 <Wrench className="h-3.5 w-3.5 text-primary" />
//               )}
//               <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
//                 {service.name}
//               </span>
//             </div>
//           ))}
//         </div> */}
//         <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3 w-[90%] mx-auto">
//           {allServices.map((service, index) => (
//             <div
//               key={index}

//               className="flex flex-col items-center gap-2 w-65 px-2 py-1.5 bg-primary/5  rounded-lg "
//             >
//               {service.icon &&
//                 <div className="w-14 h-14 bg-white border-2 border-primary flex justify-center items-center rounded-full ">
//                   <Image
//                     src={service.icon}
//                     alt={service.name}
//                     width={18}
//                     height={18}
//                     quality={100}
//                     className="h-6 w-6 object-contain"
//                   />
//                 </div>
//               }
//               <span className="text-md font-medium text-white bg-primary px-2 rounded">
//                 {service.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { Wrench, ArrowRight } from "lucide-react";
import { areaServices } from "@/utils/getAreasService";
import { AreaServiceCard } from "./AreaServiceCard";


export function AreaServices({ area }) {
  const areaName = area?.name || "Dubai";
  const allServices = areaServices;


  return (
    <section className="py-5 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <Wrench className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Our Services
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Services We Offer in{' '}
            <span className="text-primary">{areaName}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {allServices.map((service, index) => (
            <AreaServiceCard key={index} service={service} />
          ))}
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            We provide professional car repair services in {areaName} including 
            {allServices.map(s => s.name).join(", ")}.
          </p>
        </div>
      </div>
    </section>
  );
}
