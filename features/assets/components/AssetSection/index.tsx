import { STATUS_SECTION_LABELS } from '@/config';
import { AssetCard } from '../AssetCard';
import type { Asset, AssetStatus } from '../../types';

interface AssetSectionProps {
  status: AssetStatus;
  assets: Asset[];
  commentCounts: Record<number, number>;
}

export function AssetSection({ status, assets, commentCounts }: AssetSectionProps) {
  if (assets.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-white">
        {STATUS_SECTION_LABELS[status]}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {assets.map((asset) => (
          <AssetCard
            key={asset.id}
            asset={asset}
            commentCount={commentCounts[asset.id] || 0}
          />
        ))}
      </div>
    </section>
  );
}
