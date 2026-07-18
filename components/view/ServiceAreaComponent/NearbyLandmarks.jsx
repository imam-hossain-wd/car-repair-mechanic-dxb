// // src/components/view/ServiceAreaComponent/NearbyLandmarks/NearbyLandmarks.jsx

// "use client";

// import Link from "next/link";
// import {
//     MapPin,
//     Building,
//     ShoppingBag,
//     Landmark,
//     Hospital,
//     School,
//     Car,
//     Coffee,
//     Hotel,
//     TreePine as Park,
//     Train,
//     Navigation,
//     Clock,
//     Phone,
//     Star,
//     ThumbsUp,
//     ArrowRight,
//     CheckCircle,
// } from "lucide-react";

// export function NearbyLandmarks({ area }) {
//     const landmarks = area?.nearbyLandmarksSection?.landmarks || [];
//     const nearbyAreas = area?.nearbyAreasSection?.areas || [];
//     const name = area?.name || "Al Karama";
//     const city = area?.city || "Dubai";
//     const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";

//     // Landmark icon mapping
//     const getLandmarkIcon = (landmarkName) => {
//         const name = landmarkName?.toLowerCase() || "";
//         if (name.includes("park")) return Park;
//         if (name.includes("mall") || name.includes("hypermarket") || name.includes("market") || name.includes("centre")) return ShoppingBag;
//         if (name.includes("metro") || name.includes("station")) return Train;
//         if (name.includes("hospital") || name.includes("clinic") || name.includes("healthcare")) return Hospital;
//         if (name.includes("school") || name.includes("college") || name.includes("university")) return School;
//         if (name.includes("hotel")) return Hotel;
//         if (name.includes("cafe") || name.includes("restaurant")) return Coffee;
//         if (name.includes("street") || name.includes("road")) return Navigation;
//         if (name.includes("building")) return Building;
//         return Landmark;
//     };

//     return (
//         <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

//                 {/* Section Header */}
//                 <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
//                     {/* Badge */}
//                     <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-5">
//                         <MapPin className="w-4 h-4 text-blue-600" />
//                         <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
//                             SERVICE COVERAGE AREA
//                         </span>
//                     </div>

//                     {/* Title */}
//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                         {area?.nearbyLandmarksSection?.title ||
//                             `Areas & Landmarks We Cover in ${name}`}
//                     </h2>

//                     {/* Subtitle */}
//                     <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//                         {area?.nearbyLandmarksSection?.subtitle ||
//                             `Fast mobile mechanic and emergency roadside assistance near major ${name} landmarks.`}
//                     </p>

//                     {/* Divider */}
//                     <div className="w-20 h-1 bg-blue-400/50 rounded-full mx-auto mt-6"></div>
//                 </div>

//                 {/* Two Column Layout */}
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

//                     {/* LEFT COLUMN - Landmarks Grid */}
//                     <div>
//                         <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8 lg:mb-0">
//                             <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
//                                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
//                                     <MapPin className="w-5 h-5" />
//                                     Key Landmarks We Serve
//                                 </h3>
//                                 <p className="text-blue-100 text-sm mt-1">
//                                     Fast response to all major locations in {name}
//                                 </p>
//                             </div>

