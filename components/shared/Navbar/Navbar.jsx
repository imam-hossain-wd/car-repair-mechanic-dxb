// components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Wrench,
  ChevronDown,
  Battery,
  Wind,
  Droplet,
  Car,
  Zap,
  MapPin,
  Flag,
  Truck,
  Phone,
  Calendar,
  Sparkles,
  House,
  X,
  PhoneCall,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "../Drawer/Drawer";
import { SiteConfig } from "@/config/siteConfig";
import Logo from "../Logo/Logo";

// Services dropdown data
const servicesDropdown = [
  { name: "Auto Repair", slug: "auto-repair" },
  { name: "Car Battery Replacement", slug: "battery-replacement"},
  { name: "Jump Start Service", slug: "jump-start",  },
  { name: "AC Repair Service", slug: "ac-repair", },
  { name: "Radiator Repair", slug: "radiator-repair",},
  { name: "Oil Change Service", slug: "oil-change", },
  { name: "Car Mechanic Service", slug: "mechanic-service"},
  { name: "Brake Repair", slug: "brake-repair"},
  { name: "Engine Diagnostics", slug: "engine-diagnostics"},
  { name: "Transmission Service", slug: "transmission" },
];
// const servicesDropdown = [
//   { name: "Auto Repair", slug: "auto-repair",  description: "Complete car repair solutions" },
//   { name: "Car Battery Replacement", slug: "battery-replacement",description: "2 years warranty" },
//   { name: "Jump Start Service", slug: "jump-start",  description: "24/7 emergency" },
//   { name: "AC Repair Service", slug: "ac-repair", description: "Fast cooling solutions" },
//   { name: "Radiator Repair", slug: "radiator-repair", description: "Overheating fix" },
//   { name: "Oil Change Service", slug: "oil-change",  description: "Engine protection" },
//   { name: "Car Mechanic Service", slug: "mechanic-service",  description: "Full inspection" },
//   { name: "Brake Repair", slug: "brake-repair",  description: "Safety first" },
//   { name: "Engine Diagnostics", slug: "engine-diagnostics",  description: "Advanced scanning" },
//   { name: "Transmission Service", slug: "transmission", description: "Smooth shifting" },
// ];

// Area we serve dropdown
const areaDropdown = [
  { name: "Al Karama", slug: "al-karama", responseTime: "15 min" },
  { name: "Business Bay", slug: "business-bay", responseTime: "18 min" },
  { name: "Damac Hills", slug: "damac-hills", responseTime: "18 min" },
  { name: "Dubai Silicon Oasis", slug: "dubai-silicon-oasis", responseTime: "18 min" },
  { name: "Al Rigga", slug: "al-rigga", responseTime: "16 min" },
  { name: "Dubai Marina", slug: "dubai-marina", responseTime: "20 min" },
  { name: "Jumeirah", slug: "jumeirah", responseTime: "17 min" },
  { name: "Deira", slug: "deira", responseTime: "15 min" },
];

// Brands we serve dropdown
const brandsDropdown = [
  { name: "Toyota", slug: "toyota", origin: "Japanese" },
  { name: "Honda", slug: "honda", origin: "Japanese" },
  { name: "Nissan", slug: "nissan", origin: "Japanese" },
  { name: "BMW", slug: "bmw", origin: "German" },
  { name: "Mercedes-Benz", slug: "mercedes-benz", origin: "German" },
  { name: "Audi", slug: "audi", origin: "German" },
  { name: "Ford", slug: "ford", origin: "American" },
  { name: "Chevrolet", slug: "chevrolet", origin: "American" },
  { name: "Hyundai", slug: "hyundai", origin: "Korean" },
  { name: "Kia", slug: "kia", origin: "Korean" },
  { name: "Volvo", slug: "volvo", origin: "European" },
  { name: "Land Rover", slug: "land-rover", origin: "European" },
  { name: "All Brands", slug: "all-brands", origin: "View All", highlight: true },
];

