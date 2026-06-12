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
  url: "https://carrepairmechanic.ae",
  email: "carmechanicdxb@gmail.com",
  description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
  displayNumber: "+971 56 870 3512",
  numberCallLink: "tel:+971568703512",
  whatsappCallLink: "https://wa.me/971568703512",
  location: "Al Karama, Dubai - UAE",
  latitude: "25.24852130",
  longitude: "55.30598240",
  coordinate: "25.24852130, 55.30598240",
  mapsLink: "https://maps.app.goo.gl/TRTrc71UqPULUaKy7",
  
  serviceAreas: [
    {
      name: "Al Karama",
      href: "/dubai/area-we-serve/al-karama",
      title: "Car Repair & Mobile Mechanic Service in Al Karama – Fast & Reliable",
      description: "Expert car repair and mobile mechanic service in Al Karama, Dubai. We provide on-site battery replacement, jump start, AC repair, oil change, brake service, diagnostics, and complete auto maintenance with quick response times.",
      slug: "al-karama",
      highlight: "Central Dubai Coverage",
      responseTime: "15 min"
    },
    {
      name: "Damac Hills",
      href: "/dubai/area-we-serve/damac-hills",
      title: "Car Repair in Damac Hills – Mobile Mechanic & Battery Replacement",
      description: "Professional mobile car repair service in Damac Hills, Dubai. Get fast battery replacement, emergency jump start, AC repair, brake service, oil change, and full vehicle diagnostics at your location.",
      slug: "damac-hills",
      highlight: "Residential & Park Area",
      responseTime: "18 min"
    },
    {
      name: "Damac Hills 2",
      href: "/dubai/area-we-serve/damac-hills-2",
      title: "Car Repair in Damac Hills 2 – Mobile Mechanic & Battery Replacement",
      description: "Professional mobile car repair service in Damac Hills, Dubai. Get fast battery replacement, emergency jump start, AC repair, brake service, oil change, and full vehicle diagnostics at your location.",
      slug: "damac-hills-2",
      highlight: "Residential & Park Area",
      responseTime: "18 min"
    },
    {
      name: "Business Bay",
      href: "/dubai/area-we-serve/business-bay",
      title: "Car Repair in Business Bay – Mobile Mechanic & Battery Replacement",
      description: "Professional mobile car repair service in Business Bay, Dubai. Get fast battery replacement, emergency jump start, AC repair, brake service, oil change, and full vehicle diagnostics at your location.",
      slug: "business-bay",
      highlight: "Residential & Park Area",
      responseTime: "18 min"
    },
    {
      name: "Dubai Silicon Oasis",
      href: "/dubai/area-we-serve/dubai-silicon-oasis",
      title: "Car Repair in Dubai Silicon Oasis – Mobile Mechanic & Battery Replacement",
      description: "Professional mobile car repair service in Dubai Silicon Oasis, Dubai. Get fast battery replacement, emergency jump start, AC repair, brake service, oil change, and full vehicle diagnostics at your location.",
      slug: "dubai-silicon-oasis",
      highlight: "Residential & Park Area",
      responseTime: "18 min"
    },
    {
      name: "Dubai Maria",
      href: "/dubai/area-we-serve/dubai-maria",
      title: "Car Repair in Dubai Dubai Maria – Mobile Mechanic & Battery Replacement",
      description: "Professional mobile car repair service in Dubai Dubai Maria, Dubai. Get fast battery replacement, emergency jump start, AC repair, brake service, oil change, and full vehicle diagnostics at your location.",
      slug: "dubai-maria",
      highlight: "Residential & Park Area",
      responseTime: "18 min"
    },
    {
      name: "Al Rigga",
      href: "/dubai/area-we-serve/al-rigga",
      title: "Car Repair in Al Rigga – Mobile Mechanic & Emergency Auto Service",
      description: "Trusted mobile car repair service in Al Rigga, Dubai. We provide quick battery replacement, jump start, AC repair, brake service, diagnostics, and roadside assistance 24/7.",
      slug: "al-rigga",
      highlight: "Deira Business District",
      responseTime: "16 min"
    },
    {
      name: "Al Raffa",
      href: "/dubai/area-we-serve/al-raffa",
      title: "Car Repair in Al Raffa – Trusted Mobile Mechanic Service",
      description: "Expert car repair and mobile mechanic service in Al Raffa. We specialize in battery replacement, alternator repair, AC service, oil change, brake repair, and same-day auto maintenance.",
      slug: "al-raffa",
      highlight: "Commercial Area Service",
      responseTime: "16 min"
    },
    {
      name: "Dubai Creek",
      href: "/dubai/area-we-serve/dubai-creek",
      title: "Car Repair Near Dubai Creek – Mobile Mechanic & Battery Service",
      description: "Professional mobile car repair service near Dubai Creek. Offering on-site battery replacement, jump start, AC repair, brake service, diagnostics, and routine maintenance.",
      slug: "dubai-creek",
      highlight: "Waterfront Coverage",
      responseTime: "22 min"
    },
    {
      name: "Al Jadaf",
      href: "/dubai/area-we-serve/al-jadaf",
      title: "Car Repair in Al Jadaf – Mobile Mechanic & Battery Replacement",
      description: "Reliable car repair service in Al Jadaf, Dubai. We provide mobile battery replacement, AC repair, brake service, oil change, engine diagnostics, and on-site mechanic support.",
      slug: "al-jadaf",
      highlight: "Healthcare & Residential Zone",
      responseTime: "25 min"
    },
    {
      name: "Zaa'beel First",
      href: "/dubai/area-we-serve/zaabeel-first",
      title: "Car Repair in Zaa'beel First – Mobile Mechanic & Auto Service",
      description: "Premium mobile car repair service in Zaa'beel First. Get expert battery replacement, diagnostics, AC repair, brake service, oil change, and roadside assistance.",
      slug: "zaabeel-first",
      highlight: "Central Business District",
      responseTime: "20 min"
    },
    {
      name: "Dubai Festival City",
      href: "/dubai/area-we-serve/dubai-festival-city",
      title: "Car Repair in Dubai Festival City – Mobile Mechanic Near You",
      description: "Fast and professional car repair service in Dubai Festival City. We offer mobile battery replacement, AC repair, brake service, diagnostics, and full car maintenance at your doorstep.",
      slug: "dubai-festival-city",
      highlight: "Family & Retail Hub",
      responseTime: "24 min"
    },
    {
      name: "Nadd Al Hamar",
      href: "/dubai/area-we-serve/nadd-al-hamar",
      title: "Car Repair in Nadd Al Hamar – Mobile Mechanic & Battery Replacement",
      description: "Reliable mobile car repair service in Nadd Al Hamar. We offer battery replacement, jump start, AC repair, brake service, oil change, and full vehicle diagnostics.",
      slug: "nadd-al-hamar",
      highlight: "Quiet Residential Zone",
      responseTime: "27 min"
    },
    {
      name: "Al Rashidiya",
      href: "/dubai/area-we-serve/al-rashidiya",
      title: "Car Repair in Al Rashidiya – Mobile Mechanic Near You",
      description: "Affordable and fast car repair service in Al Rashidiya, Dubai. Mobile battery replacement, AC repair, brake service, oil change, diagnostics, and roadside assistance available.",
      slug: "al-rashidiya",
      highlight: "Airport Residential Area",
      responseTime: "21 min"
    },
    {
      name: "Nadd Shamma",
      href: "/dubai/area-we-serve/nadd-shamma",
      title: "Car Repair in Nadd Shamma – Mobile Mechanic & Auto Service",
      description: "Expert mobile car repair service in Nadd Shamma. We provide battery replacement, jump start, AC repair, brake service, oil change, and complete auto maintenance at your location.",
      slug: "nadd-shamma",
      highlight: "Deira Border Area",
      responseTime: "22 min"
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
    { name: "Services", href: "/dubai/services" },
    { name: "Areas We Serve", href: "/dubai/area-we-serve" },
    { name: "About", href: "/dubai/about" },
    { name: "Contact", href: "/dubai/contact" },
    { name: "Blog", href: "/dubai/blog" },
  ],
  
  footerhrefs: [
    { title: "About Us", href: "/dubai/about" },
    { title: "Contact", href: "/dubai/contact" },
    { title: "Blog", href: "/dubai/blog" },
    { title: "Services", href: "/dubai/services" },
    { title: "Privacy Policy", href: "/dubai/privacy" },
    { title: "Terms of Service", href: "/dubai/terms" },
    { title: "Sitemap", href: "/sitemap.xml" }
  ],

  socialLinks: [
    { name: "Facebook", icon: MessageSquare, href: "https://facebook.com/fixcardubai" },
    { name: "Instagram", icon: MessageCircleWarning, href: "https://instagram.com/fixcardubai" },
    { name: "Twitter", icon: Bird, href: "https://twitter.com/fixcardubai" },
    { name: "YouTube", icon: Camera, href: "https://youtube.com/fixcardubai" }
  ],
  
  contactLinks: [
    { name: "Map", icon: MapPin, href: "https://maps.app.goo.gl/SPtYU8eEz5jw8fDa7" },
    { name: "Phone", icon: Phone, href: "tel:+971568703512" },
    { name: "Email", icon: Mail, href: "mailto:fixcardubai@gmail.com" }
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