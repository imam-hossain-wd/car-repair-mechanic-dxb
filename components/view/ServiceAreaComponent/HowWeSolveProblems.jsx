// components/ServiceArea/HowWeSolveProblemsMinimal.jsx
"use client";

import {
  Battery,
  Wind,
  Thermometer,
  Car,
  AlertCircle,
  Zap,
  Settings,
  Fan,
  Wrench,
  Gauge,
  Search,
  Shield,
  ArrowRight
} from "lucide-react";

export function HowWeSolveProblemsMinimal({ area }) {
  const areaName = area?.name || "Dubai";

  // Problem solution steps (simplified)
  const solutions = [
    {
      id: "dead-battery",
      icon: Battery,
      title: "Dead Battery",
      steps: ["Battery health test", "Charging system check", "Battery replacement", "Alternator test", "Warranty"]
    },
    {
      id: "ac-cooling",
      icon: Wind,
      title: "AC Not Cooling",
      steps: ["AC diagnostics", "Leak detection", "Gas refill or repair", "Performance test", "Warranty"]
    },
    {
      id: "brake-issue",
      icon: Car,
      title: "Brake Squeaking",
      steps: ["Brake inspection", "Pad & rotor check", "Brake repair", "Test drive", "Warranty"]
    },
    {
      id: "engine-overheating",
      icon: Thermometer,
      title: "Engine Overheating",
      steps: ["Cooling system check", "Pressure test", "Radiator repair", "Coolant flush", "Warranty"]
    },
    {
      id: "engine-start",
      icon: AlertCircle,
      title: "Won't Start",
      steps: ["Starting system test", "Electrical check", "Repair or replace", "System test", "Warranty"]
    },
    {
      id: "electrical",
      icon: Settings,
      title: "Alternator Issues",
      steps: ["Charging system test", "Terminal check", "Alternator repair", "System verify", "Warranty"]
    },
  ];

  // Process steps
  const processSteps = [
    { icon: Search, label: "Diagnose" },
    { icon: Wrench, label: "Repair" },
    { icon: Gauge, label: "Test" },
    { icon: Shield, label: "Warranty" },
  ];

  return (
    <section className="py-5 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
            <Wrench className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Our Process
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How We Solve <span className="text-primary">Car Problems</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto mb-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {step.label}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-gray-400 mx-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="group bg-primary/5 rounded-xl p-4 border-2 border-primary/20 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {solution.steps.map((step, idx) => (
                    <li key={idx} className="flex items-center  gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] mt- font-bold text-white">{idx + 1}</span>
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* SEO Hidden */}
        <div className="sr-only">
          <p>Our mobile mechanics in {areaName} diagnose, repair, test, and provide warranty on all car repairs including battery, AC, brakes, engine, and electrical issues.</p>
        </div>
      </div>
    </section>
  );
}