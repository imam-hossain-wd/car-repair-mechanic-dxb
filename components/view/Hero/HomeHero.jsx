// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { Phone, MapPin, ArrowRight, Star, CheckCircle2 } from "lucide-react";
// import { SiteConfig } from "@/config/siteConfig";

// // ─── Animated ETA Tracker ──────────────────────────────────────────────────
// function ETATracker() {
//   const [eta, setEta] = useState(18);
//   const [dotPos, setDotPos] = useState(0);

//   const steps = [
//     { label: "Request received", icon: "✓" },
//     { label: "Mechanic dispatched", icon: "✓" },
//     { label: "En route to you", icon: "●" },
//     { label: "Arrival", icon: "○" },
//   ];

//   const step = dotPos < 33 ? 1 : 2;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setEta((v) => (v > 1 ? v - 1 : 18));
//       setDotPos((v) => (v < 100 ? v + 0.4 : 0));
//     }, 300);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="eta-card">
//       <div className="eta-header">
//         <span className="eta-pill">
//           <span className="pulse-dot" />
//           Live dispatch
//         </span>
//         <span className="eta-time">{eta} min away</span>
//       </div>

//       {/* Route bar */}
//       <div className="route-bar">
//         <div className="route-track">
//           <div className="route-fill" style={{ width: `${dotPos}%` }} />
//           <div className="route-dot" style={{ left: `${dotPos}%` }}>
//             <span className="car-icon">🔧</span>
//           </div>
//         </div>
//         <div className="route-labels">
//           <span>Al Karama</span>
//           <span>Your location</span>
//         </div>
//       </div>

//       {/* Steps */}
//       <div className="eta-steps">
//         {steps.map((s, i) => (
//           <div key={i} className={`eta-step ${i <= step ? "done" : ""} ${i === step ? "active" : ""}`}>
//             <span className="step-icon">{i <= step ? "✓" : "○"}</span>
//             <span className="step-label">{s.label}</span>
//           </div>
//         ))}
//       </div>

//       <div className="mechanic-row">
//         <div className="mechanic-avatar">
//           <span>SA</span>
//           <span className="online-badge" />
//         </div>
//         <div className="mechanic-info">
//           <span className="mechanic-name">Salem Al-Ahmad</span>
//           <span className="mechanic-role">Senior Mobile Mechanic · 8 yrs</span>
//           <div className="mechanic-stars">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} size={10} fill="#f59e0b" stroke="none" />
//             ))}
//             <span>4.9</span>
//           </div>
//         </div>
//         <div className="mechanic-cert">
//           <CheckCircle2 size={14} />
//           <span>Certified</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Recent Jobs Feed ──────────────────────────────────────────────────────
// const JOBS = [
//   { area: "Bur Dubai", service: "Battery replaced", mins: 12 },
//   { area: "JLT", service: "AC repair", mins: 34 },
//   { area: "DIFC", service: "Oil change", mins: 51 },
//   { area: "Downtown", service: "Brake fix", mins: 73 },
//   { area: "Deira", service: "Engine diag.", mins: 98 },
// ];

// function LiveFeed() {
//   const [idx, setIdx] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setIdx((v) => (v + 1) % JOBS.length), 3000);
//     return () => clearInterval(t);
//   }, []);
//   const job = JOBS[idx];
//   return (
//     <div className="live-feed">
//       <span className="feed-dot" />
//       <span className="feed-text">
//         <strong>{job.service}</strong> · {job.area} · {job.mins} min ago
//       </span>
//     </div>
//   );
// }

// // ─── Main Hero ─────────────────────────────────────────────────────────────
// export function HomeHero() {
//   const [visible, setVisible] = useState(false);
//   const { displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

