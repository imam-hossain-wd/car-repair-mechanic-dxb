// components/ServiceCard.jsx
import Link from "next/link";
import { 
  Battery, 
  Wind, 
  Droplet, 
  CircleStop, 
  Activity, 
  Circle,
  Zap,
  Power,
  Car,
  Thermometer,
  Settings,
  CheckSquare,
  Clock,
  DollarSign,
  Shield
} from "lucide-react";

// Map service slugs to icons
const iconMap = {
  "battery-replacement": Battery,
  "ac-repair-service": Wind,
  "oil-change": Droplet,
  "brake-repair": CircleStop,
  "engine-diagnostics": Activity,
  "tire-replacement": Circle,
  "alternator-repair": Zap,
  "starter-motor-repair": Power,
  "suspension-repair": Car,
  "cooling-system-repair": Thermometer,
  "transmission-service": Settings,
  "full-car-maintenance": CheckSquare
};

export const ServiceCard = ({ service, featured = false }) => {
  const Icon = iconMap[service.slug] || Settings;
  
  return (
    <div className={`
      group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
      transition-all duration-300 hover:shadow-xl
      ${featured ? 'border-2 border-primary shadow-lg' : 'border border-gray-200 dark:border-gray-700'}
    `}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        </div>
      )}
      
      {/* Popular Badge */}
      {service.popular && !featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </div>
        </div>
      )}
      
      {/* Emergency Badge */}
      {service.emergency && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            24/7 Emergency
          </div>
        </div>
      )}
      
      <div className="p-6">
        {/* Icon */}
        <div className="mb-4">
          <div className="inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {service.name}
        </h3>
        
        {/* Short Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {service.shortDescription}
        </p>
        
        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <Clock className="h-4 w-4" />
              <span>Duration</span>
            </span>
            <span className="font-medium">{service.duration}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <DollarSign className="h-4 w-4" />
              <span>Price</span>
            </span>
            <span className="font-bold text-primary">{service.price}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <Shield className="h-4 w-4" />
              <span>Warranty</span>
            </span>
            <span className="font-medium">{service.warranty}</span>
          </div>
        </div>
        
        {/* Button */}
        <Link
          href={`/dubai/services/${service.slug}`}
          className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};