// components/HomeHero.jsx
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
  Activity
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);

  const { services } = SiteConfig;

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
    <section className="relative py-10 h-auto flex items-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">

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
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Left Column - Content */}
          <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary backdrop-blur-sm px-3 py-1.5 rounded-full border border-white">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-xs text-white font-bold">24/7 Emergency Service</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white"> 24/7 Relaible Car Repair </span>
              <br />
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Mechanic Dubai
              </span>
              <br />
              <span className="text-white">At Your Doorstep</span>
            </h1>

            {/* Description */}
            <p className="text-sm text-white max-w-lg">
              {SiteConfig.description || "Professional mobile car repair service anywhere, anytime in Dubai."}
            </p>

            {/* Features Grid - Compact */}
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <feature.icon className="h-3.5 w-3.5 text-primary" />
                  <span className="text-sm text-white">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Popular Services */}
            <div className="pt-2">
              <p className="text-sm text-white mb-2">Popular Services:</p>
              <div className="flex flex-wrap gap-1.5">
                {popularServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/dubai/services/${service.slug}`}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 hover:bg-primary/20 rounded-md text-xs text-white hover:text-white transition-all duration-300 group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Service Checklist */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}>

            {/* Service Checklist Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white overflow-hidden">
              <div className="bg-primary/10 px-3 py-2 border-b border-white">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-white" />
                  <h3 className="text-sm md:text-lg font-semibold text-white">Emergancy Service We Offer</h3>
                  <span className="text-xs md:text-md text-white ml-auto">24/7 Available</span>
                </div>
              </div>
              <div className="p-3">
                <div className="space-y-2">
                  {serviceChecklist.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2.5 text-white 
                          }`}
                      >
                        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary text-white`}>
                          <Icon className="h-4 w-4" />
                        </div>

                        <span className={`text-md ${item.highlight ? "font-medium" : "font-normal"}`}>
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-4 gap-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-2.5 text-center hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-white/10 flex items-center justify-around"
                  >

                    <div classname="flex flex-col justify-center items-center">
                      <div className="text-sm md:text-md font-bold text-white leading-none">
                        {stat.value}
                      </div>

                      <div className="text-xs md:text-md  text-white leading-tight mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Service Note */}
            <div className="bg-linear-to-r from-primary/10 to-primary/5 rounded-lg p-2.5 text-center border border-white">
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
