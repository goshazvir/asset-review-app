'use client';

import useSWR from 'swr';
import { fetchAssets } from '@/services/api/client';
import type { Asset } from '../types';

export function useAssets() {
  const { data, error, isLoading, mutate } = useSWR<Asset[]>(
    '/api/assets',
    fetchAssets
  );

  return {
    assets: data ?? [],
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}
