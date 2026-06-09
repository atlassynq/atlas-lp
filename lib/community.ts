export interface PublicCommunity {
  id: string;
  name: string;
  description: string | null;
  coverPhoto: string | null;
  type: "OPEN" | "CLOSED";
  _count?: { members: number; notes: number };
  creator?: { id: string; firstName: string; lastName: string; photoUrl: string | null };
}

// Base da API (ex: https://api.atlasunite.com/api). Configure NEXT_PUBLIC_API_URL no deploy.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function getJson(path: string): Promise<PublicCommunity | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.community ?? null;
  } catch {
    return null;
  }
}

export function getPublicCommunityById(id: string) {
  return getJson(`/communities/${id}/public`);
}

export function getCommunityByInviteToken(token: string) {
  return getJson(`/communities/invite/${token}`);
}
