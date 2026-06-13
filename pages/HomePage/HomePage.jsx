import { EmergancyServices } from "@/components/view/EmergancyServices/EmergancyServices";
import { FeaturedServices } from "@/components/view/FeaturedServices/FeaturedServices";
import { HomeHero } from "@/components/view/Hero/HomeHero";
import { QuickPriceGuide } from "@/components/view/QuickPriceGuide/QuickPriceGuide";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <EmergancyServices />
      <QuickPriceGuide />
      <FeaturedServices />
    </div>
  );
};

export default HomePage;
