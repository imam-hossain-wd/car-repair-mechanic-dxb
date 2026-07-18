import { ServiceCard } from "@/components/shared/ServiceCard/ServiceCard";
import { services } from "@/data/services/services";


export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Premium <span className="text-primary">Car Repair</span> Services
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Professional automotive solutions delivered to your doorstep
          </p>
        </div>
      </section>

      {/* Featured Services */}
      {services?.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dubai&lsquo;s Most Popular Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services?.map((service) => (
              <ServiceCard key={service?.id} service={service} featured={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}