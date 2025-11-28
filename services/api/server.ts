import type { Asset, Comment, AssetStatus } from '@/features/assets/types';

const API_URL = process.env.API_URL;

export async function fetchAssets(status?: AssetStatus | 'ALL'): Promise<Asset[]> {
  const url = `${API_URL}/api/assets`;

  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to fetch assets: ${response.status}`);
  }

  const assets: Asset[] = await response.json();

  if (status && status !== 'ALL') {
    return assets.filter((asset) => asset.status === status);
  }

  return assets;
}

export async function fetchAsset(id: number): Promise<Asset | null> {
  const url = `${API_URL}/api/assets`;

  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to fetch assets: ${response.status}`);
  }

  const assets: Asset[] = await response.json();
  return assets.find((asset) => asset.id === id) || null;
}

export async function fetchComments(assetId: number): Promise<Comment[]> {
  const url = `${API_URL}/api/assets/${assetId}/comments`;

  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to fetch comments: ${response.status}`);
  }

  return response.json();
}

export async function fetchCommentCounts(assetIds: number[]): Promise<Record<number, number>> {
  const counts: Record<number, number> = {};

  await Promise.all(
    assetIds.map(async (id) => {
      try {
        const comments = await fetchComments(id);
        counts[id] = comments.length;
      } catch {
        counts[id] = 0;
      }
    })
  );

  return counts;
}