//                             <div className="p-6">
//                                 {landmarks.length > 0 ? (
//                                     <div className="space-y-4">
//                                         {landmarks.map((landmark, idx) => {
//                                             const IconComponent = getLandmarkIcon(landmark.name);
//                                             return (
//                                                 <div
//                                                     key={idx}
//                                                     className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200"
//                                                 >
//                                                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                                                         <IconComponent className="w-6 h-6 text-blue-600" />
//                                                     </div>
//                                                     <div className="flex-1">
//                                                         <h4 className="font-bold text-gray-900 text-base mb-1">
//                                                             {landmark.name}
//                                                         </h4>
//                                                         <p className="text-gray-500 text-sm leading-relaxed">
//                                                             {landmark.description ||
//                                                                 `Emergency battery replacement and roadside assistance near ${landmark.name}, ${name}.`}
//                                                         </p>
//                                                         <div className="flex items-center gap-3 mt-2">
//                                                             <div className="flex items-center gap-1">
//                                                                 <Clock className="w-3 h-3 text-green-600" />
//                                                                 <span className="text-xs text-gray-500">
//                                                                     ETA: {responseTime} min
//                                                                 </span>
//                                                             </div>
//                                                             <div className="flex items-center gap-1">
//                                                                 <Star className="w-3 h-3 text-yellow-500" />
//                                                                 <span className="text-xs text-gray-500">
//                                                                     24/7 Service
//                                                                 </span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                 ) : (
//                                     // Default landmarks
//                                     <div className="space-y-4">
//                                         {[
//                                             { name: `${name} Park`, icon: Park, desc: `Emergency battery replacement and roadside assistance near ${name} Park.` },
//                                             { name: "Lulu Hypermarket", icon: ShoppingBag, desc: "Mobile mechanic and diagnostics service near Lulu Hypermarket." },
//                                             { name: "ADCB Metro Station", icon: Train, desc: "Quick car battery replacement and jump start service near ADCB Metro Station." },
//                                             { name: `${name} Centre`, icon: ShoppingBag, desc: "Professional on-site car repair and AC service near the centre." },
//                                             { name: "Sheikh Khalifa Bin Zayed Street", icon: Navigation, desc: "Emergency roadside assistance and breakdown recovery across major roads." },
//                                         ].map((landmark, idx) => {
//                                             const IconComponent = landmark.icon;
//                                             return (
//                                                 <div
//                                                     key={idx}
//                                                     className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200"
//                                                 >
//                                                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                                                         <IconComponent className="w-6 h-6 text-blue-600" />
//                                                     </div>
//                                                     <div className="flex-1">
//                                                         <h4 className="font-bold text-gray-900 text-base mb-1">
//                                                             {landmark.name}
//                                                         </h4>
//                                                         <p className="text-gray-500 text-sm leading-relaxed">
//                                                             {landmark.desc}
//                                                         </p>
//                                                         <div className="flex items-center gap-3 mt-2">
//                                                             <div className="flex items-center gap-1">
//                                                                 <Clock className="w-3 h-3 text-green-600" />
//                                                                 <span className="text-xs text-gray-500">ETA: {responseTime} min</span>
//                                                             </div>
//                                                             <div className="flex items-center gap-1">
//                                                                 <Star className="w-3 h-3 text-yellow-500" />
//                                                                 <span className="text-xs text-gray-500">24/7 Service</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN - Nearby Areas & Map Info */}
//                     <div>
//                         {/* Nearby Areas Card */}
//                         <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
//                             <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
//                                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
//                                     <Navigation className="w-5 h-5" />
//                                     Nearby Communities
//                                 </h3>
//                                 <p className="text-gray-300 text-sm mt-1">
//                                     We also serve these areas around {name}
//                                 </p>
//                             </div>

//                             <div className="p-6">
//                                 {nearbyAreas.length > 0 ? (
//                                     <div className="grid grid-cols-2 gap-3">
//                                         {nearbyAreas.map((area, idx) => (
//                                             <Link
//                                                 key={idx}
//                                                 href={`/dubai/area-we-serve/${area.slug}`}
//                                                 className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-200"
//                                             >
//                                                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                                                     <MapPin className="w-4 h-4 text-blue-600" />
//                                                 </div>
//                                                 <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
//                                                     {area.name}
//                                                 </span>
//                                                 <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 ml-auto" />
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     // Default nearby areas
//                                     <div className="grid grid-cols-2 gap-3">
//                                         {[
//                                             { name: "Bur Dubai", slug: "bur-dubai" },
//                                             { name: "Oud Metha", slug: "oud-metha" },
//                                             { name: "Al Mankhool", slug: "al-mankhool" },
//                                             { name: "Al Jafiliya", slug: "al-jafiliya" },
//                                             { name: "Dubai Healthcare City", slug: "dubai-healthcare-city" },
//                                             { name: "Zaa'beel", slug: "zaabeel" },
//                                         ].map((area, idx) => (
//                                             <Link
//                                                 key={idx}
//                                                 href={`/dubai/area-we-serve/${area.slug}`}
//                                                 className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-200"
//                                             >
//                                                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                                                     <MapPin className="w-4 h-4 text-blue-600" />
//                                                 </div>
//                                                 <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
//                                                     {area.name}
//                                                 </span>
//                                                 <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 ml-auto" />
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Service Coverage Map Info */}
//                         <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
//                                     <Car className="w-5 h-5 text-white" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-gray-900 text-lg">Full Coverage Area</h3>
//                                     <p className="text-gray-500 text-sm">Complete {name} & surrounding communities</p>
//                                 </div>
//                             </div>