// Batteries we serve dropdown
const batteriesDropdown = [
  { name: "Bosch", slug: "bosch", warranty: "2 Years", type: "Premium" },
  { name: "Varta", slug: "varta", warranty: "2 Years", type: "Premium" },
  { name: "Exide", slug: "exide", warranty: "2 Years", type: "Premium" },
  { name: "Amaron", slug: "amaron", warranty: "18 Months", type: "Standard" },
  { name: "SF Sonic", slug: "sf-sonic", warranty: "18 Months", type: "Standard" },
  { name: "ACDelco", slug: "acdelco", warranty: "2 Years", type: "Premium" },
  { name: "All Batteries", slug: "all-batteries", origin: "View All", highlight: true },
];

// Dropdown Component
const Dropdown = ({ title, items, icon: Icon, href, isOpen, onToggle, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className={`
          flex items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200
          hover:text-primary group
          ${isOpen ? "text-primary" : "text-foreground/80"}
        `}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span>{title}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-dropdown">
          <div className="p-2">
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={`${href}/${item.slug}`}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                  hover:bg-primary/10 group/item
                  ${item.highlight ? "bg-primary/5 border border-primary/20" : ""}
                `}
              >
                {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover/item:text-primary transition-colors">
                      {item.name}
                    </span>
                    {item.responseTime && (
                      <span className="text-[10px] text-green-600 dark:text-green-400">{item.responseTime}</span>
                    )}
                    {item.warranty && (
                      <span className="text-[10px] text-primary">{item.warranty}</span>
                    )}
                    {item.origin && !item.highlight && (
                      <span className="text-[10px] text-gray-500">{item.origin}</span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                  )}
                  {item.type && (
                    <p className="text-[10px] text-gray-500 mt-0.5">{item.type} Quality</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Desktop Navigation with Dropdowns
const DesktopNav = ({ pathname }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="hidden lg:flex items-center gap-1">
      <Link
        href="/"
        className={`relative  px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/" ? "text-primary font-semibold" : "text-foreground/80"
          }`}
      >
        Home
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/" ? "w-full" : ""}`} />
      </Link>

      <Dropdown
        title="Services"
        href="/dubai/services"
        items={servicesDropdown}
        isOpen={openDropdown === "services"}
        onToggle={() => handleDropdownToggle("services")}
        onClose={handleDropdownClose}
      />

      <Dropdown
        title="Area We Serve"
        href="/dubai/area-we-serve"
        items={areaDropdown}
        isOpen={openDropdown === "areas"}
        onToggle={() => handleDropdownToggle("areas")}
        onClose={handleDropdownClose}
      />

      <Dropdown
        title="Brands"
        href="/dubai/brand-we-serve"
        items={brandsDropdown}
        isOpen={openDropdown === "brands"}
        onToggle={() => handleDropdownToggle("brands")}
        onClose={handleDropdownClose}
      />

      {/* <Dropdown
        title="Batteries"
        icon={Battery}
        href="/dubai/batteries-we-serve"
        items={batteriesDropdown}
        isOpen={openDropdown === "batteries"}
        onToggle={() => handleDropdownToggle("batteries")}
        onClose={handleDropdownClose}
      /> */}
      {/* 
      <Link
        href="/dubai/vehicles-we-serve"
        className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/dubai/vehicles-we-serve" ? "text-primary font-semibold" : "text-foreground/80"
          }`}
      >
        Vehicles
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/dubai/vehicles-we-serve" ? "w-full" : ""}`} />
      </Link> */}


      <Link
        href="/dubai/about"
        className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/dubai/about" ? "text-primary font-semibold" : "text-foreground/80"
          }`}
      >
        About
        <span className={`absolute  bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/dubai/about" ? "w-full" : ""}`} />
      </Link>

      <Link
        href="/dubai/blogs"
        className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/dubai/blogs" ? "text-primary font-semibold" : "text-foreground/80"
          }`}
      >
        Blogs
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/dubai/blogs" ? "w-full" : ""}`} />
      </Link>

      <Link
        href="/dubai/contact"
        className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/dubai/contact" ? "text-primary font-semibold" : "text-foreground/80"
          }`}
      >
        Contact
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/dubai/contact" ? "w-full" : ""}`} />
      </Link>
    </nav>
  );
};

