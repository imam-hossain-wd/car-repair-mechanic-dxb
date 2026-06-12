// app/dubai/services/page.jsx
import { ServiceCard } from "@/components/shared/ServiceCard/ServiceCard";
import { fullServices } from "@/config/siteConfig";
// import { fullServices } from "@/config/site";
// import { ServiceCard } from "@/components/ServiceCard";

export const metadata = {
  title: "Our Car Repair Services - Professional Auto Care in Dubai",
  description: "Expert car repair services including battery replacement, AC repair, oil change, brake service, engine diagnostics, and more. 24/7 mobile service in Dubai.",
};

export default function ServicesPage() {
  const featuredServices = fullServices.filter(s => s.featured);
  const otherServices = fullServices.filter(s => !s.featured);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Professional Car Repair Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive automotive solutions delivered to your doorstep in Dubai. 
            24/7 emergency service available.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Services */}
          {featuredServices.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-center mb-8">
                Featured Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {featuredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} featured={true} />
                ))}
              </div>
            </>
          )}
          
          {/* All Services */}
          <h2 className="text-3xl font-bold text-center mb-8">
            All Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Car Repair?</h2>
          <p className="text-lg mb-8">We&apos;re available 24/7 for all your automotive needs</p>
          <a
            href="tel:+971568703512"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Call Now: +971 56 870 3512
          </a>
        </div>
      </section>
    </div>
  );
}