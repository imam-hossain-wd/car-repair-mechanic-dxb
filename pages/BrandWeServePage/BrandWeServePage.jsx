"use client";

// app/dubai/brands/page.jsx
import {
    Car,
    Wrench,
    Star,
    Shield,
    Clock,
    Phone,
    CheckCircle,
    ArrowRight,
    Award,
    Users,
    Search
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import { carBrandsData } from "@/data/carBrandsPageData";


// Flatten all brands for SEO
const allBrands = Object.values(carBrandsData).flatMap(category => category.brands);
const popularBrands = allBrands.filter(brand => brand.popular === true);
const totalBrands = allBrands.length;

// Stats
const stats = [
    { value: totalBrands, label: "Car Brands", icon: Car },
    { value: "40+", label: "Models Supported", icon: Wrench },
    { value: "13+", label: "Years Experience", icon: Award },
    { value: "5000+", label: "Cars Repaired", icon: Users },
];

export default function BrandWeServePage() {
    const { brandName, displayNumber, city, whatsappCallLink } = SiteConfig;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-12 lg:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full mb-4">
                            <Car className="h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-medium text-primary uppercase tracking-wide">
                                All Makes & Models
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Car Brands <span className="text-primary">We Service</span> in {city}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Professional repair and maintenance for {totalBrands}+ car brands.
                            Certified mechanics with brand-specific diagnostic tools.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-700">
                                        <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
                                        <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                        <div className="text-xs text-gray-500">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">

                {/* Popular Brands Banner */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-5 mb-10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Most Popular Brands</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {popularBrands.map((brand, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-white dark:bg-gray-800 text-primary text-sm font-medium rounded-lg border border-primary/20"
                            >
                                {brand.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Brands by Category */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {Object.entries(carBrandsData).map(([key, category]) => (
                        <div
                            key={key}
                            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Category Header */}
                            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">{category.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">{category.name}</h3>
                                        <p className="text-xs text-gray-500">{category.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Brands List */}
                            <div className="p-4">
                                <div className="space-y-2">
                                    {category.brands.map((brand, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                                        >
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                                        {brand.name}
                                                    </span>
                                                    {brand.popular && (
                                                        <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                                            Popular
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-gray-500 mt-0.5">{brand.models}</p>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Specialized Services Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-10 border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Specialized <span className="text-primary">Services</span> for Every Brand
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                            We use brand-specific diagnostic tools and genuine parts
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3">
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Wrench className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Engine Diagnostics</p>
                            <p className="text-xs text-gray-500">All brands</p>
                        </div>
                        <div className="text-center p-3">
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Genuine Parts</p>
                            <p className="text-xs text-gray-500">OEM quality</p>
                        </div>
                        <div className="text-center p-3">
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Fast Service</p>
                            <p className="text-xs text-gray-500">15-30 min response</p>
                        </div>
                        <div className="text-center p-3">
                            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Award className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">12 Months Warranty</p>
                            <p className="text-xs text-gray-500">On all repairs</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 mb-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Why Choose Us for Your {city} Car Repair?
                            </h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Certified mechanics for all brands</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Brand-specific diagnostic equipment</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Genuine parts with warranty</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>24/7 mobile service at your doorstep</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex p-4 bg-primary/20 rounded-full mb-3">
                                <Search className="h-10 w-10 text-primary" />
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Can&apos;t find your brand? We service all makes and models!
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/20">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Need Service for Your Car?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        Call us now for immediate assistance - We service all brands
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={`tel:${displayNumber}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all"
                        >
                            <Phone className="h-4 w-4" />
                            Call Now: {displayNumber}
                        </a>
                        <a
                            href={whatsappCallLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all"
                        >
                            <Phone className="h-4 w-4" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>

                {/* SEO Structured Data - AutoRepair Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AutoRepair",
                            "name": brandName,
                            "description": `Professional car repair services for ${totalBrands}+ car brands in ${city}`,
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": city,
                                "addressCountry": "UAE"
                            },
                            "areaServed": city,
                            "knowsAbout": allBrands.map(brand => ({
                                "@type": "Brand",
                                "name": brand.name,
                                "description": `${brand.name} repair and maintenance services`
                            })),
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                "opens": "00:00",
                                "closes": "23:59"
                            },
                            "priceRange": "$$"
                        })
                    }}
                />

                {/* ItemList Schema for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Car Brands Serviced in Dubai",
                            "description": `Complete list of ${totalBrands} car brands we service`,
                            "numberOfItems": totalBrands,
                            "itemListElement": allBrands.map((brand, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "name": brand.name,
                                "url": `https://carrepairmechanic.ae/dubai/brands/${brand.slug}`,
                                "description": `Expert ${brand.name} repair and maintenance in ${city}`
                            }))
                        })
                    }}
                />

                {/* FAQ Schema for Voice Search */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": `What car brands do you service in ${city}?`,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": `We service ${totalBrands}+ car brands including ${popularBrands.slice(0, 5).map(b => b.name).join(", ")} and many more. All makes and models welcome.`
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you specialize in specific car brands?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, our mechanics are trained for Japanese, German, American, Korean, and European brands. We use brand-specific diagnostic tools for accurate repairs."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you use genuine parts for all brands?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, we use genuine or OEM-quality parts for all brands with warranty on parts and labor."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can you service luxury car brands?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, we specialize in luxury brands including BMW, Mercedes-Benz, Audi, Lexus, Porsche, Land Rover, and Tesla."
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* LocalBusiness Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": brandName,
                            "telephone": displayNumber,
                            "areaServed": city,
                            "brand": allBrands.map(brand => brand.name),
                            "serviceType": ["Car Repair", "Maintenance", "Diagnostics", "Battery Replacement", "AC Repair"]
                        })
                    }}
                />
            </div>

            <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
        </div>
    );
}