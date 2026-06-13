"use client";

import Link from "next/link";
import {
    Battery,
    Wind,
    Droplet,
    CircleStop,
    Activity,
    Circle,
    Shield,
    ChevronRight,
    Wrench,
    Truck
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

// Icon mapping for services
const serviceIcons = {
    "battery-replacement": Battery,
    "ac-repair-service": Wind,
    "oil-change": Droplet,
    "brake-repair": CircleStop,
    "engine-diagnostics": Activity,
    "tire-replacement": Circle,
    "alternator-repair": Battery,
    "starter-motor-repair": Wrench,
    "suspension-repair": Truck,
    "cooling-system-repair": Wind,
    "transmission-service": Wrench,
    "full-car-maintenance": Shield,
};

export function EmergancyServices() {
    const { fullServices } = SiteConfig;
    const emergencyServices = fullServices?.filter(service => service.emergency === true) || [];

    return (
        <section className="pt-5 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Emergency Services Section */}
                {emergencyServices.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                24/7 Emergency Services
                            </h3>
                            <Link
                                href="/dubai/services"
                                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
                            >
                                View All
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {emergencyServices.slice(0, 3).map((service) => {
                                const Icon = serviceIcons[service.slug] || Wrench;
                                return (
                                    <Link
                                        key={service.id}
                                        href={`/dubai/services/${service.slug}`}
                                        className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-800 hover:border-red-500 transition-all duration-300 group"
                                    >
                                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                            <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                                                {service.name}
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                Response: {service.duration}
                                            </p>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}