// components/Footer.jsx
"use client";

import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Shield,
    Wrench,
    Map,
    Navigation,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Send,
    ChevronRight,
    Award,
    Truck,
    Headphones,
    Star,
    Calendar,
    CheckCircle
} from "lucide-react";
import { SiteConfig } from "@/app/siteConfig";
import Logo from "../Logo/Logo";


export function Footer() {
    const {
        brandName,
        description,
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        email,
        location,
        mapsLink,
        operatingHours,
        serviceAreas,
        services,
        footerhrefs,
        socialLinks,
        city,
        country,
        coordinate
    } = SiteConfig;



    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 relative z-10">

                    {/* Column 1: Brand & Contact - 4 columns */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Brand Logo & Name */}
                        <div className="w-[55%] md:w-[70%] space-y-4 bg-white p-4  rounded">
                            <Logo />


                        </div>

                        <dib className="">
                            <p className="text-xs text-white ">Professional Auto Care</p>

                            <p className="text-sm text-white mt-2 mb-5">
                                {description || "Your trusted mobile car repair service in Dubai. Professional, reliable, and available 24/7 for all your automotive needs."}
                            </p>
                        </dib>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                <Clock className="h-3.5 w-3.5 text-primary" />
                                <span className="text-xs text-gray-300">24/7 Emergency</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                <Shield className="h-3.5 w-3.5 text-primary" />
                                <span className="text-xs text-gray-300">Certified Experts</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                <Truck className="h-3.5 w-3.5 text-primary" />
                                <span className="text-xs text-gray-300">Mobile Service</span>
                            </div>
                        </div>

                        {/* Contact Information Cards */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Get in Touch</h3>


                            {/* Google Maps Badge */}
                            {/* <Link href={mapsLink} target="_blank" className="block p-3 bg-white/5 rounded-xl hover:bg-primary/10 transition-all border border-white/10 hover:border-primary/30">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span className="text-xs text-gray-300">Find us on Google Maps</span>
                                </div>
                                <p className="text-xs text-primary mt-1">4.9 ★ (500+ reviews)</p>
                            </Link> */}

                            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                                <div className="p-2 bg-primary/80 rounded-lg">
                                    <MapPin className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white">{location}</p>
                                    <Link href={mapsLink} target="_blank" className="text-xs text-primary hover:underline inline-flex items-center gap-1 mt-1">
                                        <Navigation className="h-3 w-3" />
                                        Get Directions
                                    </Link>
                                </div>
                            </div>

                            <Link href={numberCallLink} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-white/10 hover:border-primary/30">
                                <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                                    <Phone className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white">{displayNumber}</p>
                                    <p className="text-xs text-gray-400">24/7 Emergency Support</p>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>

                            <Link href={whatsappCallLink} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-green-500/10 transition-all duration-300 group border border-white/10 hover:border-green-500/30">
                                <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
                                    <Send className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white">WhatsApp Us</p>
                                    <p className="text-xs text-gray-400">Quick Response</p>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                            </Link>

                            <Link href={`mailto:${email}`} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-white/10 hover:border-primary/30">
                                <div className="p-2 bg-primary/80 rounded-lg group-hover:scale-110 transition-transform">
                                    <Mail className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white truncate">{email}</p>
                                    <p className="text-xs text-gray-400">Email Us</p>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>

                        </div>



                    </div>

                    {/* Column 2: Services - 3 columns */}
                    <div className="lg:col-span-3 space-y-5">
                        <div>
                            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                <Wrench className="h-5 w-5 text-primary" />
                                Our Services
                            </h3>
                            <nav className="space-y-2">
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        href={`/dubai/services/${service.slug}`}
                                        className="group flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-all duration-200"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                                        <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Column 3: Service Areas - 3 columns */}
                    <div className="lg:col-span-3 space-y-5">
                        <div>
                            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                <Map className="h-5 w-5 text-primary" />
                                Service Areas
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                                {serviceAreas.map((area, index) => (
                                    <Link
                                        key={index}
                                        href={area.href}
                                        className="group flex items-center gap-2 text-sm text-gray-300 "
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                                        <span className="truncate group-hover:translate-x-1 transition-transform">{area.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter & Social - 2 columns */}
                    <div className="lg:col-span-3 space-y-5">
                        {/* Quick Links */}
                        <div className="">
                            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                <Award className="h-5 w-5 text-primary" />
                                Quick Links
                            </h3>
                            <nav className="space-y-2">
                                {footerhrefs?.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        target={link.href.endsWith('.xml') ? "_blank" : undefined}
                                        className="group flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-all duration-200"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                                        <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>



                        <div>
                            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                <Headphones className="h-5 w-5 text-primary" />
                                Connect With Us
                            </h3>
                            <div className="flex  gap-3">
                                {socialLinks?.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative"
                                            aria-label={social.name}
                                        >
                                            <div className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all duration-300 hover:scale-110 border border-white/10 hover:border-primary/50">
                                                <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="p-4 bg-linear-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 ">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock className="h-4 w-4 text-primary" />
                                <h3 className="text-sm font-semibold">Operating Hours</h3>
                            </div>
                            <div className="space-y-1.5 ">
                                {operatingHours?.map((schedule, index) => (
                                    <div key={index} className="flex justify-between text-xs">
                                        <span className="text-gray-300">{schedule.day}</span>
                                        <span className="text-white font-medium">{schedule.hours}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                Available 365 days a year
                            </p>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="p-5 bg-linear-to-br from-primary/15 to-primary/5 rounded-2xl border border-primary/20">
                            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                                <Send className="h-4 w-4 text-primary" />
                                Newsletter
                            </h3>
                            <p className="text-xs text-gray-300 mb-3">
                                Get updates about offers, tips & new services
                            </p>
                            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full px-3 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Subscribe
                                    <Send className="h-3.5 w-3.5" />
                                </button>
                            </form>
                            <p className="text-xs text-gray-400 mt-2">
                                No spam, unsubscribe anytime.
                            </p>
                        </div>


                    </div>
                </div>

                {/* SEO Structured Data (Hidden but accessible) */}
                <div className="sr-only">
                    <div itemScope itemType="https://schema.org/AutoRepair">
                        <span itemProp="name">{brandName}</span>
                        <span itemProp="description">{description}</span>
                        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <span itemProp="streetAddress">{location}</span>
                            <span itemProp="addressLocality">{city}</span>
                            <span itemProp="addressCountry">{country}</span>
                        </span>
                        <span itemProp="telephone">{displayNumber}</span>
                        <span itemProp="email">{email}</span>
                        <span itemProp="openingHours">24/7</span>
                        <span itemProp="priceRange">$$</span>
                        <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                            <span itemProp="latitude">{coordinate?.split(",")[0]}</span>
                            <span itemProp="longitude">{coordinate?.split(",")[1]}</span>
                        </span>
                    </div>
                </div>

                {/* Copyright & Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-xs text-gray-400">
                                © {new Date().getFullYear()} {brandName}. All rights reserved.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Professional Car Repair & Mobile Mechanic Service in {city}, {country}
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {footerhrefs?.slice(-3).map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target={link.href.endsWith('.xml') ? "_blank" : undefined}
                                    className="text-xs text-gray-400 hover:text-primary transition-colors"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>

                        <div className="text-xs text-gray-500 flex items-center gap-1">
                            <span>🚗 Mobile Service</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline">💯 100% Guarantee</span>
                            <span className="hidden md:inline">•</span>
                            <span className="hidden md:inline">⭐ Trusted by 5000+ Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}