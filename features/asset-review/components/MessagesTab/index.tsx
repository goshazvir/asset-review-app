'use client';

import { useComments } from '../../hooks/useComments';
import { usePostComment } from '../../hooks/usePostComment';
import { MessagesThread } from '../MessagesThread';
import { MessageInput } from '../MessageInput';
import { Skeleton } from '@/components/ui';

interface MessagesTabProps {
  assetId: number;
  onTimecodeClick?: (timecode: string) => void;
}

export function MessagesTab({ assetId, onTimecodeClick }: MessagesTabProps) {
  const { comments, isLoading, isError } = useComments(assetId);
  const { post, isPosting } = usePostComment(assetId);

  const handleSend = async (message: string) => {
    await post(message);
  };

  if (isLoading) {
    return <MessagesTabSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400 text-sm">Failed to load messages</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-scroll p-6">
        <div className="min-h-full flex flex-col justify-end">
          <MessagesThread comments={comments} onTimecodeClick={onTimecodeClick} />
        </div>
      </div>
      <MessageInput onSend={handleSend} isPosting={isPosting} />
    </div>
  );
}

function MessagesTabSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2].map((i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="ml-11">
            <Skeleton className="h-20 w-full rounded-xl" />
            <Skeleton className="h-3 w-20 mt-2 ml-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}