//   useEffect(() => {
//     const raf = requestAnimationFrame(() => setVisible(true));
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   return (
//     <>
//       <style>{`
//         /* ── Layout ── */
//         .hero {
//           position: relative;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           background: #0d0d0f;
//           overflow: hidden;
//           padding: 80px 0 60px;
//         }

//         /* subtle asphalt grid */
//         .hero::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
//           background-size: 48px 48px;
//           pointer-events: none;
//         }

//         /* warm glow — the ONE decorative element */
//         .hero-glow {
//           position: absolute;
//           top: -120px;
//           right: -80px;
//           width: 560px;
//           height: 560px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(234,88,12,.18) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .hero-glow-2 {
//           position: absolute;
//           bottom: -160px;
//           left: -100px;
//           width: 400px;
//           height: 400px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(234,88,12,.08) 0%, transparent 70%);
//           pointer-events: none;
//         }

//         .hero-inner {
//           position: relative;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 24px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 48px;
//           align-items: center;
//         }

//         @media (max-width: 900px) {
//           .hero-inner { grid-template-columns: 1fr; gap: 40px; }
//           .hero { padding: 100px 0 60px; }
//         }

//         /* ── Left column ── */
//         .hero-left {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity .7s ease, transform .7s ease;
//         }
//         .hero-left.in { opacity: 1; transform: translateY(0); }

//         .hero-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: oklch(0.488 0.243 264.376);
//           border: 1px solid white;
//           border-radius: 100px;
//           padding: 6px 14px;
//           font-size: 12px;
//           font-weight: 600;
//           color: #fff;
//           letter-spacing: .06em;
//           text-transform: uppercase;
//           margin-bottom: 24px;
//         }
//         .eyebrow-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background:#fff;
//           animation: blink 1.4s ease infinite;
//         }
//         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }

//         .hero-h1 {
//           font-size: clamp(40px, 5.5vw, 68px);
//           font-weight: 900;
//           line-height: 1.0;
//           letter-spacing: -.02em;
//           color: #fff;
//           margin-bottom: 20px;
//           font-stretch: condensed;
//         }
//         .hero-h1 em {
//           font-style: normal;
//           color: oklch(0.488 0.243 264.376);
//         }
//         .hero-h1 .sub-line {
//           display: block;
//           font-size: clamp(18px, 2.5vw, 28px);
//           font-weight: 400;
//           color: rgba(255,255,255,.45);
//           letter-spacing: -.01em;
//           margin-top: 6px;
//         }

//         .hero-desc {
//           font-size: 15px;
//           color: rgba(255,255,255,.55);
//           line-height: 1.7;
//           max-width: 440px;
//           margin-bottom: 32px;
//         }

//         /* CTA buttons */
//         .cta-row {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//           margin-bottom: 36px;
//         }
//         .cta-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 28px;
//           background: #ea580c;
//           color: #fff;
//           font-size: 15px;
//           font-weight: 700;
//           border-radius: 10px;
//           text-decoration: none;
//           transition: background .2s, transform .15s;
//           white-space: nowrap;
//         }
//         .cta-primary:hover { background: #c2410c; transform: translateY(-1px); }
//         .cta-primary svg { flex-shrink: 0; }

//         .cta-whatsapp {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 24px;
//           background: rgba(255,255,255,.06);
//           color: #fff;
//           font-size: 15px;
//           font-weight: 600;
//           border: 1px solid rgba(255,255,255,.12);
//           border-radius: 10px;
//           text-decoration: none;
//           transition: background .2s, border-color .2s, transform .15s;
//           white-space: nowrap;
//         }
//         .cta-whatsapp:hover {
//           background: rgba(22,163,74,.15);
//           border-color: rgba(22,163,74,.4);
//           transform: translateY(-1px);
//         }
//         .wa-icon { width: 18px; height: 18px; fill: #4ade80; flex-shrink: 0; }

//         /* Trust bar */
//         .trust-bar {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           padding-top: 28px;
//           border-top: 1px solid rgba(255,255,255,.07);
//           flex-wrap: wrap;
//         }
//         .trust-item {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           font-size: 13px;
//           color: rgba(255,255,255,.45);
//         }
//         .trust-item strong { color: rgba(255,255,255,.8); font-weight: 700; }
//         .trust-divider { width: 1px; height: 20px; background: rgba(255,255,255,.1); }

//         /* Google rating */
//         .g-rating {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           font-size: 13px;
//           color: rgba(255,255,255,.45);
//         }
//         .g-stars { display: flex; gap: 1px; }

//         /* ── Right column ── */
//         .hero-right {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity .7s ease .2s, transform .7s ease .2s;
//         }
//         .hero-right.in { opacity: 1; transform: translateY(0); }

//         /* ── ETA Card ── */
//         .eta-card {
//           background: #18181b;
//           border: 1px solid rgba(255,255,255,.08);
//           border-radius: 20px;
//           padding: 22px;
//           margin-bottom: 12px;
//         }
//         .eta-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 18px;
//         }
//         .eta-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(234,88,12,.12);
//           border: 1px solid rgba(234,88,12,.25);
//           border-radius: 100px;
//           padding: 4px 10px;
//           font-size: 11.5px;
//           font-weight: 600;
//           color: #fb923c;
//           letter-spacing: .04em;
//         }
//         .pulse-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #fb923c;
//           animation: blink 1.4s ease infinite;
//         }
//         .eta-time {
//           font-size: 22px;
//           font-weight: 800;
//           color: #fff;
//           letter-spacing: -.02em;
//         }

//         /* Route */
//         .route-bar { margin-bottom: 16px; }
//         .route-track {
//           position: relative;
//           height: 4px;
//           background: rgba(255,255,255,.08);
//           border-radius: 2px;
//           margin-bottom: 8px;
//           overflow: visible;
//         }
//         .route-fill {
//           height: 100%;
//           background: linear-gradient(90deg, #ea580c, #fb923c);
//           border-radius: 2px;
//           transition: width .3s linear;
//         }
//         .route-dot {
//           position: absolute;
//           top: 50%;
//           transform: translate(-50%, -50%);
//           transition: left .3s linear;
//         }
//         .car-icon { font-size: 16px; line-height: 1; }
//         .route-labels {
//           display: flex;
//           justify-content: space-between;
//           font-size: 11px;
//           color: rgba(255,255,255,.3);
//         }

//         /* Steps */
//         .eta-steps {
//           display: flex;
//           flex-direction: column;
//           gap: 7px;
//           margin-bottom: 18px;
//           padding-bottom: 18px;
//           border-bottom: 1px solid rgba(255,255,255,.06);
//         }
//         .eta-step {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 12.5px;
//           color: rgba(255,255,255,.25);
//           transition: color .4s;
//         }
//         .eta-step.done { color: rgba(255,255,255,.55); }
//         .eta-step.active { color: #fff; }
//         .step-icon {
//           width: 18px;
//           height: 18px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           font-size: 10px;
//           background: rgba(255,255,255,.05);
//           flex-shrink: 0;
//         }
//         .eta-step.done .step-icon { background: rgba(234,88,12,.2); color: #fb923c; }
//         .eta-step.active .step-icon { background: #ea580c; color: #fff; }

//         /* Mechanic row */
//         .mechanic-row {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }
//         .mechanic-avatar {
//           position: relative;
//           width: 40px; height: 40px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #ea580c, #9a3412);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 13px;
//           font-weight: 700;
//           color: #fff;
//           flex-shrink: 0;
//         }
//         .online-badge {
//           position: absolute;
//           bottom: 1px; right: 1px;
//           width: 9px; height: 9px;
//           border-radius: 50%;
//           background: #22c55e;
//           border: 2px solid #18181b;
//         }
//         .mechanic-info {
//           flex: 1;
//           min-width: 0;
//         }
//         .mechanic-name { display: block; font-size: 13px; font-weight: 700; color: #fff; }
//         .mechanic-role { display: block; font-size: 11px; color: rgba(255,255,255,.35); margin-top: 1px; }
//         .mechanic-stars {
//           display: flex;
//           align-items: center;
//           gap: 2px;
//           margin-top: 3px;
//         }
//         .mechanic-stars span { font-size: 11px; color: rgba(255,255,255,.4); margin-left: 3px; }
//         .mechanic-cert {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           font-size: 11px;
//           color: #4ade80;
//           white-space: nowrap;
//         }

//         /* ── Live Feed ── */
//         .live-feed {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 16px;
//           background: #18181b;
//           border: 1px solid rgba(255,255,255,.06);
//           border-radius: 10px;
//           font-size: 12.5px;
//           color: rgba(255,255,255,.45);
//           overflow: hidden;
//         }
//         .feed-dot {
//           width: 7px; height: 7px;
//           border-radius: 50%;
//           background: #22c55e;
//           flex-shrink: 0;
//           animation: blink 2s ease infinite;
//         }
//         .feed-text strong { color: rgba(255,255,255,.8); font-weight: 600; }

//         /* ── Location badge row ── */
//         .location-row {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           margin-top: 12px;
//           font-size: 12px;
//           color: rgba(255,255,255,.35);
//         }
//         .location-row svg { color: #ea580c; flex-shrink: 0; }

//         /* ─ @media mobile ─ */
//         @media (max-width: 600px) {
//           .cta-row { flex-direction: column; }
//           .cta-primary, .cta-whatsapp { justify-content: center; }
//           .trust-bar { gap: 14px; }
//           .trust-divider { display: none; }
//         }
//       `}</style>

//       <section className="hero" aria-label="Hero — Mobile Car Repair Dubai">
//         <div className="hero-glow" aria-hidden="true" />
//         <div className="hero-glow-2" aria-hidden="true" />

//         <div className="hero-inner">

//           {/* ── Left ── */}
//           <div className={`hero-left ${visible ? "in" : ""}`}>

//             <div className="hero-eyebrow">
//               <span className="eyebrow-dot" />
//               Dubai&apos;s #1 Mobile Mechanic
//             </div>

//             <h1 className="hero-h1 text-primary">
//               <em>Broke down?</em>
//               {" "}We&apos;re{" "}
//               <em>already</em>
//               {" "}on the way.
//               <span className="sub-line">On-site car repair anywhere in Dubai</span>
//             </h1>

//             <p className="hero-desc">
//               No towing. No waiting at a garage. Our certified mechanics come to your
//               home, office, or roadside — and fix it on the spot.
//             </p>

//             <div className="cta-row">
//               <Link href={numberCallLink} className="cta-primary">
//                 <Phone size={17} strokeWidth={2.5} />
//                 Call {displayNumber}
//               </Link>
//               <Link href={whatsappCallLink} target="_blank" className="cta-whatsapp">
//                 <svg className="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//                 </svg>
//                 WhatsApp Us
//               </Link>
//             </div>

//             <div className="trust-bar">
//               <div className="trust-item">
//                 <strong>13+</strong> yrs experience
//               </div>
//               <div className="trust-divider" />
//               <div className="trust-item">
//                 <strong>5,000+</strong> cars fixed
//               </div>
//               <div className="trust-divider" />
//               <div className="g-rating">
//                 <div className="g-stars">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={12} fill="#f59e0b" stroke="none" />
//                   ))}
//                 </div>
//                 <strong style={{ color: "rgba(255,255,255,.8)", fontWeight: 700 }}>4.9</strong>
//                 <span>on Google</span>
//               </div>
//             </div>

//           </div>

//           {/* ── Right ── */}
//           <div className={`hero-right ${visible ? "in" : ""}`}>
//             <ETATracker />
//             <LiveFeed />
//             <div className="location-row">
//               <MapPin size={13} />
//               Serving all Dubai zones — JBR, DIFC, Downtown, Deira, Karama, JLT & more
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// components/HomeHero.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Wrench,
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Truck,
  Battery,
  Wind,
  Car,
  Zap,
  Navigation,
  Headphones,
  Activity
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);

  const { displayNumber, numberCallLink, whatsappCallLink, location, services } = SiteConfig;

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const stats = [
    { value: "13+", label: "Years", icon: Award },
    { value: "5000+", label: "Customers", icon: Star },
    { value: "24/7", label: "Emergency", icon: Clock },
    { value: "15min", label: "Response", icon: Truck },
  ];

  const features = [
    { icon: CheckCircle, text: "Certified Mechanics" },
    { icon: CheckCircle, text: "On-Site Service" },
    { icon: CheckCircle, text: "Best Price" },
    { icon: CheckCircle, text: "Genuine Parts" },
  ];

  // Professional service checklist
  const serviceChecklist = [
    { icon: Clock, text: "24/7 Emergency Car Repair", highlight: true },
    { icon: Zap, text: "15–30 Minute Response Time", highlight: true },
    { icon: Navigation, text: "Mobile Mechanic at Your Location", highlight: false },
    { icon: Battery, text: "Battery Replacement & Jump Start", highlight: false },
    { icon: Car, text: "Roadside Assistance Across Dubai", highlight: false },
    { icon: Wind, text: "Car AC & Electrical Repairs", highlight: false },
    { icon: Wrench, text: "Engine Diagnostics On-Site", highlight: false },
  ];

  const popularServices = services?.slice(0, 4) || [
    { name: "Battery Replacement", slug: "battery-replacement" },
    { name: "AC Repair", slug: "ac-repair" },
    { name: "Oil Change", slug: "oil-change" },
    { name: "Brake Repair", slug: "brake-repair" },
  ];

  return (
    <section className="relative py-10 h-auto flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      {/* Simplified Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

        {/* Floating Icons - Simplified */}
        <div className="absolute top-10 left-10 animate-float opacity-30">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float-delayed opacity-30">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Left Column - Content */}
          <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
              <span className="text-xs font-medium text-white">24/7 Emergency Service</span>
            </div>

{/* Mobile Mechanic Dubai | 24/7 Car Repair at Your Doorstep */}
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Mobile Mechanic Dubai |</span>
              <br />
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                24/7 Car Repair 
              </span>
              <br />
              <span className="text-white">at Your Doorstep</span>
            </h1>

            {/* Description */}
            <p className="text-sm text-white max-w-lg">
              {SiteConfig.description || "Professional mobile car repair service anywhere, anytime in Dubai."}
            </p>

            {/* Features Grid - Compact */}
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <feature.icon className="h-3.5 w-3.5 text-primary" />
                  <span className="text-sm text-white">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={numberCallLink}
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call {displayNumber}</span>
              </Link>

              <Link
                href={whatsappCallLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                <span>WhatsApp</span>
              </Link>
            </div>

            {/* Popular Services */}
            <div className="pt-2">
              <p className="text-sm text-white mb-2">Popular Services:</p>
              <div className="flex flex-wrap gap-1.5">
                {popularServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/dubai/services/${service.slug}`}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 hover:bg-primary/20 rounded-md text-xs text-white hover:text-white transition-all duration-300 group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Service Checklist */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}>

            {/* Service Checklist Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white overflow-hidden">
              <div className="bg-primary/10 px-3 py-2 border-b border-white">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-white" />
                  <h3 className="text-lg font-semibold text-white">Emergancy Service We Offer</h3>
                  <span className="text-md text-white ml-auto">24/7 Available</span>
                </div>
              </div>
              <div className="p-3">
                <div className="space-y-2">
                  {serviceChecklist.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2.5 group hover:translate-x-1 transition-all duration-200 text-white 
                          }`}
                      >
                        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary text-white`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        {/* <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${item.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-white/10 text-gray-400"
                          } group-hover:bg-primary/30 transition-all`}>
                          <Icon className="h-2.5 w-2.5" />
                        </div> */}
                        <span className={`text-md ${item.highlight ? "font-medium" : "font-normal"}`}>
                          {item.text}
                        </span>
                        {item.highlight && (
                          <span className="ml-auto">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-4 gap-2">
  {stats.map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div
        key={index}
        className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-2.5 text-center hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-white/10 flex items-center justify-around"
      >
        <Icon className="h-5 w-5 text-white mb-1" />

       <div classname="flex flex-col justify-center items-center -ml-3">
         <div className="text-lg font-bold text-white leading-none">
          {stat.value}
        </div>

        <div className="text-md  text-white leading-tight mt-0.5">
          {stat.label}
        </div>
       </div>
      </div>
    );
  })}
</div>



            {/* Quick Service Note */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-2.5 text-center border border-white">
              <p className="text-sm text-gray-300">
                ⚡ No towing fees • Free inspection • Warranty on all repairs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 text-gray-900" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