//                             <div className="space-y-3">
//                                 <div className="flex items-center gap-3 text-sm">
//                                     <CheckCircle className="w-4 h-4 text-green-600" />
//                                     <span className="text-gray-600">Residential buildings & apartment complexes</span>
//                                 </div>
//                                 <div className="flex items-center gap-3 text-sm">
//                                     <CheckCircle className="w-4 h-4 text-green-600" />
//                                     <span className="text-gray-600">Commercial areas & office parking</span>
//                                 </div>
//                                 <div className="flex items-center gap-3 text-sm">
//                                     <CheckCircle className="w-4 h-4 text-green-600" />
//                                     <span className="text-gray-600">Shopping centers & malls</span>
//                                 </div>
//                                 <div className="flex items-center gap-3 text-sm">
//                                     <CheckCircle className="w-4 h-4 text-green-600" />
//                                     <span className="text-gray-600">Basement parking & roadside locations</span>
//                                 </div>
//                                 <div className="flex items-center gap-3 text-sm">
//                                     <CheckCircle className="w-4 h-4 text-green-600" />
//                                     <span className="text-gray-600">Hotels & tourist attractions</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Quick Service Card */}
//                         <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 text-center">
//                             <div className="inline-flex items-center gap-2 bg-primary/15 rounded-full px-3 py-1 mb-4">
//                                 <Phone className="w-3.5 h-3.5 text-primary" />
//                                 <span className="text-primary text-xs font-semibold">NEARBY? WE'RE READY</span>
//                             </div>
//                             <p className="text-gray-700 text-sm mb-4">
//                                 Currently in {name} or nearby areas? Our mobile mechanics can reach you within {responseTime} minutes.
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                                 <Link
//                                     href="/dubai/book-appointment"
//                                     className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
//                                 >
//                                     <Phone className="w-4 h-4" />
//                                     Book Mobile Mechanic
//                                 </Link>
//                                 <Link
//                                     href={`https://maps.google.com/?q=${area?.coordinates?.lat || 25.251},${area?.coordinates?.lng || 55.304}`}
//                                     target="_blank"
//                                     className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
//                                 >
//                                     <MapPin className="w-4 h-4" />
//                                     Get Directions
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Trust Badge */}
//                 <div className="mt-12 text-center">
//                     <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
//                         <ThumbsUp className="w-4 h-4 text-green-600" />
//                         <span className="text-sm text-gray-700">
//                             Trusted by <strong className="text-gray-900">5,000+</strong> customers across {name} and nearby areas
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* JSON-LD Schema for Local Business Coverage */}
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                     __html: JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "AutoRepair",
//                         "name": `Fix Car Dubai - ${name} Mobile Car Repair`,
//                         "description": `Professional mobile car repair and roadside assistance service covering ${name} and surrounding areas in ${city}`,
//                         "areaServed": [
//                             name,
//                             ...(nearbyAreas.length > 0 ? nearbyAreas.map(a => a.name) : [
//                                 "Bur Dubai", "Oud Metha", "Al Mankhool", "Al Jafiliya", "Dubai Healthcare City"
//                             ])
//                         ],
//                         "availableService": [
//                             {
//                                 "@type": "Service",
//                                 "name": "Emergency Roadside Assistance",
//                                 "areaServed": name
//                             },
//                             {
//                                 "@type": "Service",
//                                 "name": "Mobile Car Battery Replacement",
//                                 "areaServed": name
//                             },
//                             {
//                                 "@type": "Service",
//                                 "name": "On-Site Car Repair",
//                                 "areaServed": name
//                             }
//                         ],
//                         "openingHours": "Mo-Su 00:00-23:59",
//                         "priceRange": "$$",
//                         "address": {
//                             "@type": "PostalAddress",
//                             "addressLocality": name,
//                             "addressRegion": city,
//                             "addressCountry": "AE"
//                         }
//                     })
//                 }}
//             />
//         </section>
//     );
// }


