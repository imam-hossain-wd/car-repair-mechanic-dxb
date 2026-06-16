// // components/ServiceCard.jsx
// import Link from "next/link";
// import { 
//   Battery, 
//   Wind, 
//   Droplet, 
//   CircleStop, 
//   Activity, 
//   Circle,
//   Zap,
//   Power,
//   Car,
//   Thermometer,
//   Settings,
//   CheckSquare,
//   Clock,
//   DollarSign,
//   Shield
// } from "lucide-react";

// // Map service slugs to icons
// const iconMap = {
//   "battery-replacement": Battery,
//   "ac-repair-service": Wind,
//   "oil-change": Droplet,
//   "brake-repair": CircleStop,
//   "engine-diagnostics": Activity,
//   "tire-replacement": Circle,
//   "alternator-repair": Zap,
//   "starter-motor-repair": Power,
//   "suspension-repair": Car,
//   "cooling-system-repair": Thermometer,
//   "transmission-service": Settings,
//   "full-car-maintenance": CheckSquare
// };

// export const ServiceCard = ({ service, featured = false }) => {
//   const Icon = iconMap[service.slug] || Settings;

//   return (
//     <div className={`
//       group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
//       transition-all duration-300 hover:shadow-xl
//       ${featured ? 'border-2 border-primary shadow-lg' : 'border border-gray-200 dark:border-gray-700'}
//     `}>
//       {/* Featured Badge */}
//       {featured && (
//         <div className="absolute top-4 right-4 z-10">
//           <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
//             Featured
//           </div>
//         </div>
//       )}

//       {/* Popular Badge */}
//       {service.popular && !featured && (
//         <div className="absolute top-4 right-4 z-10">
//           <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//             Popular
//           </div>
//         </div>
//       )}

//       {/* Emergency Badge */}
//       {service.emergency && (
//         <div className="absolute top-4 left-4 z-10">
//           <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
//             24/7 Emergency
//           </div>
//         </div>
//       )}

//       <div className="p-6">
//         {/* Icon */}
//         <div className="mb-4">
//           <div className="inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
//             <Icon className="h-8 w-8 text-primary" />
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
//           {service.name}
//         </h3>

//         {/* Short Description */}
//         <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//           {service.shortDescription}
//         </p>

//         {/* Details */}
//         <div className="space-y-2 mb-4">
//           <div className="flex items-center justify-between text-sm">
//             <span className="flex items-center gap-1 text-gray-500">
//               <Clock className="h-4 w-4" />
//               <span>Duration</span>
//             </span>
//             <span className="font-medium">{service.duration}</span>
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <span className="flex items-center gap-1 text-gray-500">
//               <DollarSign className="h-4 w-4" />
//               <span>Price</span>
//             </span>
//             <span className="font-bold text-primary">{service.price}</span>
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <span className="flex items-center gap-1 text-gray-500">
//               <Shield className="h-4 w-4" />
//               <span>Warranty</span>
//             </span>
//             <span className="font-medium">{service.warranty}</span>
//           </div>
//         </div>

//         {/* Button */}
//         <Link
//           href={`/dubai/services/${service.slug}`}
//           className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
//         >
//           Book Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// components/ServiceCard.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  DollarSign,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Wrench,
  Car,
  Battery,
  Wind,
  Droplet,
  CircleStop,
  Activity,
  Circle,
  Power,
  Thermometer,
  Settings,
  CheckSquare,
  Star
} from "lucide-react";
import { services } from "@/utils/assets";

// Map service slugs to imported icons
const iconMap = {
  "battery-replacement": services.carBattery,
  "ac-repair-service": services.airConditioner,
  "oil-change": services.engineOil2,
  "brake-repair": services.car,
  "engine-diagnostics": services.carEngine,
  "tire-replacement": services.part,
  "alternator-repair": services.carBattery,
  "starter-motor-repair": services.engine,
  "suspension-repair": services.car,
  "cooling-system-repair": services.airConditioner,
  "transmission-service": services.gear,
  "full-car-maintenance": services.maintenance,
  "car-repair": services.carRepair,
  "auto-repair": services.autoRepair,
  "chain-repair": services.chain,
  "engine-oil": services.engineOil,
  "spare-parts": services.spareParts,
  "timing-service": services.timing
};

