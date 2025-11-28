import Link from 'next/link';
import { cn } from '@/utils';
import { FILTER_TABS } from '@/config';
import type { Asset, AssetStatus } from '../../types';

type FilterValue = AssetStatus | 'ALL';

interface FilterTabsProps {
  assets: Asset[];
  activeFilter: FilterValue;
}

export function FilterTabs({ assets, activeFilter }: FilterTabsProps) {
  const getCounts = () => {
    const counts: Record<string, number> = { ALL: assets.length };
    for (const asset of assets) {
      counts[asset.status] = (counts[asset.status] || 0) + 1;
    }
    return counts;
  };

  const counts = getCounts();

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="inline-flex items-center gap-1 bg-zinc-900 rounded-lg pl-1 pr-3 py-1 min-w-max">
        {FILTER_TABS.map((tab) => {
          const count = counts[tab.value] || 0;
          const isActive = activeFilter === tab.value;
          const href = tab.value === 'ALL' ? '/assets' : `/assets?status=${tab.value}`;

          return (
            <Link
              key={tab.value}
              href={href}
              className={cn(
                'inline-flex items-center gap-2 text-sm transition-colors px-3 py-1.5 rounded-md',
                isActive
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              )}
            >
              <StatusDot status={tab.value} />
              <span>{tab.label}</span>
              <span className={cn(isActive ? 'text-zinc-300' : 'text-zinc-400')}>{count}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function StatusDot({ status }: { status: FilterValue }) {
  if (status === 'ALL') return null;

  const colorMap: Record<AssetStatus, string> = {
    AWAITING_ASSET: 'bg-gray-400',
    PENDING_ADMIN_REVIEW: 'bg-amber-500',
    PENDING_BRAND_REVIEW: 'bg-purple-400',
    APPROVED: 'bg-emerald-400',
    REJECTED: 'bg-rose-400',
  };

  return (
    <span className={cn('h-3 w-3 rounded-sm', colorMap[status])} />
  );
}
