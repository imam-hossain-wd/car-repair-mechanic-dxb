// src/components/view/ServiceAreaComponent/NearbyAreas/NearbyAreas.jsx

"use client";

import Link from "next/link";
import {
    MapPin,
    ArrowRight,
    Car,
    Clock,
    Star,
    Shield,
    Navigation,
    Building,
    ShoppingBag,
    Hotel,
    Park,
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function NearbyAreas({ area }) {
    const nearbyAreas = area?.nearbyAreasSection?.areas || [];
    const name = area?.name || "Al Karama";
    const city = area?.city || "Dubai";
    const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";
    const rating = area?.hero?.stats?.find(s => s?.label === "Customer Rating")?.value || "4.9/5";

    // Get area type badge color
    const getAreaBadgeColor = (areaName) => {
        const name = areaName?.toLowerCase() || "";
        if (name.includes("karama") || name.includes("mankhool")) return "bg-blue-100 text-blue-700";
        if (name.includes("dubai healthcare") || name.includes("healthcare")) return "bg-green-100 text-green-700";
        if (name.includes("bur dubai") || name.includes("burjuman")) return "bg-purple-100 text-purple-700";
        if (name.includes("oud metha")) return "bg-orange-100 text-orange-700";
        return "bg-gray-100 text-gray-700";
    };

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
                        <Navigation className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            SERVICE COVERAGE AREA
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {area?.nearbyAreasSection?.title || `Nearby Areas We Serve`}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {area?.nearbyAreasSection?.subtitle ||
                            `Our mobile mechanics also provide emergency roadside assistance and car repair services in nearby ${city} locations.`}
                    </p>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Service Coverage Info Bar */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/3 rounded-2xl p-5 mb-10 border border-primary/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-xs text-gray-500">Avg. Response Time</p>
                                <p className="text-lg font-bold text-gray-900">{responseTime} Minutes</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Star className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-xs text-gray-500">Customer Rating</p>
                                <p className="text-lg font-bold text-gray-900">{rating}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Shield className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-xs text-gray-500">Service Guarantee</p>
                                <p className="text-lg font-bold text-gray-900">100% Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* LEFT COLUMN - Nearby Areas List */}
                    <div>
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                Locations We Cover Near {name}
                            </h3>

                            {nearbyAreas.length > 0 ? (
                                <div className="space-y-3">
                                    {nearbyAreas.map((areaItem, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/dubai/area-we-serve/${areaItem.slug}`}
                                            className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-primary/5 transition-colors group border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-md"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <MapPin className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                                        {areaItem.name}
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${getAreaBadgeColor(areaItem.name)}`}>
                                                            {areaItem.name.includes("Karama") || areaItem.name.includes("Mankhool") ? "Popular Area" : "Nearby"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">• {responseTime} min response</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                // Default nearby areas
                                <div className="space-y-3">
                                    {[
                                        { name: "Al Karama", slug: "al-karama", type: "popular" },
                                        { name: "Bur Dubai", slug: "bur-dubai", type: "nearby" },
                                        { name: "Oud Metha", slug: "oud-metha", type: "nearby" },
                                        { name: "Al Mankhool", slug: "al-mankhool", type: "popular" },
                                        { name: "Al Jafiliya", slug: "al-jafiliya", type: "nearby" },
                                        { name: "Dubai Healthcare City", slug: "dubai-healthcare-city", type: "nearby" },
                                    ].map((areaItem, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/dubai/area-we-serve/${areaItem.slug}`}
                                            className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-primary/5 transition-colors group border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-md"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <MapPin className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                                        {areaItem.name}
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${areaItem.type === 'popular' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                                                            }`}>
                                                            {areaItem.type === 'popular' ? 'Popular Area' : 'Nearby'}
                                                        </span>
                                                        <span className="text-xs text-gray-400">• {responseTime} min response</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Area Information */}
                    <div>
                        {/* Quick Service Info */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" />
                                Why Choose Our Mobile Service?
                            </h3>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">Fast {responseTime} minute response time</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">Certified mobile mechanics</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">24/7 emergency roadside assistance</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">Advanced diagnostic equipment</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">Genuine spare parts with warranty</span>
                                </div>
                            </div>
                        </div>

                        {/* Service Coverage Map Card */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/3 rounded-2xl p-6 border border-primary/10 mb-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Building className="w-5 h-5 text-primary" />
                                Full Coverage Areas
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Our mobile mechanics provide emergency car repair and roadside assistance across:
                            </p>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Residential buildings & apartment complexes</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Commercial areas & office parking</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Shopping centers & malls near {name}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Hotels & tourist attractions</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Underground & basement parking</span>
                                </div>
                            </div>
                        </div>

                        {/* Emergency CTA */}
                        <div className="bg-gray-900 rounded-2xl p-6 text-center">
                            <Car className="w-12 h-12 text-primary mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-white mb-2">Need Emergency Service?</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Available 24/7 across {name} and all nearby areas
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/dubai/book-appointment"
                                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                                >
                                    <Car className="w-4 h-4" />
                                    Book Mobile Mechanic
                                </Link>
                                <Link
                                    href={`https://maps.google.com/?q=${area?.coordinates?.lat || 25.251},${area?.coordinates?.lng || 55.304}`}
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 border border-gray-600 text-gray-300 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                                >
                                    <MapPin className="w-4 h-4" />
                                    Get Directions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Area Note */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        🚗 Don&apos;t see your area listed? Call us at <strong className="text-gray-700">{SiteConfig?.displayNumber}</strong> and we&apos;ll assist you immediately
                    </p>
                </div>
            </div>

            {/* JSON-LD Schema for Service Area */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AutoRepair",
                        "name": `Fix Car Dubai - Mobile Car Repair Service`,
                        "description": `Professional mobile car repair and roadside assistance service covering ${name} and ${nearbyAreas.length} nearby areas in ${city}`,
                        "areaServed": [
                            name,
                            ...(nearbyAreas.length > 0 ? nearbyAreas.map(a => a.name) : [
                                "Al Karama", "Bur Dubai", "Oud Metha", "Al Mankhool", "Al Jafiliya", "Dubai Healthcare City"
                            ])
                        ],
                        "availableService": [
                            "Emergency Roadside Assistance",
                            "Mobile Car Battery Replacement",
                            "On-Site Car Repair",
                            "Car AC Repair",
                            "Brake Pad Replacement",
                            "Engine Diagnostics"
                        ],
                        "openingHours": "Mo-Su 00:00-23:59",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": name,
                            "addressRegion": city,
                            "addressCountry": "AE"
                        }
                    })
                }}
            />
        </section>
    );
}

// Helper component for checkmark
const CheckCircle = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);