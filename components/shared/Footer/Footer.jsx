import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Wrench,
    Map,
    Navigation,
    Send,
    ChevronRight,
    Award,
    Headphones,
    CheckCircle
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import Logo from "../Logo/Logo";
import { services } from "@/data/services/services";
import Image from "next/image";
import { getServiceAreasNameSlug } from "@/utils/getServiceAreasNameSlug";


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
        footerhrefs,
        socialLinks,
        city,
        country,
        coordinate
    } = SiteConfig;


    const serviceAreas = getServiceAreasNameSlug()



    return (
        <footer className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 relative z-10">

                    {/* Column 1: Brand & Contact - 4 columns */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Brand Logo & Name */}
                        <Link href={SiteConfig?.GMB?.mapsLink} target="_blank" >
                            <div className="w-full space-y-4 bg-white p-4  rounded">
                                <Logo />
                            </div>
                        </Link>

                        <div className="">
                            <p className="text-sm text-white mt-2 mb-5">
                                Car Repair Mechanic Dubai is a premier 24/7 mobile auto repair and roadside assistance provider based in Oud Metha, Dubai. Serving Bur Dubai, Deira, Business Bay, Downtown, Jumeirah, and surrounding areas, our certified mobile mechanics provide fast on-site service—including car battery replacement, auto AC repair, computer diagnostics, brake servicing, and oil changes. We bring complete workshop capabilities directly to your doorstep with transparent pricing and guaranteed work.
                            </p>
                        </div>

                        {/* Contact Information Cards */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Get in Touch</h3>
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
                                        href={`/services/${service.slug}`}
                                        className="group flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-all duration-200"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                                        <span className="group-hover:translate-x-1 transition-transform">Mobile {service.name}</span>
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
                                    <Link href={`/area-we-serve/${area.slug}`}
                                        key={index}
                                        className="group flex items-center gap-2 text-sm text-gray-300 "
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                                        <span className="truncate group-hover:translate-x-1 transition-transform">{area?.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter & Social - 2 columns */}
                    <div className="lg:col-span-3 space-y-5">

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

                                                <Image className="w-7 h-7" src={social?.icon} width={30} height={30} alt={social.name} />
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