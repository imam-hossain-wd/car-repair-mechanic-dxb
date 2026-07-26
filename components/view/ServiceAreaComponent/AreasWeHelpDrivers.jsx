// components/ServiceArea/AreasWeHelpDrivers.jsx
"use client";

import {
  MapPin,
  Building,
  Hotel,
  School,
  ShoppingBag,
  Car,
  Train,
  Trees,
  Home,
  Briefcase,
  Store,
  Church,
  ParkingMeter as Park,
  Navigation,
  ChevronRight
} from "lucide-react";

export function AreasWeHelpDrivers({ area }) {
  const areaName = area?.name || "Dubai";

  // Define location categories with icons
  const locationCategories = [
    {
      icon: Train,
      label: "Metro Stations",
      places: [
        `${areaName} Metro Station`,
        `${areaName} Metro Bus Stop`,
        "Nearby Metro Parking"
      ]
    },
    {
      icon: Trees,
      label: "Waterfront & Parks",
      places: [
        `${areaName} Waterfront`,
        `${areaName} Creek Park`,
        `${areaName} Corniche`
      ]
    },
    {
      icon: Building,
      label: "Residential Areas",
      places: [
        `${areaName} Residential Towers`,
        `${areaName} Villas`,
        `${areaName} Apartments`
      ]
    },
    {
      icon: Hotel,
      label: "Hotels & Hospitality",
      places: [
        `${areaName} Hotels`,
        "Hotel Parking Areas",
        "Guest Parking Zones"
      ]
    },
    {
      icon: Briefcase,
      label: "Business & Offices",
      places: [
        "Office Towers",
        "Business Centers",
        "Corporate Buildings"
      ]
    },
    {
      icon: ShoppingBag,
      label: "Shopping & Retail",
      places: [
        `${areaName} Mall`,
        "Shopping Centers",
        "Retail Stores"
      ]
    },
    {
      icon: School,
      label: "Educational Institutions",
      places: [
        "Schools",
        "Universities",
        "Educational Institutes"
      ]
    },
    {
      icon: Home,
      label: "Parking Areas",
      places: [
        "Basement Parking",
        "Visitor Parking",
        "Reserved Parking"
      ]
    },
    {
      icon: Store,
      label: "Commercial Areas",
      places: [
        "Shopping Districts",
        "Commercial Complexes",
        "Retail Zones"
      ]
    },
    {
      icon: Car,
      label: "Roads & Highways",
      places: [
        "Main Highways",
        "Signal Junctions",
        "Service Roads"
      ]
    },
    {
      icon: Park,
      label: "Recreation Areas",
      places: [
        "Community Parks",
        "Playgrounds",
        "Recreation Centers"
      ]
    },
    {
      icon: Church,
      label: "Religious & Cultural",
      places: [
        "Mosques",
        "Churches",
        "Cultural Centers"
      ]
    }
  ];

  // Common locations specific to this area (from area data)
  const areaLandmarks = area?.nearbyLandmarksSection?.landmarks || [];
  const nearbyAreas = area?.nearbyAreasSection?.areas || [];

  return (
    <section className="py-5 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <Navigation className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Where We Help
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Areas We Usually Help Drivers in{' '}
            <span className="text-primary">{areaName}</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
            We provide mobile car repair and roadside assistance across all key locations in {areaName}
          </p>
        </div>

        {/* Area Landmarks - Specific to this area */}
        {areaLandmarks.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8 p-5 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Key Locations in {areaName}
            </h3>
            <div className="flex flex-wrap gap-2">
              {areaLandmarks.map((landmark, index) => (
                <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{landmark.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Location Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {locationCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {category.label}
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {category.places.map((place, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                      <ChevronRight className="h-3 w-3 text-primary flex-shrink-0" />
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Nearby Areas */}
        {nearbyAreas.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8 p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Nearby Areas We Also Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {nearbyAreas.map((area, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {area.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quick Location List */}
        <div className="max-w-4xl mx-auto mt-8 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            We regularly provide roadside assistance near{' '}
            <span className="text-primary font-bold">{areaName}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
            {[
              "Metro Stations",
              "Waterfront",
              "Residential Areas",
              "Hotels",
              "Office Towers",
              "Schools",
              "Basement Parking",
              "Visitor Parking",
              "Highways",
              "Signal Junctions",
              "Shopping Areas",
              "Parking Lots"
            ].map((place, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                {place}
              </span>
            ))}
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            We provide mobile car repair and roadside assistance services in {areaName} at locations including 
            {areaLandmarks.map(l => l.name).join(", ")}. 
            We serve residents, office workers, hotel guests, and visitors across all key areas of {areaName}.
          </p>
        </div>
      </div>
    </section>
  );
}