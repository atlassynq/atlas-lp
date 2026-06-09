import type { Metadata } from "next";
import { CommunityHero } from "@/components/community-hero";
import { getPublicCommunityById } from "@/lib/community";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const community = await getPublicCommunityById(id);
  if (!community) {
    return { title: "Comunidade — Atlas Unite" };
  }
  const title = `${community.name} — Atlas Unite`;
  const description =
    community.description || "Participe desta comunidade no Atlas Unite.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: community.coverPhoto ? [{ url: community.coverPhoto }] : undefined,
    },
  };
}

export default async function CommunitySharePage({ params }: Params) {
  const { id } = await params;
  const community = await getPublicCommunityById(id);

  return (
    <CommunityHero
      community={community}
      appPath={`community/${id}`}
      ctaLabel="Ver no app"
    />
  );
}
