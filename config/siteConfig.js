import { socialIcons } from "@/utils/assets";
import { Mail, MapPin, Phone } from "lucide-react";

const { facebook, instagram, pinterest, youtube } = socialIcons;

export const SiteConfig = {
  authorName: "Md Bappi",
  brandName: "Car Repair Mechanic Dubai",
  url: "https://www.carrepairmechanicdubai.com",
  email: "carrepairmechanicdubai@gmail.com",
  description: "Fast 24/7 mobile car repair in Dubai. We come to your home, office, or roadside. Certified mechanics, transparent pricing & guaranteed work.",
  displayNumber: "+971 55 183 1901",
  phoneNumber: "+971551831901",
  // displayNumber: "055 183 1901",
  numberCallLink: "tel:+971551831901",
  whatsappCallLink: "https://wa.me/971551831901",

  // অ্যাড্রেস এবং লোকেশন ডাটা ফিক্সড ও সিঙ্কড
  location: "Umm Hurair Rd, Oud Metha, Dubai, United Arab Emirates",
  streetAddress: "Umm Hurair Rd, Oud Metha",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  postalCode: "00000",
  // latitude: "25.24398130",
  // longitude: "55.31207400",
  mapsLink: "https://maps.app.goo.gl/PTEtNCAPebdCyEfdA",
  embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.54940443774117!2d55.31179241370409!3d25.24398128981443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433cf7f86155%3A0xf112cb3b80f3782d!2sCar%20Repair%20Mechanic%20Dubai!5e0!3m2!1sen!2sbd!4v1782232951928!5m2!1sen!2sbd",

  GMB: {
    PlaceID: "ChIJVWH49zxDXz4RLXjzgDvLEvE",
    CID: "17371170169148373037",
    BusinessProfileID: "277089818678338044",
    mapsLink: "https://maps.app.goo.gl/PTEtNCAPebdCyEfdA",
    embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.54940443774117!2d55.31179241370409!3d25.24398128981443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433cf7f86155%3A0xf112cb3b80f3782d!2sCar%20Repair%20Mechanic%20Dubai!5e0!3m2!1sen!2sbd!4v1782232951928!5m2!1sen!2sbd",
    latitude: "25.24398130",
    longitude: "55.31207400",
  },

  // serviceAreas: [
  //   { name: "Business Bay" },
  //   { name: "Al Rigga" },
  //   { name: "Dubai Land" },
  //   { name: "Jumeirah" },
  //   { name: "Al Mankhool" },
  //   { name: "Trade Center" },
  //   { name: "Dubai Silicon Oasis" },
  //   { name: "Downtown Dubai" },
  //   { name: "Za'abeel First" },
  //   { name: "Za'abeel Second" },
  //   { name: "Al Jaddaf" }
  // ],

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
    { title: "Services", href: "/services" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Sitemap", href: "/sitemap.xml" }
  ],

  socialLinks: [
    { name: "Facebook", icon: facebook, href: "https://www.facebook.com/carrepairmechanicdubai/" },
    { name: "Instagram", icon: instagram, href: "https://www.instagram.com/carrepairmechanicdubai/" },
    { name: "Pinterest", icon: pinterest, href: "https://www.pinterest.com/carrepairmechanicdubai/" },
    { name: "YouTube", icon: youtube, href: "https://www.youtube.com/@carrepairmechanicdubai" }
  ],

  contactLinks: [
    { name: "Map", icon: MapPin, href: "" },
    { name: "Phone", icon: Phone, href: "tel:+971551831901" },
    { name: "Email", icon: Mail, href: "mailto:carrepairmechanicdubai@gmail.com" }
  ]
};

export const {
  contactLinks,
  socialLinks,
  footerhrefs,
  navItems,
  serviceAreas,
  location,
  streetAddress,
  addressLocality,
  addressRegion,
  addressCountry,
  postalCode,
  latitude,
  longitude,
  mapsLink,
  numberCallLink,
  whatsappCallLink,
  operatingHours,
  displayNumber,
  description,
  email,
  url,
  brandName,
  authorName,
  city,
  country
} = SiteConfig;