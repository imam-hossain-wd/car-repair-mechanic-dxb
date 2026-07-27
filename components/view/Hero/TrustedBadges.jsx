"use client";

import { useState, useEffect } from "react";
import { Award, Star, Clock, Truck, Shield, CheckCircle, ThumbsUp, Users, Sparkles } from "lucide-react";

export function TrustedBadges() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const items = [
        { icon: Award, label: "13+ Years", sub: "Experience" },
        { icon: Users, label: "5,000+", sub: "Happy Customers" },
        { icon: Clock, label: "24/7", sub: "Emergency Service" },
        { icon: Truck, label: "5-15 min", sub: "Response Time" },
        { icon: Shield, label: "Certified", sub: "Mechanics" },
        { icon: Star, label: "4.9/5", sub: "Google Rating" },
    ];

    return (
        <section className="py-8 bg-linear-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/10">
            <div className="container mx-auto px-4">
                <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>

                    {/* Brand Badge */}
                    <div className="flex justify-center mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-gray-900 rounded-full shadow-sm border border-primary/20">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                Dubai's Most Trusted Mobile Mechanic
                            </span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {items.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex justify-baseline gap-3 items-center gap- p-3 bg-white backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <div className="flex justify-center items-center w-8 h-8 bg-primary rounded-full">
                                        <Icon className="h-5 w-5 text-white mb-0.5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-blac">
                                            {item.label}
                                        </span>
                                        <span className="text-[11px] text-black">
                                            {item.sub}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    {/* Trust Line */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4 text-md text-">
                        <span className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-primary" /> Warranty
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-primary" /> Free Inspection
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-primary" /> No Hidden Fees
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}