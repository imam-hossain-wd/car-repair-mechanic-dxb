import { AboutUs } from "@/components/view/AboutUs/AboutUs";
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
    </div>
  );
};

export default HomePage;
