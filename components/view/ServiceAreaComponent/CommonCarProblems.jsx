// components/ServiceArea/CommonCarProblems.jsx
"use client";

import {
    Battery,
    Car,
    AlertCircle,
    Zap,
    Settings,
    Fan,
    Wrench,
    Gauge,
    Fuel,
    Droplet,
    Flame,
    Snowflake
} from "lucide-react";

export function CommonCarProblems({ area }) {
    const areaName = area?.name || "Dubai";

    // Define common problems with icons and descriptions
    const problems = [
        {
            icon: Battery,
            title: "Dead Battery After Long Parking",
            description: "Vehicles left parked for extended periods in underground parking often experience battery drain, especially during Dubai's hot summer months.",
            color: "from-red-500/20 to-red-500/5",
            iconColor: "text-red-500",
            tag: "Most Common"
        },
        {
            icon: Snowflake,
            title: "AC Stops Cooling",
            description: "Dubai's extreme heat puts immense pressure on car AC systems. Refrigerant leaks, compressor failure, or clogged filters often cause weak or no cooling.",
            color: "from-blue-500/20 to-blue-500/5",
            iconColor: "text-blue-500",
            tag: "Summer Emergency"
        },
        {
            icon: Flame,
            title: "Engine Overheating",
            description: "Stop-and-go traffic and high ambient temperatures frequently cause engine overheating due to coolant leaks, radiator issues, or water pump failure.",
            color: "from-orange-500/20 to-orange-500/5",
            iconColor: "text-orange-500",
            tag: "Urgent"
        },
        {
            icon: Car,
            title: "Brake Squeaking or Grinding",
            description: "Frequent braking in city traffic accelerates brake pad wear, causing squeaking sounds, reduced stopping power, and potential rotor damage.",
            color: "from-rose-500/20 to-rose-500/5",
            iconColor: "text-rose-500",
            tag: "Safety Concern"
        },
        {
            icon: AlertCircle,
            title: "Vehicle Won't Start",
            description: "A non-starting vehicle is often caused by a dead battery, faulty starter motor, bad alternator, or fuel delivery issues.",
            color: "from-red-500/20 to-red-500/5",
            iconColor: "text-red-500",
            tag: "Emergency"
        },
        {
            icon: Zap,
            title: "Flat Battery",
            description: "Extreme temperatures accelerate battery degradation. Corroded terminals, leaving lights on, or parasitic drain commonly cause flat batteries.",
            color: "from-yellow-500/20 to-yellow-500/5",
            iconColor: "text-yellow-600",
            tag: "Frequent"
        },
        {
            icon: Gauge,
            title: "Check Engine Light",
            description: "Modern vehicles have complex sensors that trigger warning lights for emissions, oxygen sensors, catalytic converter, or engine misfire issues.",
            color: "from-amber-500/20 to-amber-500/5",
            iconColor: "text-amber-500",
            tag: "Diagnostics Needed"
        },
        {
            icon: Settings,
            title: "Alternator Charging Problem",
            description: "A failing alternator can't properly charge the battery, leading to electrical issues, dim lights, and eventual vehicle breakdown.",
            color: "from-purple-500/20 to-purple-500/5",
            iconColor: "text-purple-500",
            tag: "Electrical"
        },
        {
            icon: Fan,
            title: "Radiator Coolant Leak",
            description: "Coolant leaks from the radiator, hoses, or water pump can cause engine overheating and serious engine damage if not addressed quickly.",
            color: "from-cyan-500/20 to-cyan-500/5",
            iconColor: "text-cyan-500",
            tag: "Overheating Risk"
        },
        {
            icon: Wrench,
            title: "Starter Motor Failure",
            description: "A failing starter motor produces a clicking sound when you turn the key, often leaving you stranded in parking lots or roadside.",
            color: "from-indigo-500/20 to-indigo-500/5",
            iconColor: "text-indigo-500",
            tag: "Common Failure"
        },
        {
            icon: Fuel,
            title: "Fuel Pump Failure",
            description: "Fuel pump issues cause sputtering, loss of power, or engine stalling, especially during acceleration or high-speed driving.",
            color: "from-emerald-500/20 to-emerald-500/5",
            iconColor: "text-emerald-500",
            tag: "Performance"
        },
        {
            icon: Droplet,
            title: "Oil Leak or Low Oil Pressure",
            description: "Oil leaks from gaskets, seals, or oil pans can lead to low oil pressure and serious engine damage if not detected early.",
            color: "from-teal-500/20 to-teal-500/5",
            iconColor: "text-teal-500",
            tag: "Maintenance"
        },
    ];

    // Get area-specific problem context
    const areaContext = area?.customerProblemsSection?.problems || [];

    return (
        <section className="py-5 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="max-w-4xl mx-auto mb-">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
                        <AlertCircle className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            Common Issues
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                        Common Car Problems Drivers Face in{' '}
                        <span className="text-primary">{areaName}</span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
                        Understanding these frequent issues helps our mechanics quickly diagnose and fix your vehicle problems.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-around gap-3">
                    <div className="max-w-4xl mx-auto mt-10 p-3  dark:bg-gray-900 rounded-xl border border-primary/20 dark:border-gray-700">
                        <h3 className="text-lg font-bold lg:ml-5 text-gray-900 mb-3">
                            Most Common Problems in {areaName}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {problems.map((problem, index) => (
                                <div key={index} className="flex items-center gap-2 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                                    <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                                        <AlertCircle className="h-3.5 w-3.5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{problem.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Area-Specific Context */}
                    {areaContext.length > 0 && (
                        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-xl border border-primary/20 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                Most Common Issues Reported in {areaName}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {areaContext.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                                        <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                                            <AlertCircle className="h-3.5 w-3.5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                {/* SEO Hidden Content */}
                <div className="sr-only">
                    <p>
                        Common car problems drivers face in {areaName} include dead battery after long parking,
                        AC stops cooling, engine overheating, brake squeaking, vehicle won&lsquo;t start, flat battery,
                        check engine light, alternator charging problem, radiator coolant leak, starter failure,
                        fuel pump failure, and oil leaks. Our mobile mechanics provide fast solutions for all these issues.
                    </p>
                </div>
            </div>
        </section>
    );
}