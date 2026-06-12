// components/NavbarWithSheet.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Wrench, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Area We Serve", href: "/area-we-serve" },
  { name: "Brand We Serve", href: "/brand-we-serve" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
];

const MobileNavSheet = ({ pathname }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="mb-8 pb-4 border-b">
            <div className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold">AutoFix Pro</h2>
                <p className="text-xs text-muted-foreground">Car Repair Specialists</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <SheetClose asChild key={item.name}>
                  <Link
                    href={item.href}
                    className={`
                      px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                      hover:bg-primary/10 hover:translate-x-1 block
                      ${pathname === item.href 
                        ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary" 
                        : "text-foreground/80 hover:text-primary"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </nav>
          
          <div className="pt-4 mt-auto border-t">
            <Button className="w-full gap-2">
              <Phone className="h-4 w-4" />
              Call Now: +971 XX XXX XXXX
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const NavbarWithSheet = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg" 
            : "bg-background"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <Wrench className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  AutoFix Pro
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Car Repair Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-base font-medium transition-all duration-200
                    hover:text-primary group
                    ${pathname === item.href 
                      ? "text-primary font-semibold" 
                      : "text-foreground/80"
                    }
                  `}
                >
                  {item.name}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                      bg-primary transition-all duration-300 group-hover:w-full
                      ${pathname === item.href ? "w-full" : ""}
                    `}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">
                Book Appointment
              </Button>
              <MobileNavSheet pathname={pathname} />
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
};