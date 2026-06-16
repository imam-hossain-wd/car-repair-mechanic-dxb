// components/FeaturedServices.jsx
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteConfig } from "@/app/siteConfig";


export function QuickPriceGuide() {
    const { numberCallLink } = SiteConfig;

    const pricingGuide = [
        { service: "Battery Replacement", price: "From AED 250", time: "30 min" },
        { service: "AC Repair", price: "From AED 199", time: "1 hour" },
        { service: "Oil Change", price: "From AED 180", time: "30 min" },
        { service: "Brake Repair", price: "From AED 350", time: "1.5 hours" },
    ];

    return (
        <section className=" bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Pricing Guide Table */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Quick Price Guide
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                            Transparent pricing with no hidden charges
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                        Service
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                        Estimated Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                        Starting Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {pricingGuide.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                        <td className="px-6 py-3 text-sm text-gray-900 dark:text-white font-medium">
                                            {item.service}
                                        </td>
                                        <td className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">
                                            {item.time}
                                        </td>
                                        <td className="px-6 py-3 text-sm font-semibold text-primary">
                                            {item.price}
                                        </td>
                                        <td className="px-6 py-3">
                                            <Link
                                                href={numberCallLink}
                                                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium"
                                            >
                                                Book Now
                                                <ChevronRight className="h-3 w-3" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}