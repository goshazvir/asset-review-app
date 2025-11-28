import { notFound } from 'next/navigation';
import { fetchAsset } from '@/services/api/server';
import { AssetDetailClient } from '@/features/asset-review';
import type { Metadata } from 'next';

interface AssetDetailPageProps {
  params: Promise<{ assetId: string }>;
}

export async function generateMetadata({ params }: AssetDetailPageProps): Promise<Metadata> {
  const { assetId } = await params;
  const asset = await fetchAsset(Number(assetId));

  if (!asset) {
    return { title: 'Asset Not Found' };
  }

  return {
    title: `${asset.deliverable.brief.name} - Asset Review`,
    description: asset.caption,
  };
}

export default async function AssetDetailPage({ params }: AssetDetailPageProps) {
  const { assetId } = await params;
  const asset = await fetchAsset(Number(assetId));

  if (!asset) {
    notFound();
  }

  return <AssetDetailClient asset={asset} />;
}
