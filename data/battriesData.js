import { Zap, Shield, Truck, Clock } from "lucide-react";

export const batteriesData = {
  premiumBrands: [
    { name: "Bosch", origin: "Germany", warranty: "2 Years", type: "Premium", popular: true },
    { name: "Varta", origin: "Germany", warranty: "2 Years", type: "Premium", popular: true },
    { name: "Exide", origin: "USA", warranty: "2 Years", type: "Premium", popular: true },
    { name: "ACDelco", origin: "USA", warranty: "2 Years", type: "Premium", popular: false },
    { name: "Delkor", origin: "South Korea", warranty: "2 Years", type: "Premium", popular: false }
  ],
  standardBrands: [
    { name: "Amaron", origin: "India", warranty: "18 Months", type: "Standard", popular: true },
    { name: "SF Sonic", origin: "India", warranty: "18 Months", type: "Standard", popular: true },
    { name: "Luminous", origin: "India", warranty: "18 Months", type: "Standard", popular: false },
    { name: "Rocket", origin: "South Korea", warranty: "18 Months", type: "Standard", popular: false }
  ],
  batteryTypes: [
    { name: "Maintenance Free", description: "No water topping required", icon: Zap },
    { name: "AGM Technology", description: "For start-stop vehicles", icon: Shield },
    { name: "Deep Cycle", description: "For heavy duty use", icon: Truck },
    { name: "Calcium Technology", description: "Longer lifespan", icon: Clock }
  ],
  vehicleCompatibility: [
    "Sedans", "SUVs", "4x4 Vehicles", "Luxury Cars", 
    "Japanese Cars", "German Cars", "American Cars", "Korean Cars",
    "Commercial Vehicles", "Electric Vehicles (12V)"
  ]
};