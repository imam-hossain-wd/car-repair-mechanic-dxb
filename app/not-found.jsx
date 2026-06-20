// app/not-found.jsx
"use client";

import Link from "next/link";
import { Home, Phone, Search, Wrench, ArrowLeft, Car, Battery } from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export default function NotFound() {
  const { displayNumber} = SiteConfig;

  const popularLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Car Services", href: "/dubai/services", icon: Wrench },
    { name: "Battery Replacement", href: "/dubai/services/battery-replacement", icon: Battery },
    { name: "Contact Support", href: "/dubai/contact", icon: Phone }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        
        {/* 404 Number */}
        <div className="relative mb-6">
          <div className="text-[120px] md:text-[180px] font-black leading-none">
            <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
              4
            </span>
            <span className="text-gray-700 dark:text-gray-600">0</span>
            <span className="bg-gradient-to-r from-primary/40 to-primary bg-clip-text text-transparent">
              4
            </span>
          </div>
          
          {/* Animated Car Icon */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-slide">
            <Car className="h-8 w-8 text-primary/50" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Oops! Page Not Found
        </h1>
        
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          The page you&apos;re looking for seems to have driven off. Don&apos;t worry, we&apos;ll help you get back on track.
        </p>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          
          <Link
            href="/dubai/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm border border-white/10"
          >
            <Wrench className="h-4 w-4" />
            Browse Services
          </Link>
          
          <a
            href={`tel:${displayNumber}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm"
          >
            <Phone className="h-4 w-4" />
            Emergency Help
          </a>
        </div>

        {/* Popular Links Grid */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
          <p className="text-xs text-gray-400 mb-3">Quick Links You Might Need:</p>
          <div className="grid grid-cols-2 gap-2">
            {popularLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-primary/20 rounded-lg transition-all duration-200 text-sm text-gray-300 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Search className="h-4 w-4 text-primary" />
            <span>Need help? Call us 24/7 at</span>
            <a href={`tel:${displayNumber}`} className="text-primary font-semibold hover:underline">
              {displayNumber}
            </a>
          </div>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "404 - Page Not Found",
              "description": "The requested page could not be found. Navigate back to home or contact our support team.",
              "url": "https://carrepairmechanic.ae/404",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://carrepairmechanic.ae"
                }]
              }
            })
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slide {
          0%, 100% { transform: translateX(-50%) translateX(0); }
          50% { transform: translateX(-50%) translateX(10px); }
        }
        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}