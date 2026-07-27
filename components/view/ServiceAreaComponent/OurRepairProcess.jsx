// components/ServiceArea/OurRepairProcess.jsx
"use client";

import {
  Phone,
  Truck,
  Search,
  Wrench,
  Gauge,
  Shield,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export function OurRepairProcess({ area }) {
  const areaName = area?.name || "Dubai";

  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Call Us",
      description: `Call our emergency hotline or WhatsApp us with your vehicle details and location in ${areaName}. Our team responds instantly 24/7.`,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500",
      duration: "2 min"
    },
    {
      number: "02",
      icon: Truck,
      title: "Mechanic Dispatched",
      description: `Our nearest mobile mechanic is dispatched to your location in ${areaName}. We use real-time GPS tracking for fastest arrival.`,
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-500",
      duration: "5 min"
    },
    {
      number: "03",
      icon: Search,
      title: "Full Diagnosis",
      description: `Our technician performs comprehensive diagnostics using advanced tools to identify the root cause of your vehicle problem.`,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
      duration: "10-15 min"
    },
    {
      number: "04",
      icon: Wrench,
      title: "Expert Repair",
      description: `Using genuine parts and professional tools, our mechanics fix the issue on-site. From battery replacement to engine repairs.`,
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-500",
      duration: "30-60 min"
    },
    {
      number: "05",
      icon: Gauge,
      title: "Testing & Quality Check",
      description: `We thoroughly test the repair, verify all systems are working properly, and ensure your vehicle is safe to drive.`,
      color: "from-cyan-500/20 to-cyan-500/5",
      iconColor: "text-cyan-500",
      duration: "10 min"
    },
    {
      number: "06",
      icon: Shield,
      title: "Warranty & Handover",
      description: `You receive comprehensive warranty on all parts and labor. We explain the repair and provide documentation before handover.`,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      duration: "5 min"
    }
  ];

  return (
    <section className="py-3 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Our Process
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-primary">Repair Process</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
            From your call to completion — we make car repair simple and hassle-free in {areaName}
          </p>
        </div>

        {/* Process Steps - Horizontal Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-24 left-10 right-10 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          <div className="hidden md:block absolute top-24 left-10 right-10 h-0.5 bg-primary/30" style={{ width: `calc(100% - 80px)` }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 rounded-xl p-5 text-center border-2 border-primary/30"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-0.5 rounded-full">
                      Step {index + 1}
                    </div>
                  </div>

                  <div className="flex justify-center mt-2">
                    <div className={`p-3 rounded-xl bg-primary group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 text-white`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-md font-bold text-gray-900 dark:text-white mt-3 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow Indicator */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2">
                      <ArrowRight className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Summary */}
        <div className="max-w-3xl mx-auto mt-5 p-4 bg-whiterounded-xl border-2 border-primary/20 rounded-lg  text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-sm md:text-md">
            <span className="flex  items-center gap-1">
              <Phone className="h-3.5 w-3.5 text-primary" /> Call
            </span>
            <ArrowRight className="h-3 w-3 text-gray-400" />
            <span className="flex items-center gap-1">
              <Truck className="h-3.5 w-3.5 text-primary" /> Dispatch
            </span>
            <ArrowRight className="h-3 w-3 text-gray-400" />
            <span className="flex items-center gap-1">
              <Search className="h-3.5 w-3.5 text-primary" /> Diagnose
            </span>
            <ArrowRight className="h-3 w-3 text-gray-400" />
            <span className="flex items-center gap-1">
              <Wrench className="h-3.5 w-3.5 text-primary" /> Repair
            </span>
            <ArrowRight className="h-3 w-3 text-gray-400" />
            <span className="flex items-center gap-1">
              <Gauge className="h-3.5 w-3.5 text-primary" /> Test
            </span>
            <ArrowRight className="h-3 w-3 text-gray-400" />
            <span className="flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-primary" /> Warranty
            </span>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Our car repair process in {areaName} follows 6 simple steps: 
            Call us for emergency assistance, mechanic dispatched to your location, 
            full vehicle diagnosis, expert on-site repair, thorough testing and quality check, 
            and warranty on all parts and labor. We provide mobile mechanic service across {areaName} 
            with fast response times and professional repairs.
          </p>
        </div>
      </div>
    </section>
  );
}