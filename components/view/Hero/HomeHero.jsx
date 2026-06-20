"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Wrench,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Truck,
  Battery,
  Wind,
  Car,
  Zap,
  Navigation,
  Activity,
  Shield,
  Phone
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);
  const { services, displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const stats = [
    { value: "13+", label: "Years Experience", icon: Award },
    { value: "5000+", label: "Customers", icon: Star },
    { value: "24/7", label: "Emergency", icon: Clock },
    { value: "15min", label: "Response", icon: Truck },
  ];

  const features = [
    { icon: CheckCircle, text: "Certified Mechanics" },
    { icon: CheckCircle, text: "On-Site Service" },
    { icon: Shield, text: "Best Price" },
    { icon: CheckCircle, text: "Genuine Parts" },
  ];

  // Professional service checklist
  const serviceChecklist = [
    { icon: Clock, text: "24/7 Emergency Car Repair", highlight: true },
    { icon: Zap, text: "15–30 Minute Response Time", highlight: true },
    { icon: Navigation, text: "Mobile Mechanic at Your Location", highlight: false },
    { icon: Battery, text: "Battery Replacement & Jump Start", highlight: false },
    { icon: Car, text: "Roadside Assistance Across Dubai", highlight: false },
    { icon: Wind, text: "Car AC & Electrical Repairs", highlight: false },
    { icon: Wrench, text: "Engine Diagnostics On-Site", highlight: false },
  ];

  const popularServices = services?.slice(0, 4) || [
    { name: "Battery Replacement", slug: "battery-replacement" },
    { name: "AC Repair", slug: "ac-repair" },
    { name: "Oil Change", slug: "oil-change" },
    { name: "Brake Repair", slug: "brake-repair" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      
      {/* Animated Background Elements - Same as Footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay - Same as Footer */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>

      {/* Simplified Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 animate-float opacity-20">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float-delayed opacity-20">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column - Content */}
          <div className={`space-y-5 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs font-medium text-white uppercase tracking-wide">24/7 Emergency Service</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white">Fast & Relaible Car </span>
              <br />
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Repair Mechanic 
              </span>
              <br />
              <span className="text-white">Dubai At Your Doorstep</span>
            </h1>

            {/* Description */}
            <p className="text-base text-gray-300 max-w-lg leading-relaxed">
              {SiteConfig.description || "Professional mobile car repair service anywhere, anytime in Dubai. Certified mechanics at your doorstep within 30 minutes."}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>

    

            {/* Popular Services */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-2">Popular Services:</p>
              <div className="flex flex-wrap gap-2">
                {popularServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/dubai/services/${service.slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-primary/20 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Service Checklist */}
          <div className={`space-y-5 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>

            {/* Service Checklist Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Emergency Services We Offer</h3>
                  <span className="text-xs md:text-sm text-white ml-auto font-medium">24/7 Available</span>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {serviceChecklist.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-3`}
                      >
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary `}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <span className={`text-sm md:text-base text-gray-200 ${item.highlight ? "font-medium" : "font-normal"}`}>
                          {item.text}
                        </span>
                
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3">
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

            {/* Quick Service Note */}
            <div className="bg-linear-to-r from-primary/10 to-primary/5 rounded-xl p-3 text-center border border-primary/20">
              <p className="text-sm text-gray-300">
                ⚡ No towing fees • Free inspection • Warranty on all repairs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}