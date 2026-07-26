// components/ServiceArea/Available247For.jsx
"use client";

import {
  Home,
  Hotel,
  Building,
  Briefcase,
  School,
  Hospital,
  Plane,
  Users,
  Landmark,
  HardHat,
  Clock,
  MapPin
} from "lucide-react";

export function Available247For({ area }) {
  const areaName = area?.name || "Dubai";

  const audiences = [
    { icon: Home, label: "Residents", description: "Homes & Villas" },
    { icon: Landmark, label: "Landmark Buildings", description: "Residential Towers" },
    { icon: Hotel, label: "Hotels", description: "Hotels & Resorts" },
    { icon: Building, label: "Office Towers", description: "Commercial Buildings" },
    { icon: Briefcase, label: "Businesses", description: "Corporate & Retail" },
    { icon: School, label: "Schools", description: "Educational Institutes" },
    { icon: Hospital, label: "Hospitals", description: "Medical Centers" },
    { icon: Plane, label: "Tourists", description: "Visitors & Travelers" },
    { icon: Users, label: "Visitors", description: "Guests & Families" },
    { icon: HardHat, label: "Construction Sites", description: "Building Sites" },
  ];

  return (
    <section className="py-5 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              24/7 Service
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Available 24/7 For{' '}
            <span className="text-primary">{areaName}</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            We&lsquo;re ready to help everyone in {areaName}, anytime, anywhere
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                  {audience.label}
                </span>
                <span className="text-[10px] text-gray-400 text-center">
                  {audience.description}
                </span>
              </div>
            );
          })}
        </div>

        {/* Location Badge */}
        <div className="flex justify-center mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Serving all of <span className="font-semibold text-gray-900 dark:text-white">{areaName}</span> and surrounding areas
            </span>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            We provide 24/7 mobile car repair and roadside assistance services in {areaName} for 
            residents, hotels, businesses, office towers, schools, hospitals, tourists, 
            visitors, Landmark buildings, and construction sites.
          </p>
        </div>
      </div>
    </section>
  );
}