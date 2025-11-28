'use client';

import { useState } from 'react';
import { useSWRConfig } from 'swr';
import { updateAssetStatus } from '@/services/api/client';
import type { Asset, AssetStatus } from '@/features/assets/types';

export function useUpdateStatus(assetId: number) {
  const { mutate } = useSWRConfig();
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const update = async (newStatus: AssetStatus): Promise<Asset | null> => {
    setIsUpdating(true);
    setError(null);

    try {
      const updatedAsset = await updateAssetStatus(assetId, newStatus);

      await Promise.all([
        mutate(`/api/assets/${assetId}`),
        mutate('/api/assets'),
      ]);

      return updatedAsset;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update status'));
      return null;
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    update,
    isUpdating,
    error,
  };
}
