import { STATUS_ORDER } from '@/config';
import { groupByStatus } from '@/utils';
import { FilterTabs } from '../FilterTabs';
import { AssetSection } from '../AssetSection';
import type { Asset, AssetStatus } from '../../types';

type FilterValue = AssetStatus | 'ALL';

interface AssetGridProps {
  assets: Asset[];
  allAssets: Asset[];
  commentCounts: Record<number, number>;
  activeFilter: FilterValue;
}

export function AssetGrid({ assets, allAssets, commentCounts, activeFilter }: AssetGridProps) {
  const groupedAssets = groupByStatus(assets);

  return (
    <div className="space-y-8">
      <FilterTabs assets={allAssets} activeFilter={activeFilter} />

      {assets.length === 0 ? (
        <EmptyState activeFilter={activeFilter} />
      ) : (
        <div className="space-y-8">
          {STATUS_ORDER.map((status) => (
            <AssetSection
              key={status}
              status={status}
              assets={groupedAssets[status]}
              commentCounts={commentCounts}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({ activeFilter }: { activeFilter: AssetStatus | 'ALL' }) {
  const isFiltered = activeFilter !== 'ALL';

  return (
    <div className="flex items-center gap-5 py-12">
      <div className="relative shrink-0">
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse" />
        <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-pulse delay-300" />
        <div className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-pulse delay-500" />

        <div className="w-16 h-16 bg-zinc-800/80 rounded-xl flex items-center justify-center border border-zinc-700/50">
          <div className="relative">
            <svg
              className="w-8 h-8 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-zinc-700 rounded-full flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-base font-medium text-zinc-300 mb-1">
          {isFiltered ? 'No assets match this filter' : 'No assets found'}
        </h3>
        <p className="text-sm text-zinc-500">
          {isFiltered
            ? 'Try selecting a different status filter'
            : 'Assets will appear here once submitted'}
        </p>
      </div>
    </div>
  );
}
