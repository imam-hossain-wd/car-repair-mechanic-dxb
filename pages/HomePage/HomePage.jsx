import { AboutUs } from "@/components/view/AboutUs/AboutUs";
import { BatteriesWeProvide } from "@/components/view/BatteriesWeProvide/BatteriesWeProvide";
import { CarBrandsWeServe } from "@/components/view/CarBrandsWeServe/CarBrandsWeServe";
import { EmergancyServices } from "@/components/view/EmergancyServices/EmergancyServices";
import { FeaturedServices } from "@/components/view/FeaturedServices/FeaturedServices";
import { HomeHero } from "@/components/view/Hero/HomeHero";
import { QuickPriceGuide } from "@/components/view/QuickPriceGuide/QuickPriceGuide";
import { WhyChooseUs } from "@/components/view/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <EmergancyServices />
      <QuickPriceGuide />
      <FeaturedServices />
      <AboutUs />
      <WhyChooseUs />
      <CarBrandsWeServe />
      <BatteriesWeProvide />


    </div>
  );
};

export default HomePage;
