'use client';

import { useState } from 'react';
import { useSWRConfig } from 'swr';
import { postComment } from '@/services/api/client';
import type { Comment } from '@/features/assets/types';

export function usePostComment(assetId: number) {
  const { mutate } = useSWRConfig();
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const post = async (commentText: string): Promise<Comment | null> => {
    setIsPosting(true);
    setError(null);

    try {
      const newComment = await postComment(assetId, commentText);

      await mutate(`/api/assets/${assetId}/comments`);

      return newComment;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to post comment'));
      return null;
    } finally {
      setIsPosting(false);
    }
  };

  return {
    post,
    isPosting,
    error,
  };
}
