import { MessageSquare, MessageCircleWarning, Mail, MapPin, Phone, Bird, Camera } from "lucide-react";

// Define all services with complete details
export const services = [
  {
    id: 1,
    name: "Battery Replacement",
    slug: "battery-replacement",
    icon: "Battery",
    shortDescription: "Fast battery diagnostics and replacement",
    description: "Expert battery replacement service with warranty. We test your battery, alternator, and starting system to ensure reliable performance. On-site service with premium quality batteries.",
    price: "From AED 250",
    duration: "30-45 mins",
    warranty: "2 Years Warranty",
    featured: true,
    popular: true,
    emergency: true
  },
  {
    id: 2,
    name: "AC Repair & Service",
    slug: "ac-repair-service",
    icon: "Wind",
    shortDescription: "Complete AC diagnostics and repair",
    description: "Professional AC repair and maintenance service. We fix all AC issues including gas refill, compressor repair, leak detection, and complete system check for optimal cooling performance.",
    price: "From AED 199",
    duration: "1-2 hours",
    warranty: "6 Months Warranty",
    featured: true,
    popular: true,
    emergency: true
  },
  {
    id: 3,
    name: "Oil Change Service",
    slug: "oil-change",
    icon: "Droplet",
    shortDescription: "Engine oil and filter replacement",
    description: "Regular oil change is crucial for engine health. We provide complete oil change service with high-quality synthetic or mineral oil, oil filter replacement, and engine health checkup.",
    price: "From AED 180",
    duration: "30-45 mins",
    warranty: "3 Months Warranty",
    featured: true,
    popular: true,
    emergency: false
  },
  {
    id: 4,
    name: "Brake Repair & Service",
    slug: "brake-repair",
    icon: "CircleStop",
    shortDescription: "Complete brake system repair",
    description: "Ensure your safety with our professional brake service. We replace brake pads, rotors, calipers, and perform complete brake system inspection and repair for all vehicle types.",
    price: "From AED 350",
    duration: "1-2 hours",
    warranty: "1 Year Warranty",
    featured: true,
    popular: true,
    emergency: true
  },
  {
    id: 5,
    name: "Engine Diagnostics",
    slug: "engine-diagnostics",
    icon: "Activity",
    shortDescription: "Advanced computer diagnostics",
    description: "State-of-the-art diagnostic tools to identify engine problems accurately. We scan all electronic systems, read error codes, and provide detailed reports with repair solutions.",
    price: "From AED 150",
    duration: "45-60 mins",
    warranty: "3 Months Warranty",
    featured: true,
    popular: true,
    emergency: false
  },
  {
    id: 6,
    name: "Tire Replacement & Repair",
    slug: "tire-replacement",
    icon: "Circle",
    shortDescription: "Professional tire services",
    description: "Complete tire solutions including replacement, puncture repair, tire rotation, balancing, and alignment. We stock all major brands and sizes for immediate service.",
    price: "From AED 200",
    duration: "45 mins - 1.5 hours",
    warranty: "6 Months Warranty",
    featured: true,
    popular: true,
    emergency: true
  },
  {
    id: 7,
    name: "Alternator Repair",
    slug: "alternator-repair",
    icon: "Zap",
    shortDescription: "Alternator testing and replacement",
    description: "Expert alternator repair and replacement service. We diagnose charging system issues, repair or replace alternators, and ensure your battery is charging properly.",
    price: "From AED 400",
    duration: "1-2 hours",
    warranty: "1 Year Warranty",
    featured: false,
    popular: true,
    emergency: true
  },
  {
    id: 8,
    name: "Starter Motor Repair",
    slug: "starter-motor-repair",
    icon: "Power",
    shortDescription: "Starter motor diagnostics and repair",
    description: "Professional starter motor repair and replacement. We fix all starting system issues including clicking sounds, slow cranking, and complete starter failure.",
    price: "From AED 350",
    duration: "1-2 hours",
    warranty: "1 Year Warranty",
    featured: false,
    popular: false,
    emergency: true
  },
  {
    id: 9,
    name: "Suspension Repair",
    slug: "suspension-repair",
    icon: "Car",
    shortDescription: "Complete suspension system repair",
    description: "Comprehensive suspension repair including shock absorbers, struts, control arms, ball joints, and bushings. We ensure smooth ride and better handling.",
    price: "From AED 500",
    duration: "2-3 hours",
    warranty: "1 Year Warranty",
    featured: false,
    popular: false,
    emergency: false
  },
  {
    id: 10,
    name: "Cooling System Repair",
    slug: "cooling-system-repair",
    icon: "Thermometer",
    shortDescription: "Radiator and cooling system service",
    description: "Complete cooling system repair including radiator replacement, coolant flush, water pump repair, thermostat replacement, and hose repairs to prevent overheating.",
    price: "From AED 300",
    duration: "1.5-2.5 hours",
    warranty: "6 Months Warranty",
    featured: false,
    popular: false,
    emergency: true
  },
  {
    id: 11,
    name: "Transmission Service",
    slug: "transmission-service",
    icon: "Settings",
    shortDescription: "Automatic & manual transmission repair",
    description: "Professional transmission service including fluid change, filter replacement, clutch repair, and complete transmission diagnostics for smooth gear shifting.",
    price: "From AED 450",
    duration: "2-4 hours",
    warranty: "6 Months Warranty",
    featured: false,
    popular: false,
    emergency: false
  },
  {
    id: 12,
    name: "Full Car Maintenance",
    slug: "full-car-maintenance",
    icon: "CheckSquare",
    shortDescription: "Complete vehicle inspection and service",
    description: "Comprehensive maintenance package including all major systems check, oil change, filter replacement, fluid top-ups, brake inspection, tire rotation, and detailed health report.",
    price: "From AED 599",
    duration: "3-4 hours",
    warranty: "3 Months Warranty",
    featured: true,
    popular: true,
    emergency: false
  }
];

