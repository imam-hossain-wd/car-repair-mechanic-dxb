// components/MapComponent.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Navigation,
    Clock,
    Shield,
    Truck,
    Wrench,
    CheckCircle,
    Compass,
    Award,
    Users
} from "lucide-react";
import { serviceAreas, SiteConfig } from "@/config/siteConfig";


export function Maps() {
    const {
        brandName,
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        email,
        location,
        mapsLink,
        operatingHours,
        city,
        coordinate,
        description
    } = SiteConfig;

    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
    }, []);


    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.300939078021!2d55.31707953907827!3d25.231856465990923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d364e1720cb%3A0x63bbf8d4c3d0263b!2sUmm%20Hurair%20Second%20-%20Dubai%20Healthcare%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1781627532168!5m2!1sen!2sbd";

    return (
        <section className="relative py-5 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
                        <Compass className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            Visit Our Location
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Find Us <span className="text-primary">in Dubai</span>
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {description || `Visit our service center or schedule a mobile repair. We're here to serve you across ${city}.`}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column - Info Panel */}
                    <div className={`lg:col-span-1 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                        }`}>

                        {/* Main Contact Card */}
                        <div className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-2xl overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

                            {/* Brand Info */}
                            <div className="relative flex items-center gap-3 mb-5">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl"></div>
                                    <div className="relative w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                                        <Wrench className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{brandName}</h3>
                                    <p className="text-white/60 text-sm">{location}</p>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="relative space-y-4">
                                {/* Location */}
                                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                                    <div className="p-2 bg-primary/30 rounded-lg group-hover:scale-110 transition-transform">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-medium">Location</p>
                                        <p className="text-sm text-white">{location}</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <Link
                                    href={numberCallLink}
                                    className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                                >
                                    <div className="p-2 bg-primary/30 rounded-lg group-hover:scale-110 transition-transform">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-medium">Emergency Support</p>
                                        <p className="text-sm text-white font-medium">{displayNumber}</p>
                                    </div>
                                </Link>

                                {/* Email */}
                                <Link
                                    href={`mailto:${email}`}
                                    className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                                >
                                    <div className="p-2 bg-primary/30 rounded-lg group-hover:scale-110 transition-transform">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-medium">Email Us</p>
                                        <p className="text-sm text-white truncate">{email}</p>
                                    </div>
                                </Link>

                                {/* Operating Hours */}
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-2 bg-primary/30 rounded-lg group-hover:scale-110 transition-transform">
                                            <Clock className="h-4 w-4" />
                                        </div>
                                        <p className="text-xs font-medium text-white/80">24/7 Operating Dubai City</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            {/* <div className="relative mt-5 space-y-2.5">
                                <Link
                                    href={numberCallLink}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 group"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>Call Now</span>
                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href={whatsappCallLink}
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    <span>WhatsApp Us</span>
                                </Link>
                            </div> */}
                        </div>

                        {/* Service Areas Chips */}
                        {/* <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Service Areas</h4>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {serviceAreas?.map((area, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-xs font-medium hover:bg-primary/20 transition-colors"
                                    >
                                        {area?.name}
                                    </span>
                                ))}
                            </div>
                        </div> */}
                    </div>

                    {/* Right Column - Map */}
                    <div className={`lg:col-span-2 transition-all duration-1000 delay-500 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                        }`}>

                        {/* Map Container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-gray-700">
                            {/* Loading State */}
                            {!isMapLoaded && (
                                <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center z-10">
                                    <div className="text-center">
                                        <div className="relative">
                                            <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                            <Wrench className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary animate-pulse" />
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">Loading map...</p>
                                    </div>
                                </div>
                            )}

                            {/* Map Iframe */}
                            <iframe
                                title={`${brandName} - Location Map`}
                                src={mapUrl}
                                width="100%"
                                height="450"
                                className={`transition-opacity duration-500 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                onLoad={() => setIsMapLoaded(true)}
                            />

                            {/* Map Overlay Controls */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button
                                    onClick={() => window.open(mapsLink, '_blank')}
                                    className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
                                    aria-label="Open in Google Maps"
                                >
                                    <Navigation className="w-5 h-5 text-primary" />
                                </button>
                            </div>

                            {/* Location Pin Indicator */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary/20">
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute"></div>
                                        <div className="w-3 h-3 bg-primary rounded-full relative"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-800">📍 We are here</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mobile Service Note */}
                        <div className="mt-5 p-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20 flex items-center justify-between flex-wrap gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Truck className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Mobile Service Available</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">We come to your location anywhere in {city}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 font-medium">
                                <CheckCircle className="h-4 w-4" />
                                <span>Free Inspection</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AutoRepair",
                            "name": brandName,
                            "description": description,
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Al Karama",
                                "addressLocality": city,
                                "addressCountry": "UAE"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": coordinate?.split(",")[0],
                                "longitude": coordinate?.split(",")[1]
                            },
                            "telephone": displayNumber,
                            "email": email,
                            "openingHours": "Mo-Su 00:00-23:59",
                            "areaServed": city,
                            "priceRange": "$$",
                            "hasMap": mapsLink
                        })
                    }}
                />
            </div>
        </section>
    );
}