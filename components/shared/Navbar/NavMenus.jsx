"use client"

import { services } from "@/data/services/services";
import { ChevronDown, Wrench } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


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

const navServiceItems = services?.slice(0, 10).map((service) => ({
    name: service.name,
    slug: service.slug,
}))

export const mobileNavItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", icon: Wrench, dropdown: navServiceItems },
    { name: "Area We Serve", href: "/area-we-serve" },
    { name: "Brands", href: "/brands" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    // { name: "Blogs", href: "/blogs" },
];



export const DesktopNav = ({ pathname }) => {
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
                href="/services"
                items={navServiceItems}
                isOpen={openDropdown === "services"}
                onToggle={() => handleDropdownToggle("services")}
                onClose={handleDropdownClose}
            />

            <Link
                href="/area-we-serve"
                className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/area-we-serve" ? "text-primary font-semibold" : "text-foreground/80"
                    }`}
            >
                Area We Serve
                <span className={`absolute  bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/area-we-serve" ? "w-full" : ""}`} />
            </Link>

            <Link
                href="/brands"
                className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/brands" ? "text-primary font-semibold" : "text-foreground/80"
                    }`}
            >
                Brands
                <span className={`absolute  bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/brands" ? "w-full" : ""}`} />
            </Link>

            <Link
                href="/about"
                className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/dubai/about" ? "text-primary font-semibold" : "text-foreground/80"
                    }`}
            >
                About
                <span className={`absolute  bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/dubai/about" ? "w-full" : ""}`} />
            </Link>

            {/* <Link
                href="/blogs"
                className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/dubai/blogs" ? "text-primary font-semibold" : "text-foreground/80"
                    }`}
            >
                Blogs
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/dubai/blogs" ? "w-full" : ""}`} />
            </Link> */}

            <Link
                href="/contact"
                className={`relative flex justify-center items-center gap-1 px-4 py-2 text-base font-medium transition-all duration-200 hover:text-primary group ${pathname === "/dubai/contact" ? "text-primary font-semibold" : "text-foreground/80"
                    }`}
            >
                Contact
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === "/dubai/contact" ? "w-full" : ""}`} />
            </Link>
        </nav>
    );
};