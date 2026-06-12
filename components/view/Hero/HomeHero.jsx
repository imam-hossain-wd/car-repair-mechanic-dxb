// components/HomeHero.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Wrench, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Truck
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);
  
  const { displayNumber, numberCallLink, whatsappCallLink, location, services } = SiteConfig;
  
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  
  const stats = [
    { value: "13+", label: "Years", icon: Award },
    { value: "5000+", label: "Customers", icon: Star },
    { value: "24/7", label: "Emergency", icon: Clock },
    { value: "15min", label: "Response", icon: Truck },
  ];
  
  const features = [
    { icon: CheckCircle, text: "Certified Mechanics" },
    { icon: CheckCircle, text: "On-Site Service" },
    { icon: CheckCircle, text: "Best Price" },
    { icon: CheckCircle, text: "Genuine Parts" },
  ];
  
  const popularServices = services?.slice(0, 4) || [
    { name: "Battery Replacement", slug: "battery-replacement" },
    { name: "AC Repair", slug: "ac-repair" },
    { name: "Oil Change", slug: "oil-change" },
    { name: "Brake Repair", slug: "brake-repair" },
  ];

  return (
    <section className="relative h-125 flex items-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      
      {/* Simplified Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating Icons - Simplified */}
        <div className="absolute top-10 left-10 animate-float opacity-30">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float-delayed opacity-30">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className={`space-y-4 transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
              <span className="text-xs font-medium text-primary">24/7 Emergency Service</span>
            </div>
            
            {/* Main Heading - Smaller */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Your On-Demand</span>
              <br />
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Car Savior
              </span>
              <br />
              <span className="text-white">In Dubai</span>
            </h1>
            
            {/* Description - Shorter */}
            <p className="text-sm text-gray-300 max-w-lg">
              {SiteConfig.description || "Professional mobile car repair service anywhere, anytime in Dubai."}
            </p>
            
            {/* Features Grid - Compact */}
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <feature.icon className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons - Compact */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={numberCallLink}
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call {displayNumber}</span>
              </Link>
              
              <Link
                href={whatsappCallLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>WhatsApp</span>
              </Link>
            </div>
            
            {/* Popular Services - Compact */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-2">Popular:</p>
              <div className="flex flex-wrap gap-1.5">
                {popularServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/dubai/services/${service.slug}`}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 hover:bg-primary/20 rounded-md text-xs text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats & Info - Compact */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            
            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-white/10"
                  >
                    <Icon className="h-5 w-5 text-primary mx-auto mb-1.5" />
                    <div className="text-xl font-bold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            {/* Service Area Card - Compact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-primary/20 rounded-lg">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-white">Service Area</h3>
              </div>
              <p className="text-xs text-gray-300 mb-2">{location}</p>
              <Link
                href={SiteConfig.mapsLink}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                View Map
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            
            {/* Trust Badges - Compact */}
            <div className="flex items-center justify-between gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs text-gray-300">100% Guaranteed</span>
              </div>
              <div className="w-px h-6 bg-white/10"></div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-xs text-gray-300">4.9/5</span>
              </div>
            </div>
            
            {/* Emergency Contact - Compact */}
            <div className="bg-linear-to-r from-red-500/20 to-red-600/20 rounded-xl p-3 border border-red-500/30">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1 bg-red-500 rounded-lg animate-pulse">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">Emergency?</h3>
              </div>
              <Link
                href={numberCallLink}
                className="inline-flex items-center gap-1 text-xs text-red-400 font-semibold hover:text-red-300"
              >
                Call Emergency Line
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Decoration - Smaller */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 text-gray-900" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}