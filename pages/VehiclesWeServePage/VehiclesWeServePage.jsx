"use client";

import {
    Car, Truck, Bus, Gauge, Battery, Shield, Clock, Phone,
    Award, MapPin, Star, Settings, TrendingUp, Compass,
    ArrowRight, MessageSquare
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

// shadcn/ui Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";


// --- DATA ---

const vehicleCategories = [
    {
        id: "sedans", icon: Car, name: "Sedans", count: "All Models",
        description: "Compact, Midsize & Full-size Sedans", popular: true,
        features: ["Engine Diagnostics", "AC Repair", "Oil Change", "Brake Service"],
        examples: ["Toyota Camry", "Honda Accord", "BMW 3 Series", "Mercedes C-Class", "Nissan Altima"]
    },
    {
        id: "suvs-crossovers", icon: Gauge, name: "SUVs & Crossovers", count: "All Sizes",
        description: "Compact, Midsize & Full-size SUVs", popular: true,
        features: ["Suspension Repair", "4x4 Service", "AC System", "Brake Replacement"],
        examples: ["Toyota Land Cruiser", "Nissan Patrol", "BMW X5", "Mercedes GLE", "Hyundai Tucson"]
    },
    {
        id: "luxury-vehicles", icon: Award, name: "Luxury Vehicles", count: "Premium Brands",
        description: "High-end & Performance Vehicles", popular: true,
        features: ["Specialized Diagnostics", "Performance Tuning", "Premium Parts", "Concierge Service"],
        examples: ["Porsche", "Tesla", "Lexus", "Audi", "BMW", "Mercedes-Benz"]
    },
    {
        id: "electric-vehicles", icon: Battery, name: "Electric Vehicles", count: "EV & Hybrid",
        description: "Electric & Hybrid Vehicles", popular: true,
        features: ["Battery Health Check", "Charging System", "HVAC Service", "Software Updates"],
        examples: ["Tesla Model 3/S/X/Y", "BYD Han/Tang", "Nissan Leaf", "Hyundai Ioniq", "Kia EV6"]
    },
    {
        id: "trucks-pickups", icon: Truck, name: "Trucks & Pickups", count: "All Sizes",
        description: "Light & Heavy Duty Trucks", popular: false,
        features: ["Engine Overhaul", "Transmission Service", "Suspension Upgrade", "Brake System"],
        examples: ["Ford F-150", "Toyota Hilux", "Chevrolet Silverado", "RAM 1500", "GMC Sierra"]
    },
    {
        id: "commercial-vehicles", icon: Bus, name: "Commercial Vans", count: "Fleet Ready",
        description: "Vans & Fleet Vehicles", popular: false,
        features: ["Fleet Maintenance", "Preventive Care", "Emergency Repair", "24/7 Support"],
        examples: ["Toyota Hiace", "Ford Transit", "Mercedes Sprinter", "Hyundai H-1", "Nissan Urvan"]
    }
];

const stats = [
    { value: "6+", label: "Vehicle Categories", icon: Car },
    { value: "50+", label: "Models Supported", icon: Settings },
    { value: "13+", label: "Years Experience", icon: Award },
    { value: "5,000+", label: "Vehicles Repaired", icon: TrendingUp },
];

const processSteps = [
    { title: "Book Online or Call", description: "Contact us via phone or WhatsApp. Share your vehicle details, location in Dubai, and the issue." },
    { title: "Transparent Quote", description: "We provide a clear, upfront estimate for parts and labor. No hidden fees or surprise charges." },
    { title: "We Come to You", description: "Our fully equipped mobile mechanic arrives at your home, office, or roadside location across Dubai." },
    { title: "Expert Repair", description: "We complete the repair on the spot using premium parts and provide a warranty on our workmanship." }
];

const promises = [
    { icon: Shield, title: "Certified Specialists", description: "Highly trained mechanics equipped to handle all vehicle makes, including luxury and European brands." },
    { icon: Clock, title: "Rapid Response Time", description: "Our mobile units are dispatched quickly to reach you anywhere in Dubai, respecting your time." },
    { icon: MapPin, title: "Doorstep Convenience", description: "No need to visit a garage. We bring the fully equipped workshop to your driveway or office parking." },
    { icon: Star, title: "Warranty & Quality", description: "We use only OEM or high-quality parts and back our repairs with a solid service warranty." },
];

// AEO Optimized FAQs (Direct, concise answers for AI and Voice Search)
const faqs = [
    { question: "What types of vehicles do you service in Dubai?", answer: "We service all vehicle types including Sedans, SUVs, Luxury Cars, Electric Vehicles (EVs), Trucks, and Commercial Vans. Our certified mechanics handle all makes and models, from Toyota and Nissan to BMW, Mercedes, Porsche, and Tesla." },
    { question: "Do you repair electric vehicles (EVs) and hybrids?", answer: "Yes, we specialize in EV and hybrid maintenance. Our technicians are trained to handle battery health checks, charging system diagnostics, software updates, and general servicing for brands like Tesla, BYD, Nissan Leaf, and Hyundai Ioniq." },
    { question: "How does your mobile mechanic service work?", answer: "Simply contact us via phone or WhatsApp with your vehicle details and location. We will provide a transparent quote, and our fully equipped mobile mechanic will come to your home, office, or current location in Dubai to perform the repair on the spot." },
    { question: "Are your mechanics certified for luxury and European cars?", answer: "Absolutely. We have specialized technicians with advanced diagnostic tools specifically for luxury and European brands, including BMW, Mercedes-Benz, Audi, Porsche, Land Rover, and Lexus, ensuring dealership-level quality." },
    { question: "Do you provide a warranty on your repairs?", answer: "Yes, we stand behind our work. We provide a warranty on both the parts we use and our workmanship. The exact warranty period depends on the type of service and parts replaced, which will be clearly stated in your quote." },
    { question: "What areas in Dubai do you cover?", answer: "We provide comprehensive mobile mechanic coverage across all of Dubai, including Downtown Dubai, Dubai Marina, JLT, Business Bay, Jumeirah, Silicon Oasis, and all surrounding emirates." }
];

// --- SCHEMAS ---
const autoRepairSchema = {
    "@context": "https://schema.org", "@type": "AutoRepair",
    "name": SiteConfig.brandName,
    "description": `Professional mobile vehicle repair services for all types in ${SiteConfig.city}.`,
    "url": "https://carrepairmechanic.ae/dubai/vehicles-we-serve",
    "telephone": SiteConfig.displayNumber, "priceRange": "$$",
    "areaServed": { "@type": "City", "name": SiteConfig.city },
    "knowsAbout": vehicleCategories.map(cat => cat.name),
    "availableService": vehicleCategories.flatMap(cat => cat.features),
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }
};

