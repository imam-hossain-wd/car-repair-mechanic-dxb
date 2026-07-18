import { AreaOverview } from "@/components/view/ServiceAreaComponent/AreaOverview";
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
        </div>
    );
}