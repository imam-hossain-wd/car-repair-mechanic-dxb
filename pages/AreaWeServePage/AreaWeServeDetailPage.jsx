import { AreaOverview } from "@/components/view/ServiceAreaComponent/AreaOverview";
import { AreaServicesGrid } from "@/components/view/ServiceAreaComponent/AreaServicesGrid";
import { EmergencyContent } from "@/components/view/ServiceAreaComponent/EmergencyContent";
import { ServiceAreaHomeBanner } from "@/components/view/ServiceAreaComponent/ServiceAreaHomeBanner";


export default function AreaWeServeDetailPage({
    area,
}) {

    return (
        <div className="">
            <ServiceAreaHomeBanner
                area={area}
            />
            <AreaOverview
                area={area}
            />

            <EmergencyContent
                area={area}
            />
            <AreaServicesGrid
                area={area}
            />
        </div>
    );
}