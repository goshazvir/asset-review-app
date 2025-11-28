'use client';

import useSWR from 'swr';
import { fetchComments } from '@/services/api/client';
import type { Comment } from '@/features/assets/types';

export function useComments(assetId: number) {
  const { data, error, isLoading, mutate } = useSWR<Comment[]>(
    assetId ? `/api/assets/${assetId}/comments` : null,
    () => fetchComments(assetId)
  );

  return {
    comments: data ?? [],
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}
