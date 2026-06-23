// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  MapPin,
  Phone,
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import Logo from "../Logo/Logo";
import { DesktopNav } from "./NavMenus";
import { MobileDrawerNav } from "./MobileNavDrawer";


// Mobile Drawer Navigation

// Get Quote Button
const NavCallButton = () => {
  return (
    <Link
      href={SiteConfig?.numberCallLink}
      className="flex items-center justify-center gap-2 px-2 py-2 bg-primary text-white font-semibold rounded"
    >
      <Phone className="h-3 w-3 group-hover:rotate-12 transition-transform" />
      <span className="text-[10px] md:text-md">{SiteConfig?.displayNumber}</span>
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

        <div className="bg-primary text-white">
          <div className="px-2">
            <div className="h-9 flex items-center justify-between text-[11px] font-medium">

              <div className="flex items-center gap-3">

                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{SiteConfig.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>

                <span>24/7 Operating Dubai City</span>
              </div>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/">
              <Logo />
            </Link>

            <DesktopNav pathname={pathname} />

            <div className="flex items-center gap-3">
              <NavCallButton />
              <MobileMenuButton onClick={() => setIsDrawerOpen(true)} />
            </div>
          </div>
        </div>
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