// src/components/view/ServiceAreaComponent/NearbyLandmarks/NearbyLandmarks.jsx

"use client";

import Link from "next/link";
import {
    MapPin,
    Building,
    ShoppingBag,
    Landmark,
    Hospital,
    School,
    Car,
    Coffee,
    Hotel,
    ParkingMeter as Park,
    Train,
    Navigation,
    Clock,
    Phone,
    Star,
    ThumbsUp,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

export function NearbyLandmarks({ area }) {
    const landmarks = area?.nearbyLandmarksSection?.landmarks || [];
    const nearbyAreas = area?.nearbyAreasSection?.areas || [];
    const name = area?.name || "Al Karama";
    const city = area?.city || "Dubai";
    const responseTime = area?.hero?.stats?.find(s => s?.label === "Response Time")?.value || "15-20";

    // Landmark icon mapping
    const getLandmarkIcon = (landmarkName) => {
        const name = landmarkName?.toLowerCase() || "";
        if (name.includes("park")) return Park;
        if (name.includes("mall") || name.includes("hypermarket") || name.includes("market") || name.includes("centre")) return ShoppingBag;
        if (name.includes("metro") || name.includes("station")) return Train;
        if (name.includes("hospital") || name.includes("clinic") || name.includes("healthcare")) return Hospital;
        if (name.includes("school") || name.includes("college") || name.includes("university")) return School;
        if (name.includes("hotel")) return Hotel;
        if (name.includes("cafe") || name.includes("restaurant")) return Coffee;
        if (name.includes("street") || name.includes("road")) return Navigation;
        if (name.includes("building")) return Building;
        return Landmark;
    };

    return (
        <section className="w-full py-6 bg-gradient-to-b from-primary/5 via-white to-primary/3">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            SERVICE COVERAGE AREA
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {area?.nearbyLandmarksSection?.title ||
                            `Areas & Landmarks We Cover in ${name}`}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {area?.nearbyLandmarksSection?.subtitle ||
                            `Fast mobile mechanic and emergency roadside assistance near major ${name} landmarks.`}
                    </p>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* LEFT COLUMN - Landmarks Grid */}
                    <div>
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8 lg:mb-0">
                            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    Key Landmarks We Serve
                                </h3>
                                <p className="text-primary-foreground/80 text-sm mt-1">
                                    Fast response to all major locations in {name}
                                </p>
                            </div>

                            <div className="p-6">
                                {landmarks.length > 0 ? (
                                    <div className="space-y-4">
                                        {landmarks.map((landmark, idx) => {
                                            const IconComponent = getLandmarkIcon(landmark.name);
                                            return (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
                                                >
                                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <IconComponent className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 text-base mb-1">
                                                            {landmark.name}
                                                        </h4>
                                                        <p className="text-gray-500 text-sm leading-relaxed">
                                                            {landmark.description ||
                                                                `Emergency battery replacement and roadside assistance near ${landmark.name}, ${name}.`}
                                                        </p>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <div className="flex items-center gap-1">
                                                                <Clock className="w-3 h-3 text-primary" />
                                                                <span className="text-xs text-gray-500">
                                                                    ETA: {responseTime} min
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Star className="w-3 h-3 text-primary" />
                                                                <span className="text-xs text-gray-500">
                                                                    24/7 Service
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    // Default landmarks
                                    <div className="space-y-4">
                                        {[
                                            { name: `${name} Park`, icon: Park, desc: `Emergency battery replacement and roadside assistance near ${name} Park.` },
                                            { name: "Lulu Hypermarket", icon: ShoppingBag, desc: "Mobile mechanic and diagnostics service near Lulu Hypermarket." },
                                            { name: "ADCB Metro Station", icon: Train, desc: "Quick car battery replacement and jump start service near ADCB Metro Station." },
                                            { name: `${name} Centre`, icon: ShoppingBag, desc: "Professional on-site car repair and AC service near the centre." },
                                            { name: "Sheikh Khalifa Bin Zayed Street", icon: Navigation, desc: "Emergency roadside assistance and breakdown recovery across major roads." },
                                        ].map((landmark, idx) => {
                                            const IconComponent = landmark.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
                                                >
                                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <IconComponent className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 text-base mb-1">
                                                            {landmark.name}
                                                        </h4>
                                                        <p className="text-gray-500 text-sm leading-relaxed">
                                                            {landmark.desc}
                                                        </p>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <div className="flex items-center gap-1">
                                                                <Clock className="w-3 h-3 text-primary" />
                                                                <span className="text-xs text-gray-500">ETA: {responseTime} min</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Star className="w-3 h-3 text-primary" />
                                                                <span className="text-xs text-gray-500">24/7 Service</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Nearby Areas & Map Info */}
                    <div>
                        {/* Nearby Areas Card */}
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Navigation className="w-5 h-5" />
                                    Nearby Communities
                                </h3>
                                <p className="text-gray-300 text-sm mt-1">
                                    We also serve these areas around {name}
                                </p>
                            </div>

                            <div className="p-6">
                                {nearbyAreas.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-3">
                                        {nearbyAreas.map((area, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/dubai/area-we-serve/${area.slug}`}
                                                className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                                            >
                                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                                                    {area.name}
                                                </span>
                                                <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary ml-auto" />
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    // Default nearby areas
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { name: "Bur Dubai", slug: "bur-dubai" },
                                            { name: "Oud Metha", slug: "oud-metha" },
                                            { name: "Al Mankhool", slug: "al-mankhool" },
                                            { name: "Al Jafiliya", slug: "al-jafiliya" },
                                            { name: "Dubai Healthcare City", slug: "dubai-healthcare-city" },
                                            { name: "Zaa'beel", slug: "zaabeel" },
                                        ].map((area, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/dubai/area-we-serve/${area.slug}`}
                                                className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                                            >
                                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                                                    {area.name}
                                                </span>
                                                <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary ml-auto" />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Service Coverage Map Info */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/3 rounded-2xl p-6 border border-primary/10 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                    <Car className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Full Coverage Area</h3>
                                    <p className="text-gray-500 text-sm">Complete {name} & surrounding communities</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Residential buildings & apartment complexes</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Commercial areas & office parking</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Shopping centers & malls</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Basement parking & roadside locations</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-gray-600">Hotels & tourist attractions</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Service Card */}
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 text-center">
                            <div className="inline-flex items-center gap-2 bg-primary/15 rounded-full px-3 py-1 mb-4">
                                <Phone className="w-3.5 h-3.5 text-primary" />
                                <span className="text-primary text-xs font-semibold">NEARBY? WE&apos;RE READY</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">
                                Currently in {name} or nearby areas? Our mobile mechanics can reach you within {responseTime} minutes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/dubai/book-appointment"
                                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    Book Mobile Mechanic
                                </Link>
                                <Link
                                    href={`https://maps.google.com/?q=${area?.coordinates?.lat || 25.251},${area?.coordinates?.lng || 55.304}`}
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                                >
                                    <MapPin className="w-4 h-4" />
                                    Get Directions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2 border border-primary/10">
                        <ThumbsUp className="w-4 h-4 text-primary" />
                        <span className="text-sm text-gray-700">
                            Trusted by <strong className="text-primary">5,000+</strong> customers across {name} and nearby areas
                        </span>
                    </div>
                </div>
            </div>

            {/* JSON-LD Schema for Local Business Coverage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AutoRepair",
                        "name": `Fix Car Dubai - ${name} Mobile Car Repair`,
                        "description": `Professional mobile car repair and roadside assistance service covering ${name} and surrounding areas in ${city}`,
                        "areaServed": [
                            name,
                            ...(nearbyAreas.length > 0 ? nearbyAreas.map(a => a.name) : [
                                "Bur Dubai", "Oud Metha", "Al Mankhool", "Al Jafiliya", "Dubai Healthcare City"
                            ])
                        ],
                        "availableService": [
                            {
                                "@type": "Service",
                                "name": "Emergency Roadside Assistance",
                                "areaServed": name
                            },
                            {
                                "@type": "Service",
                                "name": "Mobile Car Battery Replacement",
                                "areaServed": name
                            },
                            {
                                "@type": "Service",
                                "name": "On-Site Car Repair",
                                "areaServed": name
                            }
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