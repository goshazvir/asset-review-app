export const AssetStatus = {
  AWAITING_ASSET: 'AWAITING_ASSET',
  PENDING_ADMIN_REVIEW: 'PENDING_ADMIN_REVIEW',
  PENDING_BRAND_REVIEW: 'PENDING_BRAND_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
} as const;

export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus];

export interface Brief {
  id: number;
  name: string;
}

export interface Deliverable {
  id: number;
  title: string;
  brief: Brief;
  deadline: string | null;
  fees: number | null;
  submissionOrigin: string;
}

export interface Creator {
  id: number;
  name: string;
  handle: string;
  profilePictureUrl: string;
}

export interface Asset {
  id: number;
  creator: Creator;
  assetUrl: string;
  thumbnailUrl: string;
  caption: string;
  soundUrl: string;
  status: AssetStatus;
  deliverable: Deliverable;
}

export interface AssetsResponse {
  assets: Asset[];
}

export interface Comment {
  id: number;
  assetId: number;
  name: string;
  comment: string;
  timestamp: string;
}
