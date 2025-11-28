import { AssetStatus, type AssetStatus as AssetStatusType } from '@/features/assets/types';

export const API_BASE_URL = '/api';

export const ROUTES = {
  ASSETS: '/assets',
  ASSET_DETAIL: (id: number | string) => `/assets/${id}`,
} as const;

export const STATUS_CONFIG: Record<
  AssetStatusType,
  { label: string; color: string; bgColor: string; dotColor: string; borderColor: string }
> = {
  [AssetStatus.AWAITING_ASSET]: {
    label: 'Awaiting Asset',
    color: 'text-gray-300',
    bgColor: 'bg-[#2a2a2a]',
    dotColor: 'bg-gray-400',
    borderColor: 'border-gray-500',
  },
  [AssetStatus.PENDING_ADMIN_REVIEW]: {
    label: 'Pending Admin Review',
    color: 'text-amber-400',
    bgColor: 'bg-[#4a3520]',
    dotColor: 'bg-amber-400',
    borderColor: 'border-amber-600',
  },
  [AssetStatus.PENDING_BRAND_REVIEW]: {
    label: 'In Brand Review',
    color: 'text-purple-400',
    bgColor: 'bg-[#2d2640]',
    dotColor: 'bg-purple-400',
    borderColor: 'border-purple-700',
  },
  [AssetStatus.APPROVED]: {
    label: 'Approved',
    color: 'text-black',
    bgColor: 'bg-accent',
    dotColor: 'bg-black',
    borderColor: 'border-accent',
  },
  [AssetStatus.REJECTED]: {
    label: 'Rejected',
    color: 'text-rose-400',
    bgColor: 'bg-[#3d1f2a]',
    dotColor: 'bg-rose-400',
    borderColor: 'border-rose-700',
  },
};

export const STATUS_SECTION_LABELS: Record<AssetStatusType, string> = {
  [AssetStatus.AWAITING_ASSET]: 'Awaiting Asset',
  [AssetStatus.PENDING_ADMIN_REVIEW]: 'Needs Review',
  [AssetStatus.PENDING_BRAND_REVIEW]: 'In Brand Review',
  [AssetStatus.APPROVED]: 'Approved',
  [AssetStatus.REJECTED]: 'Rejected',
};

export const FILTER_TABS: { value: AssetStatusType | 'ALL'; label: string }[] = [
  { value: 'ALL', label: 'All' },
  { value: AssetStatus.AWAITING_ASSET, label: 'Awaiting asset' },
  { value: AssetStatus.PENDING_ADMIN_REVIEW, label: 'Needs admin review' },
  { value: AssetStatus.PENDING_BRAND_REVIEW, label: 'In brand review' },
  { value: AssetStatus.REJECTED, label: 'Rejected' },
  { value: AssetStatus.APPROVED, label: 'Approved' },
];

export const STATUS_ORDER: AssetStatusType[] = [
  AssetStatus.PENDING_ADMIN_REVIEW,
  AssetStatus.PENDING_BRAND_REVIEW,
  AssetStatus.AWAITING_ASSET,
  AssetStatus.REJECTED,
  AssetStatus.APPROVED,
];
