
import { notFound } from "next/navigation";
import { creators } from "../../../../features/brands/data/creatorsData";
import CreatorProfile from "../../../../features/brands/components/creator-profile/CreatorProfile";

export default async function CreatorProfilePage({ params }) {
  const { slug } = await params;

  // Find the creator using the URL slug
  const creator = creators.find((item) => item.slug === slug);

  // Show 404 page if creator does not exist
  if (!creator) {
    notFound();
  }

  return <CreatorProfile creator={creator} />;
}
