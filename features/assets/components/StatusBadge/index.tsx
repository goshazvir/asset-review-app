import { Badge } from '@/components/ui';
import { STATUS_CONFIG } from '@/config';
import { cn } from '@/utils';
import { AssetStatus, type AssetStatus as AssetStatusType } from '../../types';

interface StatusBadgeProps {
  status: AssetStatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <Badge
      className={cn(
        config.bgColor,
        config.color,
        config.borderColor,
        'border',
        className
      )}
    >
      {status === AssetStatus.APPROVED ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <span className={cn('h-2 w-2 rounded-full', config.dotColor)} />
      )}
      {config.label}
    </Badge>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  );
}