// Mobile Drawer Navigation
const MobileDrawerNav = ({ isOpen, onClose, pathname }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const mobileNavItems = [
    { name: "Home", href: "/", icon: House },
    { name: "Services", href: "/dubai/services", icon: Wrench, dropdown: servicesDropdown },
    { name: "Area We Serve", href: "/dubai/area-we-serve", icon: MapPin, dropdown: areaDropdown },
    { name: "Brand We Serve", href: "/dubai/brand-we-serve", icon: Flag, dropdown: brandsDropdown },
    { name: "Batteries We Serve", href: "/dubai/batteries-we-serve", icon: Battery, dropdown: batteriesDropdown },
    { name: "Vehicles We Serve", href: "/dubai/vehicles-we-serve", icon: Truck },
    { name: "Contact", href: "/dubai/contact", icon: Phone },
    { name: "About", href: "/dubai/about", icon: Sparkles },
    { name: "Blogs", href: "/dubai/blogs", icon: Car },
  ];

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right">
      <div className="flex flex-col h-full">

        {/* Header with Logo (Left) and Close Button (Right) */}
        <div className="flex items-center justify-between my-3 px-5 py-2">
          {/* Logo on Left */}

          <Logo />

          {/* Close Button on Right */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-primary/10"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-primary " />
          </button>
        </div>

        {/* Border - Only below header, no border above */}
        <div className="border-t border-gray-200 dark:border-gray-700 mb-4"></div>

        {/* Navigation Items */}
        <div className="flex-1 space-y-1 overflow-y-auto">
          {mobileNavItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                      hover:bg-primary/10
                      ${pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground/80"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedMenu === item.name ? "rotate-180" : ""}`} />
                  </button>
                  {expandedMenu === item.name && (
                    <div className="ml-8 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                      {item.dropdown.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={`${item.href}/${sub.slug}`}
                          onClick={onClose}
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span>{sub.name}</span>
                            {sub.responseTime && (
                              <span className="text-[10px] text-green-600">{sub.responseTime}</span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                    hover:bg-primary/10 hover:translate-x-1
                    ${pathname === item.href
                      ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                      : "text-foreground/80 hover:text-primary"
                    }
                  `}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Quote Button in Drawer */}
        <div className="mt-6 flex justify-center p-4 border-t border-gray-200 dark:border-gray-700">
          <GetQuoteButton />
        </div>
      </div>
    </Drawer>
  );
};


// Get Quote Button
const GetQuoteButton = () => {
  return (
    <Link
      href="/get-quote"
      className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-xl"
    >
      <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
      <span className="text-sm md:text-md">Emergancy Service</span>
    </Link>
  );
};

// Mobile Menu Button
const MobileMenuButton = ({ onClick }) => {
  return (
    <button
      className="lg:hidden relative w-8 h-8 rounded bg-primary/10 hover:bg-primary/20 transition-all duration-300 flex items-center justify-center group"
      onClick={onClick}
      aria-label="Open menu"
    >
      <Menu className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
    </button>
  );
};

// Main Navbar Component
export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-background/80 backdrop-blur-md border-b border-white/5"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo />

            <DesktopNav pathname={pathname} />

            <div className="flex items-center gap-3">
              <GetQuoteButton />
              <MobileMenuButton onClick={() => setIsDrawerOpen(true)} />
            </div>
          </div>
        </div>

        {/* Animated bottom border on scroll */}
        {/* <div className={`
          absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent
          transition-all duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}
        `} /> */}
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />

      <MobileDrawerNav
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        pathname={pathname}
      />

      <style jsx global>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown {
          animation: dropdown 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};