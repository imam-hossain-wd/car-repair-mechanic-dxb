// // components/FloatingButtons.jsx
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Phone, MessageCircle, ArrowUp, X, ChevronRight, LucideBanknoteArrowUp, MessageSquare } from "lucide-react";
// import { SiteConfig } from "@/config/siteConfig";
// import { Button } from "@/components/ui/button";

// export function FloatingButtons() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const { displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

//   // Check if mobile view
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Show scroll button when scrolled down
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes pulse-ring {
//           0% { transform: scale(0.8); opacity: 0.5; }
//           100% { transform: scale(1.4); opacity: 0; }
//         }
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(100px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(100px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-slide-right {
//           animation: slideInRight 0.4s ease-out forwards;
//         }
//         .animate-slide-up {
//           animation: slideInUp 0.4s ease-out forwards;
//         }
//         .pulse-ring::before {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 100%;
//           height: 100%;
//           background: rgba(34, 197, 94, 0.6);
//           border-radius: 50%;
//           transform: translate(-50%, -50%) scale(0.8);
//           animation: pulse-ring 1.5s ease-out infinite;
//         }
//       `}</style>

//       {/* Floating Buttons Container */}
//       <div className="fixed z-50">
//         {/* Mobile Bottom Center Layout */}
//         {isMobile && (
//           <div className="fixed bottom-6 left-1/2 -translate-x-1/2 animate-slide-up">
//             <div className="flex items-center gap-3 bg-black/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-2xl border border-white/10">
//               {/* Call Button */}
//               <Link
//                 href={numberCallLink}
//                 className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
//                 aria-label="Call Now"
//               >
//                 <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                 <Phone className="h-5 w-5 text-white" />
//                 <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                   Call Now
//                 </span>
//               </Link>

//               {/* WhatsApp Button */}
//               <div className="grid grid-cols-2 gap-3">
//             <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => {
//                     window?.open(SiteConfig.whatsappLink, "_blank");
//                     setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full"
//             >
//                 <MessageSquare className="h-4 w-4 mr-2" />
//                 WhatsApp
//             </Button>
//             <Button
//                 size="sm"
//                 onClick={() => {
//                     window?.open(SiteConfig.callLink, "_blank");
//                     setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full"
//             >
//                 <Phone className="h-4 w-4 mr-2" />
//                 Call Now
//             </Button>
//         </div>

//               {/* Scroll to Top Button (Mobile) */}
//               {/* {showScrollTop && (
//                 <button
//                   onClick={scrollToTop}
//                   className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
//                   aria-label="Scroll to top"
//                 >
//                   <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                   <LucideBanknoteArrowUp className="h-5 w-5 text-white" />
//                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     Top
//                   </span>
//                 </button>
//               )} */}
//             </div>
//           </div>
//         )}

//         {/* Desktop Bottom Right Layout */}
//         {!isMobile && (
//           <div className="fixed bottom-8 right-8 space-y-4 animate-slide-right">
//             {/* Call Button */}
//             <Link
//               href={numberCallLink}
//               className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
//               aria-label="Call Now"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {/* Pulse Animation Ring */}
//               <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>

//               {/* Button Content */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <Phone className="h-6 w-6 text-white relative z-10" />

//               {/* Tooltip */}
//               <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
//                 Call {displayNumber}
//                 <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
//               </span>
//             </Link>

//             {/* WhatsApp Button */}
//             <Link
//               href={whatsappCallLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-600 to-green-700 rounded-full hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl animate-float"
//               aria-label="WhatsApp Us"
//             >
//               <div className="absolute inset-0 rounded-full bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//               <MessageCircle className="h-6 w-6 text-white" />

//               {/* Tooltip */}
//               <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
//                 WhatsApp Us
//                 <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
//               </span>
//             </Link>

//             {/* Scroll to Top Button */}
//             {showScrollTop && (
//               <button
//                 onClick={scrollToTop}
//                 className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-primary/80 rounded-full hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
//                 aria-label="Scroll to top"
//               >
//                 <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                 <LucideBanknoteArrowUp className="h-6 w-6 text-white" />

//                 {/* Tooltip */}
//                 <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
//                   Back to Top
//                   <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
//                 </span>
//               </button>
//             )}
//           </div>
//         )}

//         {/* Desktop Top Right Scroll Button (Alternative Position) */}
//         {!isMobile && showScrollTop && (
//           <div className="fixed top-24 right-8 animate-slide-right">
//             <button
//               onClick={scrollToTop}
//               className="group relative flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg"
//               aria-label="Scroll to top"
//             >
//               <LucideBanknoteArrowUp className="h-4 w-4 text-white group-hover:rotate-0 transition-transform duration-300" />
//             </button>
//           </div>
//         )}
//       </div>

//       {/* SEO Structured Data for Contact Info */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             "name": SiteConfig.brandName,
//             "telephone": displayNumber,
//             "contactPoint": [
//               {
//                 "@type": "ContactPoint",
//                 "telephone": displayNumber,
//                 "contactType": "customer service",
//                 "availableLanguage": ["English", "Arabic", "Urdu", "Hindi"]
//               },
//               {
//                 "@type": "ContactPoint",
//                 "telephone": displayNumber,
//                 "contactType": "emergency",
//                 "availableLanguage": ["English", "Arabic"]
//               }
//             ],
//             "sameAs": [
//               "https://wa.me/" + displayNumber.replace(/[^0-9]/g, '')
//             ]
//           })
//         }}
//       />
//     </>
//   );
// }

// // "use client"

// import { Button } from '@/components/ui/button';
// import { MessageSquare, Phone } from 'lucide-react';
// import React from 'react'

// export default function FloatingButtons() {
//     return (
//     <div className="p-6 border-t">
//         <div className="grid grid-cols-2 gap-3">
//             <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => {
//                     window?.open(SiteConfig.whatsappLink, "_blank");
//                     setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full"
//             >
//                 <MessageSquare className="h-4 w-4 mr-2" />
//                 WhatsApp
//             </Button>
//             <Button
//                 size="sm"
//                 onClick={() => {
//                     window?.open(SiteConfig.callLink, "_blank");
//                     setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full"
//             >
//                 <Phone className="h-4 w-4 mr-2" />
//                 Call Now
//             </Button>
//         </div>
//     </div>
//     )
// }


// components/MobileFloatingButtons.jsx
"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MobileFloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { numberCallLink, whatsappCallLink } = SiteConfig;

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="w-full fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
            <div className="w-full flex justify-center items-center gap-5">
                {/* WhatsApp Button */}

                <Link href={whatsappCallLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <Button className="flex items-center rounded justify-center gap-2 py-5 px-6  bg-green-600 shadow-lg text-lg border border-white">
                        <MessageCircle className="h-8 w-8 text-white" />
                        Whatsapp
                    </Button>
                </Link>


                {/* Call Button */}
                <Link
                    href={numberCallLink}
                    className=""
                    aria-label="Call Now"
                >
                    <Button className="flex items-center rounded justify-center py-5 px-6 bg-primary shadow-lg text-lg border gap-2 border-white">
                        <Phone className="h-8 w-8 text-white" />

                        Call Now
                    </Button>
                </Link>

                {/* Scroll to Top Button (conditional) */}
                {/* {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 active:scale-95 shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 text-white" />
          </button>
        )} */}
            </div>
        </div>
    );
}