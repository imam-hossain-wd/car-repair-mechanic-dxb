


"use client";

import { Wrench, ArrowRight } from "lucide-react";
import { areaServices } from "@/utils/getAreasService";
import { AreaServiceCard } from "./AreaServiceCard";


export function AreaServices({ area }) {
  const areaName = area?.name || "Dubai";
  const allServices = areaServices;


  return (
    <section className="py-5 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <Wrench className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Our Services
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Services We Offer in{' '}
            <span className="text-primary">{areaName}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {allServices.map((service, index) => (
            <AreaServiceCard key={index} service={service} />
          ))}
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            We provide professional car repair services in {areaName} including 
            {allServices.map(s => s.name).join(", ")}.
          </p>
        </div>
      </div>
    </section>
  );
}
