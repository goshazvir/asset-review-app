'use client';

import useSWR from 'swr';
import { fetchComments } from '@/services/api/client';

async function fetchCommentCounts(assetIds: number[]): Promise<Record<number, number>> {
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

export function useCommentCounts(assetIds: number[]) {
  const key = assetIds.length > 0 ? ['comment-counts', ...assetIds.sort()] : null;

  const { data, error, isLoading } = useSWR(
    key,
    () => fetchCommentCounts(assetIds)
  );

  return {
    counts: data ?? {},
    isLoading,
    isError: !!error,
  };
}
