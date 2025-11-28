'use client';

import { useState } from 'react';
import { cn } from '@/utils';
import { t } from '@/locales';

interface MessageInputProps {
  onSend: (message: string) => Promise<void>;
  isPosting?: boolean;
  disabled?: boolean;
}

export function MessageInput({
  onSend,
  isPosting = false,
  disabled = false,
}: MessageInputProps) {
  const [message, setMessage] = useState('');
  const [isInternal, setIsInternal] = useState(false);
  const [includeTimecode, setIncludeTimecode] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim() || isPosting || disabled) return;

    await onSend(message.trim());
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-zinc-800 p-4 space-y-3">
      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.messages.inputPlaceholder}
          disabled={disabled || isPosting}
          className={cn(
            'w-full bg-zinc-800 rounded-xl px-4 py-3 pr-12 text-white text-sm',
            'placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        />
        <button
          onClick={handleSubmit}
          disabled={!message.trim() || isPosting || disabled}
          className={cn(
            'absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors',
            message.trim() && !isPosting && !disabled
              ? 'text-purple-400 hover:text-purple-300 hover:bg-zinc-700'
              : 'text-zinc-600 cursor-not-allowed'
          )}
        >
          {isPosting ? (
            <LoadingSpinner className="h-5 w-5" />
          ) : (
            <SendIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer text-zinc-500">
          <span className={cn(
            'w-4 h-4 rounded border border-zinc-600 flex items-center justify-center',
            includeTimecode ? 'bg-zinc-600' : 'bg-zinc-900'
          )}>
            {includeTimecode && <CheckIcon className="w-3 h-3 text-white" />}
          </span>
          <input
            type="checkbox"
            checked={includeTimecode}
            onChange={(e) => setIncludeTimecode(e.target.checked)}
            className="sr-only"
          />
          <span>00:00</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <span className={cn(
            'w-4 h-4 rounded border border-zinc-600 flex items-center justify-center',
            isInternal ? 'bg-zinc-600' : 'bg-zinc-900'
          )}>
            {isInternal && <CheckIcon className="w-3 h-3 text-white" />}
          </span>
          <input
            type="checkbox"
            checked={isInternal}
            onChange={(e) => setIsInternal(e.target.checked)}
            className="sr-only"
          />
          <span className="text-zinc-400">{t.messages.internalOnly}</span>
        </label>
      </div>
    </div>
  );
}

function SendIcon({ className }: { className?: string }) {
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
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  );
}


function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