// Helper function to get service name and slug
export const getServiceNameSlug = (services) => {
  return services.map(service => ({
    name: service.name,
    slug: service.slug,
    id: service.id
  }));
};

const serviceList = getServiceNameSlug(services);

export const SiteConfig = {
  authorName: "Md Bappi",
  brandName: "Car Repair Mechanic Dubai",
  url: "https://www.carrepairmechanicdubai.com",
  email: "carrepairmechanicdubai@gmail.com",
  description: "Broke down? Get Dubai's #1 mobile mechanic at your doorstep in 5 to 15 mins. We provide 24/7 car repair, battery replacement & AC service across Dubai. Fast, reliable, and affordable auto repair wherever you are in the city.",
  displayNumber: "+971 54 323 7225",
  // displayNumber: "+971 56 831 6301",
  numberCallLink: "tel:+971543237225",
  whatsappCallLink: "https://wa.me/971543237225",
  location: "Dubai Healthcare city, Dubai - UAE",
  // location: "408 26th st, Umm Hurair Second,  Dubai Healthcare city, Dubai - UAE",
  latitude: "",
  longitude: "",
  coordinate: "",
  mapsLink: "",
  
serviceAreas: [
    {
      name: "Business Bay",
      href: "/area-we-serve/business-bay",
      title: "Car Repair & Mobile Mechanic Service in Business Bay – Fast & Reliable",
      // description: "Expert mobile car repair and mechanic service in Business Bay, Dubai. We provide on-site battery replacement, emergency jump start, AC repair, brake service, diagnostics, and roadside assistance with rapid response times.",
      slug: "business-bay",
      highlight: "Premium Commercial Hub",
      responseTime: "15 min"
    },
    {
      name: "Al Rigga",
      href: "/area-we-serve/al-rigga",
      title: "Car Repair in Al Rigga – Mobile Mechanic & Emergency Auto Service",
      // description: "Trusted mobile car repair service in Al Rigga, Dubai. We provide quick battery replacement, jump start, AC repair, brake service, diagnostics, and 24/7 roadside assistance at your spot.",
      slug: "al-rigga",
      highlight: "Deira Business District",
      responseTime: "16 min"
    },
    {
      name: "Dubai Land",
      href: "/area-we-serve/dubai-land",
      title: "Car Repair in Dubai Land – Mobile Mechanic & Battery Replacement",
      description: "Professional mobile car repair service in Dubai Land. Get fast battery replacement, emergency jump start, AC repair, brake service, oil change, and full vehicle diagnostics at your location.",
      slug: "dubai-land",
      highlight: "Expansive Residential District",
      responseTime: "22 min"
    },
    {
      name: "Jumeirah",
      href: "/area-we-serve/jumeirah",
      title: "Car Repair in Jumeirah – Professional Mobile Mechanic Service",
      description: "Premium mobile car repair service in Jumeirah, Dubai. Offering on-site battery replacement, emergency jump start, AC repair, brake service, diagnostics, and routine auto maintenance.",
      slug: "jumeirah",
      highlight: "Coastal Residential Area",
      responseTime: "18 min"
    },
    {
      name: "Al Mankhool",
      href: "/area-we-serve/al-mankhool",
      title: "Car Repair in Al Mankhool – Trusted Mobile Mechanic Near You",
      description: "Expert car repair and mobile mechanic service in Al Mankhool. We specialize in rapid battery replacement, alternator repair, AC service, brake repair, and same-day roadside auto care.",
      slug: "al-mankhool",
      highlight: "Bur Dubai Residential Zone",
      responseTime: "15 min"
    },
    {
      name: "Trade Center",
      href: "/area-we-serve/trade-center",
      title: "Car Repair Near Trade Center – Mobile Mechanic & Auto Service",
      description: "Fast and professional car repair service near Dubai Trade Center. We offer mobile battery replacement, jump start, AC repair, brake service, diagnostics, and full maintenance at your convenience.",
      slug: "trade-center",
      highlight: "Financial & Exhibition District",
      responseTime: "14 min"
    },
    {
      name: "Dubai Silicon Oasis",
      href: "/area-we-serve/dubai-silicon-oasis",
      title: "Car Repair in Dubai Silicon Oasis – Mobile Mechanic & Battery Service",
      description: "Reliable mobile car repair service in Dubai Silicon Oasis (DSO). Get fast on-site battery replacement, emergency jump start, AC repair, brake service, and vehicle diagnostics.",
      slug: "dubai-silicon-oasis",
      highlight: "Technology & Residential Hub",
      responseTime: "18 min"
    },
    {
      name: "Downtown Dubai",
      href: "/area-we-serve/downtown-dubai",
      title: "Car Repair in Downtown Dubai – Mobile Mechanic Near You",
      description: "Premium mobile car repair service in Downtown Dubai. Affordable and fast battery replacement, AC repair, brake service, oil change, diagnostics, and roadside assistance available 24/7.",
      slug: "downtown-dubai",
      highlight: "Central Iconic District",
      responseTime: "15 min"
    },
    {
      name: "Za'abeel First",
      href: "/area-we-serve/zaabeel-first",
      title: "Car Repair in Za'abeel First – Mobile Mechanic & Auto Support",
      description: "Premium mobile car repair service in Za'abeel First. Get expert on-site battery replacement, vehicle diagnostics, AC repair, brake service, and quick roadside assistance.",
      slug: "zaabeel-first",
      highlight: "Central Business & Royal Zone",
      responseTime: "16 min"
    },
    {
      name: "Za'abeel Second",
      href: "/area-we-serve/zaabeel-second",
      title: "Car Repair in Za'abeel Second – Mobile Mechanic Service",
      description: "Expert mobile car repair service in Za'abeel Second. We provide quick battery replacement, emergency jump start, AC repair, brake service, and complete auto maintenance at your exact location.",
      slug: "zaabeel-second",
      highlight: "Adjacent Corporate & Residential",
      responseTime: "16 min"
    },
    {
      name: "Al Jaddaf",
      href: "/area-we-serve/al-jaddaf",
      title: "Car Repair in Al Jaddaf – Mobile Mechanic & Battery Replacement",
      description: "Reliable car repair service in Al Jaddaf, Dubai. We provide mobile battery replacement, AC repair, brake service, oil change, engine diagnostics, and on-site emergency mechanic support.",
      slug: "al-jaddaf",
      highlight: "Waterfront & Residential Zone",
      responseTime: "18 min"
    }
  ],
  
  operatingHours: [
    { day: "Saturday", hours: "24 Hours" },
    { day: "Sunday", hours: "24 Hours" },
    { day: "Monday", hours: "24 Hours" },
    { day: "Tuesday", hours: "24 Hours" },
    { day: "Wednesday", hours: "24 Hours" },
    { day: "Thursday", hours: "24 Hours" },
    { day: "Friday", hours: "24 Hours" },
  ],
  
  city: "Dubai",
  country: "UAE",
  services: serviceList,
  fullServices: services, // Export full service details
  
  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas We Serve", href: "/area-we-serve" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  
  footerhrefs: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    // { title: "Blog", href: "/blogs" },
    { title: "Services", href: "/services" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Sitemap", href: "/sitemap.xml" }
  ],

  socialLinks: [
    { name: "Facebook", icon: MessageSquare, href: "" },
    { name: "Instagram", icon: MessageCircleWarning, href: "" },
    { name: "Twitter", icon: Bird, href: "" },
    { name: "YouTube", icon: Camera, href: "" }
  ],
  
  contactLinks: [
    { name: "Map", icon: MapPin, href: "" },
    { name: "Phone", icon: Phone, href: "tel:+971 54 323 7225" },
    { name: "Email", icon: Mail, href: "mailto:carrepairmechanicdubai@gmail.com" }
  ]
};

// Export individual constants for easier access
export const {
  contactLinks, 
  socialLinks, 
  footerhrefs, 
  navItems, 
  serviceAreas, 
  coordinate, 
  location, 
  numberCallLink, 
  whatsappCallLink, 
  operatingHours, 
  displayNumber, 
  description, 
  email, 
  url, 
  brandName, 
  authorName,
  fullServices
} = SiteConfig;