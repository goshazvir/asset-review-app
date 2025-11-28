import { Avatar } from '@/components/ui';
import { formatMessageTimestamp } from '@/utils';
import { TimecodeChip } from '../TimecodeChip';
import type { Comment } from '@/features/assets/types';

interface MessageBubbleProps {
  comment: Comment;
  onTimecodeClick?: (timecode: string) => void;
}

const URL_REGEX = /(https?:\/\/[^\s]+)/g;
const TIMECODE_REGEX = /\b(\d{1,2}:\d{2})\b/g;

export function MessageBubble({ comment, onTimecodeClick }: MessageBubbleProps) {
  const { name, comment: text, timestamp } = comment;

  const parsedContent = parseMessageContent(text);

  const timecodes = text.match(TIMECODE_REGEX) || [];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Avatar alt={name} size="md" />
        <span className="font-semibold text-white text-base">{name}</span>
      </div>

      <div className="ml-11">
        <div className="bg-zinc-800/50 rounded-xl p-4 space-y-2">
          <p className="text-white text-sm leading-relaxed">{parsedContent}</p>

          {timecodes.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {timecodes.map((tc, i) => (
                <TimecodeChip
                  key={i}
                  timecode={tc}
                  onClick={() => onTimecodeClick?.(tc)}
                />
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500 text-right mt-2">
          {formatMessageTimestamp(timestamp)}
        </p>
      </div>
    </div>
  );
}

function parseMessageContent(text: string): React.ReactNode {
  const parts = text.split(URL_REGEX);

  return parts.map((part, index) => {
    if (URL_REGEX.test(part)) {
      URL_REGEX.lastIndex = 0;
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover hover:underline break-all"
        >
          {part}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
