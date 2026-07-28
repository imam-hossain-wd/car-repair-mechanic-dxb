
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
    alternates: {
      canonical: SiteConfig?.url,
    }


  },

  // Services Main Hub (/services)
  services: {
    title: "24/7 Mobile Car Repair Services in Dubai | On-Site Auto Fix",
    description: "Professional mobile car repair in Dubai. Doorstep battery replacement, AC repair, jump starts, brakes, diagnostics & oil changes. 24/7 roadside response.",
    alternates: {
      canonical: `${SiteConfig?.url}/services`
    }
  },

  // Area We Serve (/area-we-serve)
  areaWeServe: {
    title: "Mobile Mechanic Locations in Dubai | 15-Min On-Site Repair",
    description: "Rapid 15-minute roadside car repair across Dubai. Serving Business Bay, Downtown, Jumeirah, Oud Metha, Silicon Oasis, Al Rigga, and 15+ key neighborhoods.",
    alternates: {
      canonical: `${SiteConfig?.url}/area-we-serve`
    }
  },

  // Brands We Serve (/brands)
  brands: {
    title: "Car Repair for All Brands in Dubai | Japanese, German & Luxury",
    description: "Certified mobile repair for 40+ car brands in Dubai. Expert diagnostics & repairs for Nissan, Toyota, BMW, Mercedes, Audi, Ford, Porsche & luxury fleets.",
    alternates: {
      canonical: `${SiteConfig?.url}/brands`
    }
  },

  // Contact Us (/contact)
  contact: {
    title: "Contact 24/7 Car Repair & Mobile Mechanic Dubai | Call or WhatsApp Now",
    description: "Need roadside assistance in Dubai? Contact our mobile mechanic team 24/7. Immediate dispatch for battery, AC, and emergency engine repairs across Dubai.",
    alternates: {
      canonical: `${SiteConfig?.url}/contact`
    }
  },

  // About Us (/about)
  about: {
    title: "About Us | Dubai's Trusted 24/7 Mobile Car Repair Mechanic Team",
    description: "Learn about Dubai's leading on-site auto repair specialists. Over 10 years of trusted 24/7 emergency roadside assistance, certified technicians & warranty..",
    alternates: {
      canonical: `${SiteConfig?.url}/about`
    }
  },

  // Gallery (/gallery)
  gallery: {
    title: "Mobile Car Repair Gallery Dubai | Real On-Site Work Photos",
    description: "See our mobile mechanics in action across Dubai. Browse real photos of doorstep battery replacements, emergency roadside fixes, and AC servicing.",
    alternates: {
      canonical: `${SiteConfig?.url}/gallery`
    }
  },

  // Vehicles We Serve (/vehicle-we-serve)
  vehicleWeServe: {
    title: "Mobile Repair for All Vehicles in Dubai | Cars, SUVs & Fleets",
    description: "On-site auto repair for sedans, SUVs, luxury cars, commercial vans, and sports cars anywhere in Dubai. 24/7 roadside mechanics equipped for all models.",
    alternates: {
      canonical: `${SiteConfig?.url}/vehicle-we-serve`
    }
  },

  // Privacy Policy (/privacy)
  privacy: {
    title: "Privacy Policy | Car Repair Mechanic Dubai",
    description: "Read our Privacy Policy to learn how Car Repair Mechanic Dubai collects, protects, and securely manages your personal data and service inquiries.",
    alternates: {

      canonical: `${SiteConfig?.url}/privacy`
    }
  },

  // Terms of Service (/terms)
  terms: {
    title: "Terms of Service | Car Repair Mechanic Dubai",
    description: "Review our Terms of Service covering 24/7 mobile auto repair bookings, warranty coverage, roadside assistance, and transparent pricing in Dubai.",
    alternates: {
      canonical: `${SiteConfig?.url}/terms`
    }
  },

  // Blog Hub (/blog) - Matches your footer link preference
  blog: {
    title: "Car Maintenance Tips & Auto Guides Dubai | Mobile Mechanic Blog",
    description: "Expert automotive repair guides, summer car AC tips, battery care advice, and roadside emergency solutions from professional Dubai mechanics.",
    alternates: {
      canonical: `${SiteConfig?.url}/blogs`
    }
  }
};