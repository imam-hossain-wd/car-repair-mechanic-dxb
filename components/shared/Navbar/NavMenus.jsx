/* eslint-disable react-hooks/static-components */
// "use client";
// import { getServiceAreasNameSlug } from "@/utils/getServiceAreasNameSlug";
// import { getServicesNameSlug } from "@/utils/getServicesNameSlug";
// import { ChevronDown } from "lucide-react";
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";

// const navServiceItems =getServicesNameSlug()
// const navServiceAreasItems = getServiceAreasNameSlug()

// // Mobile nav items with dropdowns
// export const mobileNavItems = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services", dropdown: navServiceItems },
//     { name: "Area We Serve", href: "/area-we-serve", dropdown: navServiceAreasItems },
//     { name: "Brands", href: "/brands" },
//     { name: "Contact", href: "/contact" },
//     { name: "About", href: "/about" },
// ];


// const Dropdown = ({ title, items, href, isOpen, onToggle, onClose }) => {
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 onClose();
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [onClose]);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button
//                 onClick={onToggle}
//                 className={`
//                     flex items-center gap-1 px-4 py-1 text-base font-medium transition-all duration-200
//                     hover:text-primary group
//                     ${isOpen ? "text-primary" : "text-foreground/80"}
//                 `}
//             >
//                 <span>{title}</span>
//                 <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
//             </button>

//             {isOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-dropdown">
//                     <div className="p-2">
//                         {items.map((item, idx) => (
//                             <Link
//                                 key={idx}
//                                 href={`${href}/${item.slug}`}
//                                 onClick={onClose}
//                                 className={`
//                                     flex items-center gap-3 px-3 py-1 rounded-lg transition-all duration-200
//                                     hover:bg-primary/10 group/item
//                                     ${item.highlight ? "bg-primary/5 border border-primary/20" : ""}
//                                 `}
//                             >
//                                 <div className="flex-1">
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-md font-medium text-gray-900 dark:text-white group-hover/item:text-primary transition-colors">
//                                             {item.name}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };




// export const DesktopNav = ({ pathname }) => {
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const handleDropdownToggle = (name) => {
//         setOpenDropdown(openDropdown === name ? null : name);
//     };

//     const handleDropdownClose = () => {
//         setOpenDropdown(null);
//     };

//     // Helper to check if path is active
//     const isActive = (href) => {
//         if (href === "/") return pathname === "/";
//         return pathname?.startsWith(href);
//     };

//     return (
//         <nav className="hidden lg:flex items-center gap-1">
//             {/* Home */}
//             <Link
//                 href="/"
//                 className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
//                     isActive("/") ? "text-primary font-semibold" : "text-foreground/80"
//                 }`}
//             >
//                 Home
//                 <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/") ? "w-full" : ""}`} />
//             </Link>

//             {/* Services Dropdown */}
//             <Dropdown
//                 title="Services"
//                 href="/services"
//                 items={navServiceItems}
//                 isOpen={openDropdown === "services"}
//                 onToggle={() => handleDropdownToggle("services")}
//                 onClose={handleDropdownClose}
//             />

//             {/* Area We Serve Dropdown */}
//             <Dropdown
//                 title="Area We Serve"
//                 // icon={MapPin}
//                 href="/area-we-serve"
//                 items={navServiceAreasItems}
//                 isOpen={openDropdown === "areas"}
//                 onToggle={() => handleDropdownToggle("areas")}
//                 onClose={handleDropdownClose}
//             />

//             {/* Brands */}
//             <Link
//                 href="/brands"
//                 className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
//                     isActive("/brands") ? "text-primary font-semibold" : "text-foreground/80"
//                 }`}
//             >
//                 Brands
//                 <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/brands") ? "w-full" : ""}`} />
//             </Link>

//             {/* About */}
//             <Link
//                 href="/about"
//                 className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
//                     isActive("/about") ? "text-primary font-semibold" : "text-foreground/80"
//                 }`}
//             >
//                 About
//                 <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/about") ? "w-full" : ""}`} />
//             </Link>

//             {/* Contact */}
//             <Link
//                 href="/contact"
//                 className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
//                     isActive("/contact") ? "text-primary font-semibold" : "text-foreground/80"
//                 }`}
//             >
//                 Contact
//                 <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/contact") ? "w-full" : ""}`} />
//             </Link>
//         </nav>
//     );
// };

// // components/NavMenus.jsx
// components/NavMenus.jsx (Simplified Version)
"use client";

import { getServiceAreasNameSlug } from "@/utils/getServiceAreasNameSlug";
import { getServicesNameSlug } from "@/utils/getServicesNameSlug";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navServiceItems = getServicesNameSlug();
const navServiceAreasItems = getServiceAreasNameSlug();

export const mobileNavItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", dropdown: navServiceItems },
    { name: "Area We Serve", href: "/area-we-serve", dropdown: navServiceAreasItems },
    { name: "Brands", href: "/brands" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
];

export const DesktopNav = ({ pathname }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setOpenMenu(null);
    };

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname?.startsWith(href);
    };

    // Services Dropdown Component
    const ServicesDropdown = () => {
        const isOpen = openMenu === "services";
        
        return (
            <div className="relative">
                <button
                    onClick={() => toggleMenu("services")}
                    className={`flex items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
                        isOpen ? "text-primary" : "text-foreground/80"
                    }`}
                >
                    <span>Services</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 h-120 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                        <div className="p-2 overflow-y-auto h-120">
                            {navServiceItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={`/services/${item.slug}`}
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/10 group/item"
                                >
                                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover/item:text-primary transition-colors">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // Area We Serve Dropdown Component
    const AreaDropdown = () => {
        const isOpen = openMenu === "areas";
        
        return (
            <div className="relative">
                <button
                    onClick={() => toggleMenu("areas")}
                    className={`flex items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
                        isOpen ? "text-primary" : "text-foreground/80"
                    }`}
                >
                    <span>Area We Serve</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 h-120 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                        <div className="p-2 overflow-y-auto h-120">
                            {navServiceAreasItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={`/area-we-serve/${item.slug}`}
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/10 group/item"
                                >
                                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover/item:text-primary transition-colors">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
                href="/"
                className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
                    isActive("/") ? "text-primary font-semibold" : "text-foreground/80"
                }`}
            >
                Home
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/") ? "w-full" : ""}`} />
            </Link>

            {/* Services Dropdown */}
            <ServicesDropdown />

            {/* Area We Serve Dropdown */}
            <AreaDropdown />

            {/* Brands */}
            <Link
                href="/brands"
                className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
                    isActive("/brands") ? "text-primary font-semibold" : "text-foreground/80"
                }`}
            >
                Brands
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/brands") ? "w-full" : ""}`} />
            </Link>

            {/* About */}
            <Link
                href="/about"
                className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
                    isActive("/about") ? "text-primary font-semibold" : "text-foreground/80"
                }`}
            >
                About
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/about") ? "w-full" : ""}`} />
            </Link>

            {/* Contact */}
            <Link
                href="/contact"
                className={`relative px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${
                    isActive("/contact") ? "text-primary font-semibold" : "text-foreground/80"
                }`}
            >
                Contact
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive("/contact") ? "w-full" : ""}`} />
            </Link>
        </nav>
    );
};