const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://carrepairmechanic.ae" },
        { "@type": "ListItem", "position": 2, "name": "Dubai", "item": "https://carrepairmechanic.ae/dubai" },
        { "@type": "ListItem", "position": 3, "name": "Vehicles We Serve", "item": "https://carrepairmechanic.ae/dubai/vehicles-we-serve" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question", "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
};

// --- PAGE COMPONENT ---
export default function VehiclesWeServePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">

            {/* 1. HERO SECTION */}
            <section className="py-16 md:py-24 bg-linear-to-b from-muted/50 to-background border-b">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
                        <Compass className="mr-2 h-4 w-4" /> Serving All Dubai Emirates
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Comprehensive Vehicle Repair <br className="hidden md:block" /> & Mobile Mechanic Services
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        From daily sedans to luxury SUVs and electric vehicles, our certified mechanics deliver expert doorstep repair across Dubai. All makes and models welcome.
                    </p>
                    <div className=" w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="w-auto px-8">
                            <Link href={`tel:${SiteConfig.displayNumber}`}>
                                <Phone className="mr-2 h-5 w-5" /> Call {SiteConfig.displayNumber}
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-auto px-8">
                            <a href={SiteConfig.whatsappCallLink} target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. TRUST SIGNALS / STATS */}
            <section className="py-12 border-b bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-primary/10 rounded-full text-primary mb-1">
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. VEHICLE CATEGORIES (GEO Optimized) */}
            <section id="vehicles" className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Vehicles We Service</h2>
                        <p className="text-lg text-muted-foreground">
                            Specialized diagnostic tools and certified expertise for every vehicle category on the road.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicleCategories.map((category) => (
                            <Card key={category.id} className="flex flex-col bg-background border-border/50 hover:border-primary/50">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <category.icon className="h-6 w-6" />
                                        </div>
                                        {category.popular && (
                                            <Badge variant="default" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                                                <Star className="mr-1 h-3 w-3 fill-primary" /> Popular
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl mb-1">{category.name}</CardTitle>
                                    <CardDescription>{category.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Core Services</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.features.map((feature, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs font-normal">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Common Models</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {category.examples.slice(0, 4).join(", ")}
                                            {category.examples.length > 4 && <span className="text-primary"> +{category.examples.length - 4} more</span>}
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href={`tel:${SiteConfig.displayNumber}`}>
                                            Book Service <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HOW IT WORKS (Crucial for GEO / AI Overviews) */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How Our Mobile Mechanic Service Works</h2>
                        <p className="text-lg text-muted-foreground">
                            A seamless, transparent, and convenient repair process designed for Dubai residents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <div key={i} className="text-center md:text-left flex flex-col items-center md:items-start">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHY CHOOSE US */}
            <section className="py-16 md:py-24 bg-muted/30 border-y">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Dubai Trusts Us</h2>
                        <p className="text-lg text-muted-foreground">
                            We combine dealership-level expertise with the convenience of mobile service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {promises.map((promise, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-background rounded-xl border">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                                    <promise.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{promise.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{promise.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION (Crucial for AEO / Voice Search) */}
            <section id="faq" className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-muted-foreground">
                            Direct answers to common questions about our vehicle repair services in Dubai.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 data-[state=open]:bg-muted/50">
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-16 md:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Get Your Vehicle Serviced?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Skip the garage wait. Our certified mobile mechanics come to your home or office in Dubai with all the tools needed.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" variant="secondary" className="w-auto px-8">
                            <Link href={`tel:${SiteConfig.displayNumber}`}>
                                <Phone className="mr-2 h-5 w-5" /> Call Now
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="w-auto px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                            <Link href={SiteConfig.whatsappCallLink} target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 8. STRUCTURED DATA (SEO) */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRepairSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        </main>
    );
}