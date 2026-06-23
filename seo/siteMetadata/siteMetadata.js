
// ########## home page title , description ###################
// export const metadata = {
//   title: "Mobile Mechanic Dubai | 24/7 Car Repair at Your Doorstep",
//   description: "Broke down? Get Dubai's #1 mobile mechanic at your doorstep in 30 mins. We provide 24/7 car repair, battery replacement & AC service across Dubai. Call now!",
//   keywords: ["Mobile Mechanic Dubai", "Car Repair Dubai", "Emergency Car Service Dubai", "Battery Replacement Dubai", "Roadside Assistance Dubai"],
//   alternates: {
//     canonical: SiteConfig.url,
//   },
// };
// -----------------------------------------

import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  // Root / Home Page (/)
  home: {
    title: "Mobile Mechanic & 24/7 Car Repair Dubai | Car Repair Mechanic Dubai",
    description: "Broke down? Get Dubai's #1 mobile mechanic at your doorstep in 5-15 mins. 24/7 emergency car repair, battery replacement & AC service across Dubai.",
    canonical: SiteConfig?.url
  },

  // Services Main Hub (/services)
  services: {
    title: "Professional On-Site Car Repair Services | Car Repair Mechanic Dubai",
    description: "Explore our mobile auto repair services in Dubai. From roadside battery replacement and jump starts to AC repair, brakes, and diagnostics at your location.",
    canonical: `${SiteConfig?.url}/services`
  },

  // Area We Serve (/area-we-serve)
  areaWeServe: {
    title: "Areas We Serve in Dubai | Mobile Auto Repair Locations",
    description: "Quick 15-minute roadside assistance across Dubai. Serving Business Bay, Downtown, Jumeirah, Dubai Silicon Oasis, Al Rigga, Al Jaddaf, and more.",
    canonical: `${SiteConfig?.url}/area-we-serve`
  },

  // Brands We Serve (/brands)
  brands: {
    title: "Car Brands We Repair & Service | Car Repair Mechanic Dubai",
    description: "Expert mobile repair for all major vehicle brands in Dubai. Specializing in Nissan, Toyota, BMW, Mercedes, Ford, Hyundai, and luxury auto repair.",
    canonical: `${SiteConfig?.url}/brands`
  },

  // Contact Us (/contact)
  contact: {
    title: "Contact Our 24/7 Mobile Mechanic Team | Car Repair Mechanic Dubai",
    description: "Need emergency roadside assistance? Call +971 54 323 7225 or message us on WhatsApp. Our mobile auto mechanics are ready across Dubai 24/7.",
    canonical: `${SiteConfig?.url}/contact`
  },

  // About Us (/about)
  about: {
    title: "About Us | Expert Mobile Mechanics & Car Repair in Dubai",
    description: "Learn more about Dubai's trusted on-site auto repair specialists. Reliable, affordable, and rapid-response emergency roadside mechanics available 24/7.",
    canonical: `${SiteConfig?.url}/about`
  },

  // Gallery (/gallery)
  gallery: {
    title: "Our Work Gallery | Mobile Car Repair & Battery Fixes Dubai",
    description: "See our professional on-site mobile mechanics in action. Real photos of battery replacements, emergency roadside repairs, and AC servicing across Dubai.",
    canonical: `${SiteConfig?.url}/gallery`
  },

  // Vehicles We Serve (/vehicle-we-serve)
  vehicleWeServe: {
    title: "Vehicles We Serve | Car, SUV & Luxury Fleet Repair Dubai",
    description: "On-site mechanical repair and breakdown services for sedans, SUVs, luxury cars, commercial vans, and sports cars anywhere in Dubai.",
    canonical: `${SiteConfig?.url}/vehicle-we-serve`
  },

  // Privacy Policy (/privacy)
  privacy: {
    title: "Privacy Policy | Car Repair Mechanic Dubai",
    description: "Read our privacy policy to understand how we collect, protect, and safely process your personal information and local service data.",
    canonical: `${SiteConfig?.url}/privacy`
  },

  // Terms of Service (/terms)
  terms: {
    title: "Terms of Service | Car Repair Mechanic Dubai",
    description: "Review the terms and conditions regarding our 24/7 emergency roadside car repair, mobile booking, and auto maintenance services in Dubai.",
    canonical: `${SiteConfig?.url}/terms`
  },

  // Blog Hub (/blog) - Matches your footer link preference
  blog: {
    title: "Dubai Car Repair Blog & Maintenance Tips | Car Repair Mechanic",
    description: "Expert automotive advice, battery troubleshooting guides, car AC maintenance tips, and insights from professional mechanics in Dubai.",
    canonical: `${SiteConfig?.url}/blogs`
  }
};