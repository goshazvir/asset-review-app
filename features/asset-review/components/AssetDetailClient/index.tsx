'use client';

import {
  DetailHeader,
  MediaPanel,
  AssetReviewLayout,
  TabsPanel,
  useUpdateStatus,
} from '@/features/asset-review';
import { AssetStatus, type Asset, type AssetStatus as AssetStatusType } from '@/features/assets/types';

interface AssetDetailClientProps {
  asset: Asset;
}

export function AssetDetailClient({ asset }: AssetDetailClientProps) {
  const { update: updateStatus, isUpdating: isUpdatingStatus } = useUpdateStatus(asset.id);

  const handleStatusChange = async (newStatus: AssetStatusType) => {
    await updateStatus(newStatus);
  };

  const showEditStatus = asset.status === AssetStatus.PENDING_ADMIN_REVIEW;

  return (
    <div className="min-h-screen bg-black">
      <DetailHeader briefName={asset.deliverable.brief.name} />

      <AssetReviewLayout
        mediaPanel={
          <MediaPanel
            videoUrl={asset.assetUrl}
            thumbnailUrl={asset.thumbnailUrl}
            soundUrl={asset.soundUrl}
            caption={asset.caption}
            status={asset.status}
            showEditStatus={showEditStatus}
            onStatusChange={handleStatusChange}
            isUpdatingStatus={isUpdatingStatus}
          />
        }
        infoPanel={<TabsPanel asset={asset} />}
      />
    </div>
  );
}
