'use client';

import useSWR from 'swr';
import { fetchAssetById } from '@/services/api/client';
import type { Asset } from '@/features/assets/types';

export function useAsset(assetId: number) {
  const { data, error, isLoading, mutate } = useSWR<Asset | undefined>(
    assetId ? `/api/assets/${assetId}` : null,
    () => fetchAssetById(assetId)
  );

  return {
    asset: data,
    isLoading,
    isError: !!error,
    error,
    notFound: !isLoading && !error && !data,
    mutate,
  };
}
