import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";
import { MobileFloatingButtons } from "@/components/shared/FloatingButtons/FloatingButtons";
import OrganizationSchema from "@/seo/schemas/OrganizationSchema";
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Professional Car Repair Services in Dubai | Expert Mechanics at Your Service",
  description: "Looking for reliable car repair services in Dubai? Our expert mechanics provide top-notch repairs, maintenance, and diagnostics to keep your vehicle running smoothly. Contact us today for quality service and customer satisfaction.",
  verification: {
    google: "oQfV7oG_3g6xnHFtzkU6mp5ahAKnJhCbLir0xMnaadM",
  },
};




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="p:domain_verify" content="f8adcdf39af61a7491fd4fc6379fa955" />
      </head>
      <body className="min-h-full flex flex-col">
        <main>
          <SpeedInsights />
          <OrganizationSchema />
          <Navbar />
          {children}
          <MobileFloatingButtons />
          <Footer />
        </main>

      </body>
    </html>
  );
}
