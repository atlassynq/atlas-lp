import type { Metadata } from "next";
import { CommunityHero } from "@/components/community-hero";
import { getCommunityByInviteToken } from "@/lib/community";

type Params = { params: Promise<{ token: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { token } = await params;
  const community = await getCommunityByInviteToken(token);
  if (!community) {
    return { title: "Convite — Atlas Unite" };
  }
  const title = `Convite para ${community.name} — Atlas Unite`;
  const description =
    community.description || `Você foi convidado para ${community.name} no Atlas Unite.`;
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

export default async function CommunityInvitePage({ params }: Params) {
  const { token } = await params;
  const community = await getCommunityByInviteToken(token);

  return (
    <CommunityHero
      community={community}
      badge="VOCÊ FOI CONVIDADO"
      appPath={`community/invite/${token}`}
      ctaLabel="Aceitar convite no app"
    />
  );
}
