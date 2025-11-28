import { MessageBubble } from '../MessageBubble';
import { t } from '@/locales';
import type { Comment } from '@/features/assets/types';

interface MessagesThreadProps {
  comments: Comment[];
  onTimecodeClick?: (timecode: string) => void;
}

export function MessagesThread({
  comments,
  onTimecodeClick,
}: MessagesThreadProps) {
  if (comments.length === 0) {
    return <EmptyMessages />;
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <MessageBubble
          key={comment.id}
          comment={comment}
          onTimecodeClick={onTimecodeClick}
        />
      ))}
    </div>
  );
}

function EmptyMessages() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
        <MessageIcon className="w-6 h-6 text-zinc-500" />
      </div>
      <p className="text-zinc-400 font-medium mb-1">{t.messages.emptyTitle}</p>
      <p className="text-zinc-500 text-sm">
        {t.messages.emptySubtitle}
      </p>
    </div>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    </svg>
  );
}
