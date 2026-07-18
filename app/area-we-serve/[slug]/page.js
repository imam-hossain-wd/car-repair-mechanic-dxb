import { serviceAeas } from "@/data/servicearea";
import AreaWeServeDetailPage from "@/pages/AreaWeServePage/AreaWeServeDetailPage";
import { notFound } from "next/navigation";



export default async function AreaWeServeDetail({
  params,
}) {

  const { slug } = await params;
  const area = serviceAeas.find(
    (item) => item.slug === slug
  );

  if (!area) {
    notFound();
  }

  return (
    <AreaWeServeDetailPage
      area={area}
    />
  );
}