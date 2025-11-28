import { VideoPlayer } from '../VideoPlayer';
import { LinkChip } from '@/components/ui';
import { t } from '@/locales';
import { StatusBadge } from '@/features/assets/components/StatusBadge';
import { StatusDropdown } from '../StatusDropdown';
import { MediaThumbnail } from './MediaThumbnail';
import type { AssetStatus } from '@/features/assets/types';

interface MediaPanelProps {
  videoUrl: string;
  thumbnailUrl: string;
  soundUrl: string;
  caption: string;
  status: AssetStatus;
  showEditStatus?: boolean;
  onStatusChange?: (status: AssetStatus) => Promise<void>;
  isUpdatingStatus?: boolean;
}

export function MediaPanel({
  videoUrl,
  thumbnailUrl,
  soundUrl,
  caption,
  status,
  showEditStatus = false,
  onStatusChange,
  isUpdatingStatus = false,
}: MediaPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end gap-3">
        <StatusBadge status={status} />
        {showEditStatus && onStatusChange && (
          <StatusDropdown
            currentStatus={status}
            onStatusChange={onStatusChange}
            isUpdating={isUpdatingStatus}
          />
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto">
        <div className="space-y-2">
          <VideoPlayer
            src={videoUrl}
            poster={thumbnailUrl}
            className="w-full aspect-[9/16] max-h-[520px] rounded-xl bg-zinc-900 object-cover"
          />
          <p className="text-center text-sm text-zinc-400 font-semibold">{t.media.video}</p>
        </div>

        <div className="space-y-2">
          <div className="relative w-full aspect-[9/16] max-h-[520px] rounded-xl bg-zinc-900 overflow-hidden">
            <MediaThumbnail src={thumbnailUrl} alt={t.media.thumbnail} />
          </div>
          <p className="text-center text-sm text-zinc-400 font-semibold">{t.media.thumbnail}</p>
        </div>
      </div>

      <div className="space-y-2 max-w-[720px] mx-auto">
        <p className="text-sm text-zinc-400">{t.media.soundUsed}</p>
        <LinkChip href={soundUrl} className="w-full" />
      </div>

      <div className="space-y-2 max-w-[720px] mx-auto">
        <p className="text-sm text-zinc-400">{t.media.creatorsCaption}</p>
        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-white text-sm whitespace-pre-wrap">{caption}</p>
        </div>
      </div>
    </div>
  );
}