// Service details for each card
const serviceDetails = {
  "battery-replacement": {
    includes: [
      "On-site car battery replacement Dubai",
      "Advanced battery health & voltage testing",
      "High-quality branded batteries with warranty",
      "Terminal cleaning & electrical system check"
    ],
    benefits: ["2 Years Warranty", "Free Installation", "Old Battery Disposal"]
  },
  "ac-repair-service": {
    includes: [
      "Complete AC system diagnostics",
      "Gas refill & leak detection",
      "Compressor & condenser repair",
      "Full system performance test"
    ],
    benefits: ["6 Months Warranty", "Free Inspection", "Same Day Service"]
  },
  "oil-change": {
    includes: [
      "Premium synthetic or mineral oil",
      "Oil filter replacement",
      "Engine health checkup",
      "Fluid top-ups & inspection"
    ],
    benefits: ["3 Months Warranty", "Free Top-up", "Engine Check"]
  },
  "brake-repair": {
    includes: [
      "Brake pad & rotor replacement",
      "Brake fluid flush & refill",
      "Caliper inspection & repair",
      "Complete brake system test"
    ],
    benefits: ["1 Year Warranty", "Safety Check", "Free Inspection"]
  },
  "engine-diagnostics": {
    includes: [
      "Advanced computer diagnostics",
      "Error code reading & analysis",
      "Engine performance testing",
      "Detailed repair recommendations"
    ],
    benefits: ["Free Diagnosis", "Detailed Report", "Expert Advice"]
  },
  "tire-replacement": {
    includes: [
      "Professional tire replacement",
      "Wheel alignment & balancing",
      "Tire pressure monitoring",
      "Rotation & inspection"
    ],
    benefits: ["6 Months Warranty", "Free Alignment", "Quality Brands"]
  }
};

export const ServiceCard = ({ service, featured = false }) => {
  const Icon = iconMap[service.slug] || services.carRepair;
  const details = serviceDetails[service.slug] || {
    includes: [
      "Professional service with certified mechanics",
      "Quality parts and materials",
      "Warranty on all repairs",
      "Customer satisfaction guaranteed"
    ],
    benefits: ["Warranty Included", "Free Inspection", "Quality Service"]
  };

  return (
    <div className={`
      group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
      transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
      ${featured ? 'ring-2 ring-primary shadow-xl shadow-primary/20' : 'border border-gray-100 dark:border-gray-800 shadow-lg'}
    `}>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Border Glow */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-500 ${featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

      {/* Badges Container */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
        <div className="flex flex-wrap gap-1.5">
          {/* Emergency Badge */}
          {service.emergency && (
            <div className="flex items-center gap-1 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              <Zap className="h-2.5 w-2.5" />
              24/7 Emergency
            </div>
          )}

          {/* Premium Badge */}
          {service.premium && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              <Sparkles className="h-2.5 w-2.5" />
              Premium
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {/* Featured Badge */}
          {featured && (
            <div className="flex items-center gap-1 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              <Star className="h-2.5 w-2.5 fill-white" />
              Featured
            </div>
          )}

          {/* Popular Badge */}
          {service.popular && !featured && (
            <div className="flex items-center gap-1 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              🔥 Popular
            </div>
          )}
        </div>
      </div>

      <div className="p-5 md:p-6 relative z-10">
        {/* Icon with Glass Effect */}
        <div className="relative mb-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative inline-flex p-3.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/10">
            <Image
              src={Icon}
              alt={service.name}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        {/* What's Included */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            What&apos;s Included
          </p>
          <div className="space-y-1.5">
            {details.includes.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {details.benefits.map((benefit, index) => (
            <span key={index} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {benefit}
            </span>
          ))}
        </div>

        {/* Pricing & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Starting from</p>
            <p className="text-lg font-bold text-primary">{service.price}</p>
          </div>

          <Link
            href={`/dubai/services/${service.slug}`}
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-primary/20 text-sm"
          >
            <span>Book Now</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};