'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils';
import { t } from '@/locales';
import { STATUS_CONFIG } from '@/config';
import { AssetStatus, type AssetStatus as AssetStatusType } from '@/features/assets/types';

interface StatusDropdownProps {
  currentStatus: AssetStatusType;
  onStatusChange: (status: AssetStatusType) => Promise<void>;
  isUpdating?: boolean;
  disabled?: boolean;
}

const AVAILABLE_STATUSES: AssetStatusType[] = [
  AssetStatus.PENDING_ADMIN_REVIEW,
  AssetStatus.PENDING_BRAND_REVIEW,
  AssetStatus.APPROVED,
  AssetStatus.REJECTED,
];

export function StatusDropdown({
  currentStatus,
  onStatusChange,
  isUpdating = false,
  disabled = false,
}: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = async (status: AssetStatusType) => {
    if (status === currentStatus) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);
    await onStatusChange(status);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled || isUpdating}
        className={cn(
          'px-4 py-2 text-white text-base font-semibold rounded-xl',
          'bg-[linear-gradient(90deg,#4C1D95_0%,#A855F7_25%,#BE185D_50%,#A855F7_75%,#4C1D95_100%)]',
          'bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%]',
          'hover:shadow-lg hover:shadow-purple-500/30',
          'transition-all duration-700 ease-in-out',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'flex items-center gap-2'
        )}
      >
        {isUpdating ? (
          <>
            <LoadingSpinner className="h-4 w-4" />
            <span>{t.status.updating}</span>
          </>
        ) : (
          <span>{t.status.editStatus}</span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-zinc-900 rounded-xl border border-zinc-700/50 shadow-2xl z-50 overflow-hidden p-2 space-y-1.5">
          {AVAILABLE_STATUSES.map((status) => {
            const config = STATUS_CONFIG[status];
            const isSelected = status === currentStatus;

            const hoverGlow: Record<AssetStatusType, string> = {
              [AssetStatus.AWAITING_ASSET]: 'hover:shadow-[0_0_12px_rgba(161,161,170,0.4)]',
              [AssetStatus.PENDING_ADMIN_REVIEW]: 'hover:shadow-[0_0_12px_rgba(251,191,36,0.4)]',
              [AssetStatus.PENDING_BRAND_REVIEW]: 'hover:shadow-[0_0_12px_rgba(192,132,252,0.4)]',
              [AssetStatus.APPROVED]: 'hover:shadow-[0_0_14px_rgba(187,239,68,0.5)]',
              [AssetStatus.REJECTED]: 'hover:shadow-[0_0_12px_rgba(251,113,133,0.4)]',
            };
            const glow = hoverGlow[status];

            return (
              <button
                key={status}
                onClick={() => handleSelect(status)}
                className="w-full text-left"
              >
                <span
                  className={cn(
                    'flex items-center gap-2 w-full px-2.5 py-1.5 rounded-md border text-xs font-medium',
                    'transition-all duration-200',
                    config.bgColor,
                    config.color,
                    config.borderColor,
                    isSelected && 'border-2',
                    !isSelected && ['hover:brightness-125', glow]
                  )}
                >
                  {status === AssetStatus.APPROVED ? (
                    <CheckCircleIcon className="h-4 w-4" />
                  ) : (
                    <span className={cn('h-2 w-2 rounded-full', config.dotColor)} />
                  )}
                  <span className="flex-1">{config.label}</span>
                  {isSelected && (
                    <CheckIcon className={cn('h-4 w-4', config.color)} />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
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
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
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
