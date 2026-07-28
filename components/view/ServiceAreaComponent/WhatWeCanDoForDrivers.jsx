// components/ServiceArea/WhatWeCanDoForDrivers.jsx
"use client";

import { 
  Car, 
  Battery, 
  Wind, 
  Droplet, 
  Zap, 
  Settings, 
  Wrench,
  Fan,
  Fuel,
  Gauge,
  Thermometer,
  AlertCircle,
  Users,
  Building,
  MapPin,
  Clock
} from "lucide-react";

export function WhatWeCanDoForDrivers({ area }) {
  // Define services based on area data
  const services = [
    { icon: Battery, label: "Replace dead batteries", color: "bg-blue-500/10 text-blue-500" },
    { icon: Thermometer, label: "Repair overheating engines", color: "bg-red-500/10 text-red-500" },
    { icon: Wind, label: "Restore AC cooling", color: "bg-cyan-500/10 text-cyan-500" },
    { icon: Zap, label: "Jump start vehicles", color: "bg-yellow-500/10 text-yellow-500" },
    { icon: Settings, label: "Replace alternators", color: "bg-purple-500/10 text-purple-500" },
    { icon: Wrench, label: "Repair starter motors", color: "bg-orange-500/10 text-orange-500" },
    { icon: AlertCircle, label: "Diagnose warning lights", color: "bg-red-500/10 text-red-500" },
    { icon: Car, label: "Brake repair", color: "bg-rose-500/10 text-rose-500" },
    { icon: Droplet, label: "Oil change", color: "bg-emerald-500/10 text-emerald-500" },
    { icon: Fan, label: "Radiator repair", color: "bg-sky-500/10 text-sky-500" },
    { icon: Fuel, label: "Fuel pump repair", color: "bg-amber-500/10 text-amber-500" },
    { icon: Gauge, label: "Computer diagnostics", color: "bg-indigo-500/10 text-indigo-500" },
  ];

  // Define audience types
  const audiences = [
    { icon: Users, label: "Residents", description: "Apartment & villa owners" },
    { icon: Building, label: "Office Workers", description: "Corporate employees" },
    { icon: MapPin, label: "Hotel Guests", description: "Tourists & visitors" },
    { icon: Clock, label: "Daily Commuters", description: "Regular drivers" },
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              What We Offer
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            What We Can Do For Drivers in{' '}
            <span className="text-primary">{area?.name || "Dubai"}</span>
          </h2>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-4">
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We help {audiences.map(a => a.label.toLowerCase()).join(", ")} and daily commuters keep their vehicles 
            safe and reliable without visiting a garage. Whether your vehicle stops in an underground parking garage, 
            residential tower, office basement, hotel entrance, or roadside, our mobile mechanics come directly to 
            your location in {area?.name || "Dubai"}.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 w-full md:max-w-3xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 p-1 rounded-xl"
              >
                <div className={`p-2 rounded-lg bg-primary text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-3 w-3 md:w-4 md:h-4" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {service.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Hidden Audience Mention for SEO */}
        <div className="sr-only">
          <p>
            We serve {audiences.map(a => a.label).join(", ")} in {area?.name || "Dubai"}. 
            Our mobile mechanics help with battery replacement, AC repair, engine diagnostics, 
            brake repair, oil change, and emergency roadside assistance.
          </p>
        </div>
      </div>
    </section>
  );
}