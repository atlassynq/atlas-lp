"use client";

const APP_STORE_URL = "https://apps.apple.com/app/atlas-unite/id0000000000";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.atlassynk.atlasunite";

export function OpenInApp({ appPath, label = "Abrir no app" }: { appPath: string; label?: string }) {
  const openApp = () => {
    // Tenta abrir via esquema custom (app instalado). Sem app, nada acontece e o
    // usuário usa os botões das lojas abaixo.
    window.location.href = `atlasapp://${appPath}`;
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <button
        onClick={openApp}
        className="w-full rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] py-4 font-semibold text-white shadow-lg shadow-[#FF6B35]/25 transition hover:opacity-90 active:scale-[0.98]"
      >
        {label}
      </button>
      <div className="flex gap-3">
        <a
          href={APP_STORE_URL}
          className="flex-1 rounded-2xl border border-white/15 py-3 text-center text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5"
        >
          App Store
        </a>
        <a
          href={PLAY_STORE_URL}
          className="flex-1 rounded-2xl border border-white/15 py-3 text-center text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5"
        >
          Google Play
        </a>
      </div>
    </div>
  );
}
