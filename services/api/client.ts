import type { Asset, Comment } from '@/features/assets/types';
import { API_BASE_URL } from '@/config';

export async function fetchAssets(): Promise<Asset[]> {
  const response = await fetch(`${API_BASE_URL}/assets`);

  if (!response.ok) {
    throw new Error(`Failed to fetch assets: ${response.status}`);
  }

  return response.json();
}

export async function fetchAssetById(id: number): Promise<Asset | undefined> {
  const assets = await fetchAssets();
  return assets.find((asset) => asset.id === id);
}

export async function fetchComments(assetId: number): Promise<Comment[]> {
  const response = await fetch(`${API_BASE_URL}/assets/${assetId}/comments`);

  if (!response.ok) {
    throw new Error(`Failed to fetch comments: ${response.status}`);
  }

  return response.json();
}

export async function postComment(
  assetId: number,
  comment: string
): Promise<Comment> {
  const response = await fetch(`${API_BASE_URL}/assets/${assetId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment }),
  });

  if (!response.ok) {
    throw new Error(`Failed to post comment: ${response.status}`);
  }

  return response.json();
}

export async function updateAssetStatus(
  assetId: number,
  status: string
): Promise<Asset> {
  const response = await fetch(`${API_BASE_URL}/assets/${assetId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update status: ${response.status}`);
  }

  return response.json();
}
