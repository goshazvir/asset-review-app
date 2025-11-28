import { AssetStatus, type Asset, type AssetStatus as AssetStatusType } from '@/features/assets/types';

export function groupByStatus(assets: Asset[]): Record<AssetStatusType, Asset[]> {
  const grouped: Record<AssetStatusType, Asset[]> = {
    [AssetStatus.AWAITING_ASSET]: [],
    [AssetStatus.PENDING_ADMIN_REVIEW]: [],
    [AssetStatus.PENDING_BRAND_REVIEW]: [],
    [AssetStatus.APPROVED]: [],
    [AssetStatus.REJECTED]: [],
  };

  for (const asset of assets) {
    grouped[asset.status].push(asset);
  }

  return grouped;
}
