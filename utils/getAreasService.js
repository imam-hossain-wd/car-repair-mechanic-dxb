// import { services } from "@/data/services/services";
// import { getServiceAreasNameSlug } from "./getServiceAreasNameSlug";

import { serviceAreas } from "@/config/siteConfig";
import { services } from "@/data/services/services";


// export const serviceAreas = getServiceAreasNameSlug();

// const serviceAreasName = serviceAreas.slice(0,13).map(area => area.name)


// const getAreasService = () => {
//   return services.map(service => ({
//     name: service.name,
//     icon: service.service_image,
//   }));
// };

// export const areaServices = getAreasService();


const getServiceAreaWithServices = () => {
  return services.flatMap((service) =>
    serviceAreas.map((area) => ({
    //   serviceName: service.name +" "+area.name,
    serviceName: `${service.name.replace(/ Dubai$/, "")} ${area.name}`,
      serviceIcon: service.service_image,
    }))
  );
};

// const areaServices = getServiceAreaWithServices()

// console.log(areaServices, 'areaServices')
// console.log(services.length, 'services')


const getAreaService = () => {
  return services.map(service => ({
    name: service.name,
    icon: service.service_image
  }))
};

export const areaServices= getAreaService()


















