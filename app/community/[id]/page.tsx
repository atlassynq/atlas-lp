import type { Metadata } from "next";
import { OpenInApp } from "@/components/open-in-app";
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
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <div className="h-28 w-28 overflow-hidden rounded-3xl bg-white/5">
          {community?.coverPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={community.coverPhoto} alt={community.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#6000e5] text-4xl">
              👥
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">
            {community?.name || "Comunidade no Atlas Unite"}
          </h1>
          {community?._count && (
            <p className="text-sm text-white/60">
              {community._count.members} {community._count.members === 1 ? "membro" : "membros"}
              {community.type === "CLOSED" ? " · Privada" : " · Aberta"}
            </p>
          )}
          {community?.description && (
            <p className="text-white/70">{community.description}</p>
          )}
        </div>

        <OpenInApp appPath={`community/${id}`} />
      </div>
    </main>
  );
}
