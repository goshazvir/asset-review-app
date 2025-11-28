import { Card, Avatar } from '@/components/ui';
import { StatusBadge } from '../StatusBadge';
import { AssetThumbnail } from './AssetThumbnail';
import type { Asset } from '../../types';
import Link from 'next/link';

interface AssetCardProps {
  asset: Asset;
  commentCount?: number;
}

export function AssetCard({ asset, commentCount = 0 }: AssetCardProps) {
  return (
    <Link href={`/assets/${asset.id}`} className="w-full">
      <Card hover className="group">
        <div className="relative aspect-[9/16] w-full bg-zinc-800 max-h-[60vh] sm:max-h-none">
          <AssetThumbnail src={asset.thumbnailUrl} alt={asset.caption} />

          <div className="absolute top-3 left-3">
            <StatusBadge status={asset.status} />
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-black/70 rounded-xl p-3">
              <div className="flex items-center gap-3 mb-3">
                <Avatar
                  src={asset.creator.profilePictureUrl}
                  alt={asset.creator.name}
                  size="lg"
                />
                <span className="text-base font-semibold text-white truncate">
                  {asset.creator.name}
                </span>
              </div>

              <div className="flex items-center gap-2 text-white text-sm">
                <DeliverableIcon className="h-4 w-4" />
                <span className="truncate">{asset.deliverable.title}</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 text-sm mt-1.5">
                <CommentIcon className="h-4 w-4" />
                <span>{commentCount} comments</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

function CommentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}

function DeliverableIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
    </svg>
  );
}
