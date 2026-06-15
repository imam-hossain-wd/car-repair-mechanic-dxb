import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";
import { MobileFloatingButtons } from "@/components/shared/FloatingButtons/FloatingButtons";

// import { FloatingButtons } from "@/components/shared/FloatingButtons/FloatingButtons";

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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar />
          {children}
          <MobileFloatingButtons />
          <Footer />
        </main>

      </body>
    </html>
  );
}
