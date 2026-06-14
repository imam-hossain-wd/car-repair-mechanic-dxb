// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Wrench, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "../Drawer/Drawer";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/dubai/services" },
  { name: "Area We Serve", href: "/dubai/area-we-serve" },
  { name: "Brand We Serve", href: "/dubai/brand-we-serve" },
  { name: "Vehicles We Serve", href: "/dubai/vehicles-we-serve" },
  { name: "Contact", href: "/dubai/contact" },
  { name: "About", href: "/dubai/about" },
  { name: "Blogs", href: "/dubai/blogs" },
];

const NavLink = ({ href, children, isActive, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative px-4 py-2 text-base font-medium transition-all duration-200
        hover:text-primary group
        ${isActive 
          ? "text-primary font-semibold" 
          : "text-foreground/80 hover:text-primary"
        }
      `}
    >
      {children}
      <span
        className={`
          absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
          bg-primary transition-all duration-300 group-hover:w-full
          ${isActive ? "w-full" : ""}
        `}
      />
    </Link>
  );
};

const DesktopNav = ({ pathname }) => {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          href={item.href}
          isActive={pathname === item.href}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

const MobileNavButton = ({ onClick }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden hover:bg-primary/10 transition-colors"
      onClick={onClick}
      aria-label="Open menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
};

const MobileDrawerNav = ({ isOpen, onClose, pathname }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right">
      <div className="flex flex-col space-y-2">
        <div className="mb-6 pb-4 border-b">
          <div className="flex items-center gap-2">
            <Wrench className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              AutoFix Pro
            </span>
          </div>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={`
              px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
              hover:bg-primary/10 hover:translate-x-1
              ${pathname === item.href 
                ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary" 
                : "text-foreground/80 hover:text-primary"
              }
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </Drawer>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative">
        <Wrench className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          AutoFix Pro
        </span>
        <span className="text-xs text-muted-foreground hidden sm:block">
          Car Repair Specialists
        </span>
      </div>
    </Link>
  );
};

const BookButton = () => {
  return (
    <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105">
      Book Appointment
    </Button>
  );
};

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
    return () => {
      setIsDrawerOpen(false);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b
          ${isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg" 
            : "bg-background/80 backdrop-blur-sm"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo />
            
            <DesktopNav pathname={pathname} />
            
            <div className="flex items-center gap-2">
              <BookButton />
              <MobileNavButton onClick={() => setIsDrawerOpen(true)} />
            </div>
          </div>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20" />
      
      <MobileDrawerNav
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        pathname={pathname}
      />
    </>
  );
};