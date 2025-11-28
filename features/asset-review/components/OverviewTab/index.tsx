import { formatCurrency, formatDate } from '@/utils';
import { t } from '@/locales';
import type { Asset } from '@/features/assets/types';

interface OverviewTabProps {
  asset: Asset;
}

export function OverviewTab({ asset }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-white">{t.overview.title}</h2>

      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-white text-[10px] font-bold tracking-tight">
            BRAND
          </span>
        </div>
        <div>
          <p className="text-sm text-zinc-400">{t.overview.brand}</p>
          <p className="text-white font-medium">Brand X</p>
        </div>
      </div>

      <div>
        <p className="text-base text-zinc-400 font-medium">{t.overview.briefName}</p>
        <p className="text-white font-semibold">{asset.deliverable.brief.name}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-zinc-400">{t.overview.fee}</p>
          <p className="text-white font-medium">
            {formatCurrency(asset.deliverable.fees)}
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">{t.overview.deadline}</p>
          <p className="text-white font-medium">
            {formatDate(asset.deliverable.deadline)}
          </p>
        </div>
      </div>

      <div>
        <p className="text-sm text-zinc-400">{t.overview.deliverableTitle}</p>
        <p className="text-white font-medium">{asset.deliverable.title}</p>
      </div>

      <div className="border-t border-zinc-800 pt-4">
        <button className="flex items-center justify-between w-full text-white hover:bg-zinc-800/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
          <span className="text-base font-bold">{t.overview.captionAndSoundInstructions}</span>
          <ChevronRightIcon className="h-5 w-5 text-zinc-400" />
        </button>
      </div>
    </div>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
