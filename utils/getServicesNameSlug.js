import { services } from "@/data/services/services";


export const getServicesNameSlug = () => {
  return services.map(area => ({
    name: area.name,
    slug: area.slug
  }));
};