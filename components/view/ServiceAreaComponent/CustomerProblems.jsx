// src/components/view/ServiceAreaComponent/CustomerProblems/CustomerProblems.jsx

"use client";

import Link from "next/link";
import {
    Battery,
    Wind,
    Thermometer,
    AlertTriangle,
    Car,
    Brackets as Brake,
    Settings,
    Gauge,
    Zap,
    Droplets,
    Wrench,
    CheckCircle,
    ArrowRight,
    Phone,
    MessageCircle,
    Shield,
    Clock,
} from "lucide-react";
import { SiteConfig } from "@/config/site";

export function CustomerProblems({ area }) {
    const problems = area?.customerProblemsSection?.problems || [];
    const name = area?.name || "Al Karama";
    const city = area?.city || "Dubai";
    const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";

    // Problem icon mapping
    const getProblemIcon = (problemTitle) => {
        const title = problemTitle?.toLowerCase() || "";
        if (title.includes("battery")) return Battery;
        if (title.includes("ac") || title.includes("cooling")) return Wind;
        if (title.includes("overheating") || title.includes("radiator")) return Thermometer;
        if (title.includes("warning light") || title.includes("diagnostics")) return Settings;
        if (title.includes("start") || title.includes("ignition")) return Zap;
        if (title.includes("brake")) return Brake;
        if (title.includes("oil") || title.includes("leak")) return Droplets;
        return AlertTriangle;
    };

    return (
        <section className="w-full py-8 bg-linear-to-br from-amber-50/30 via-white to-orange-50/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-1.5 mb-5">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-700 uppercase tracking-wider">
                            COMMON ISSUES WE SOLVE
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {area?.customerProblemsSection?.title ||
                            `Common Vehicle Problems in ${name} ${city}`}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {area?.customerProblemsSection?.subtitle ||
                            `Frequent car issues our mobile mechanics solve daily across ${name}.`}
                    </p>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-400/50 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {problems.length > 0 ? (
                        problems.map((problem, idx) => {
                            const IconComponent = getProblemIcon(problem.title);
                            return (
                                <div
                                    key={idx}
                                    className="group bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
                                >
                                    <div className="p-6">
                                        {/* Icon Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                                <IconComponent className="w-7 h-7 text-orange-600" />
                                            </div>
                                            <div className="bg-red-100 rounded-full px-2 py-1">
                                                <span className="text-xs font-bold text-red-600">
                                                    #{idx + 1} Common
                                                </span>
                                            </div>
                                        </div>

                                        {/* Problem Title */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                                            {problem.title}
                                        </h3>

                                        {/* Problem Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {problem.description}
                                        </p>

                                        {/* Solution Badge */}
                                        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                            </div>
                                            <span className="text-xs text-gray-500">
                                                Our mobile mechanics fix this on-site
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        // Default problems if no data provided
                        <>
                            <div className="bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                            <Battery className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <div className="bg-red-100 rounded-full px-2 py-1">
                                            <span className="text-xs font-bold text-red-600">#1 Common</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Dead Battery in Basement Parking</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Battery drain is common in apartment basement parking areas across {name}.
                                    </p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                        </div>
                                        <span className="text-xs text-gray-500">Our mobile mechanics fix this on-site</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                            <Wind className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <div className="bg-red-100 rounded-full px-2 py-1">
                                            <span className="text-xs font-bold text-red-600">#2 Common</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Car AC Not Cooling Properly</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Heavy Dubai traffic and extreme temperatures often affect AC cooling performance.
                                    </p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                        </div>
                                        <span className="text-xs text-gray-500">On-site AC repair available</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                            <Thermometer className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <div className="bg-red-100 rounded-full px-2 py-1">
                                            <span className="text-xs font-bold text-red-600">#3 Common</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Vehicle Overheating in Traffic</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Radiator and cooling system issues frequently occur during long traffic delays.
                                    </p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                        </div>
                                        <span className="text-xs text-gray-500">Cooling system repair on-site</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                            <Settings className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <div className="bg-red-100 rounded-full px-2 py-1">
                                            <span className="text-xs font-bold text-red-600">#4 Common</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Engine Warning Light Problems</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Modern vehicles often require advanced diagnostics for electrical and engine faults.
                                    </p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                        </div>
                                        <span className="text-xs text-gray-500">Advanced diagnostics on-site</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                            <Zap className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <div className="bg-red-100 rounded-full px-2 py-1">
                                            <span className="text-xs font-bold text-red-600">#5 Common</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Car Not Starting After Office Hours</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        We regularly assist customers with emergency jump starts and battery replacement.
                                    </p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                        </div>
                                        <span className="text-xs text-gray-500">24/7 emergency response</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                            <Brake className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <div className="bg-red-100 rounded-full px-2 py-1">
                                            <span className="text-xs font-bold text-red-600">#6 Common</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Brake Noise & Reduced Performance</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Brake pads and braking systems require regular inspection for safe driving.
                                    </p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                        </div>
                                        <span className="text-xs text-gray-500">Brake service on-site</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Emergency Solution Banner */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-10 mb-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-4">
                                <Clock className="w-3.5 h-3.5 text-white" />
                                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                                    EMERGENCY SOLUTION
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Facing Any of These Problems Right Now?
                            </h3>
                            <p className="text-white/90 text-base mb-6">
                                Don&lsquo;t wait! Our mobile mechanics are ready to assist you immediately with professional on-site repair.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/dubai/book-appointment"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Emergency Mechanic
                                </Link>
                                <Link
                                    href="https://wa.me/971501234567"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 bg-orange-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-900 transition-colors text-sm border border-white/20"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp for Quick Help
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:block text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                <p className="text-5xl font-bold text-white mb-2">{responseTime} Min</p>
                                <p className="text-white/80 text-sm">Average Response Time</p>
                                <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                                    <div className="bg-white h-2 rounded-full" style={{ width: "95%" }}></div>
                                </div>
                                <p className="text-white/70 text-xs mt-2">95% of emergency calls responded within target time</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prevention Tips Section */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Prevention Tips for {name} Drivers</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                            </div>
                            <p className="text-sm text-gray-600">Regular battery health checkups, especially during summer months</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                            </div>
                            <p className="text-sm text-gray-600">Schedule AC service before peak summer temperatures arrive</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                            </div>
                            <p className="text-sm text-gray-600">Monthly brake inspection for safe driving in heavy traffic</p>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        🚗 Don&lsquo;t see your problem listed? Call us at <strong className="text-gray-700">{SiteConfig?.displayNumber || "+971 50 123 4567"}</strong> for immediate assistance
                    </p>
                </div>
            </div>

            {/* JSON-LD Schema for Problems */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "name": `Common Car Problems in ${name} ${city}`,
                        "description": area?.customerProblemsSection?.title || `Frequent vehicle issues our mobile mechanics solve daily in ${name}`,
                        "mainEntity": (problems.length > 0 ? problems : [
                            { title: "Dead Battery in Basement Parking", description: "Battery drain is common in apartment basement parking areas" },
                            { title: "Car AC Not Cooling Properly", description: "Heavy Dubai traffic and extreme temperatures affect AC performance" },
                            { title: "Vehicle Overheating in Traffic", description: "Radiator and cooling system issues during traffic delays" },
                            { title: "Engine Warning Light Problems", description: "Advanced diagnostics for electrical and engine faults" },
                            { title: "Car Not Starting After Office Hours", description: "Emergency jump starts and battery replacement" },
                            { title: "Brake Noise & Reduced Performance", description: "Brake pads require regular inspection for safe driving" }
                        ]).map((problem, idx) => ({
                            "@type": "Question",
                            "name": problem.title,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": problem.description
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}