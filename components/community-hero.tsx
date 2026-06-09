import { OpenInApp } from "@/components/open-in-app";
import type { PublicCommunity } from "@/lib/community";

type Props = {
  community: PublicCommunity | null;
  /** Texto do chip acima do nome (ex.: "VOCÊ FOI CONVIDADO"). Omitido se vazio. */
  badge?: string;
  /** Caminho aberto no app via deep link (ex.: community/invite/<token>). */
  appPath: string;
  /** Rótulo do botão principal. */
  ctaLabel?: string;
  fallbackTitle?: string;
};

export function CommunityHero({
  community,
  badge,
  appPath,
  ctaLabel = "Abrir no app",
  fallbackTitle = "Comunidade no Atlas Unite",
}: Props) {
  const cover = community?.coverPhoto ?? null;
  const memberCount = community?._count?.members;
  const isClosed = community?.type === "CLOSED";

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
        {/* Hero com a capa da comunidade (ou gradiente laranja de fallback) */}
        <div className="relative h-40 w-full">
          {cover ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover}
                alt=""
                aria-hidden
                className="h-full w-full scale-110 object-cover blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0a0a0a]" />
            </>
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A]" />
          )}
        </div>

        <div className="flex flex-col items-center px-6 pb-8 text-center">
          {/* Avatar sobreposto ao hero */}
          <div className="-mt-14 mb-5 h-28 w-28 overflow-hidden rounded-3xl bg-white/5 shadow-xl shadow-black/40 ring-4 ring-[#0a0a0a]">
            {cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={cover} alt={community?.name ?? ""} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] text-4xl">
                👥
              </div>
            )}
          </div>

          {badge && (
            <span className="mb-3 rounded-full bg-[#FF6B35]/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#FF8B5A]">
              {badge}
            </span>
          )}

          <h1 className="text-2xl font-bold text-white">
            {community?.name || fallbackTitle}
          </h1>

          {(memberCount !== undefined || community) && (
            <p className="mt-1.5 text-sm text-white/60">
              {memberCount !== undefined && (
                <>
                  {memberCount} {memberCount === 1 ? "membro" : "membros"}
                  {community?.type ? " · " : ""}
                </>
              )}
              {community?.type && (isClosed ? "Privada" : "Aberta")}
            </p>
          )}

          {community?.description && (
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {community.description}
            </p>
          )}

          <div className="mt-7 flex w-full justify-center">
            <OpenInApp appPath={appPath} label={ctaLabel} />
          </div>
        </div>
      </div>
    </main>
  );
}
