import { OpenInApp } from "@/components/open-in-app";
import type { PublicCommunity } from "@/lib/community";

type Props = {
  community: PublicCommunity | null;
  /** Texto do rótulo acima do nome (ex.: "Você foi convidado"). Omitido se vazio. */
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
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-20">
      {/* Glow ambiente derivado da capa — profundidade sutil, sem poluir */}
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cover}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-20 blur-[120px]"
        />
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B35] opacity-15 blur-[120px]"
        />
      )}

      <div className="flex w-full max-w-sm flex-col items-center text-center">
        {/* Avatar — limpo, sem faixa por cima */}
        <div className="size-24 overflow-hidden rounded-[28px] bg-white/5 shadow-xl shadow-black/30 ring-1 ring-white/10">
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover} alt={community?.name ?? ""} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] text-3xl">
              👥
            </div>
          )}
        </div>

        {badge && (
          <span className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8B5A]">
            {badge}
          </span>
        )}

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white">
          {community?.name || fallbackTitle}
        </h1>

        {memberCount !== undefined && (
          <p className="mt-2 text-sm text-white/50">
            {memberCount} {memberCount === 1 ? "membro" : "membros"}
            {community?.type ? ` · ${isClosed ? "Privada" : "Aberta"}` : ""}
          </p>
        )}

        {community?.description && (
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-balance text-white/60">
            {community.description}
          </p>
        )}

        <div className="mt-9 flex w-full justify-center">
          <OpenInApp appPath={appPath} label={ctaLabel} />
        </div>
      </div>
    </main>
  );
}
