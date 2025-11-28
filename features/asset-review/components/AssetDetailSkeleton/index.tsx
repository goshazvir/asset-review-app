import Link from 'next/link';
import { Skeleton } from '@/components/ui';
import { ROUTES } from '@/config';

export function AssetDetailSkeleton() {
  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-10 bg-black border-b border-zinc-800">
        <div className="flex items-center justify-center h-14 px-4 relative">
          <Link
            href={ROUTES.ASSETS}
            className="absolute left-4 p-2 text-white hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Back to assets"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Link>
          <Skeleton className="h-5 w-40" />
        </div>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-7rem)]">
        <div className="w-full lg:w-[65%] p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-end gap-3">
              <Skeleton className="h-6 w-40 rounded-lg" />
              <Skeleton className="h-9 w-28 rounded-xl" />
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto">
              <div className="space-y-2">
                <div className="w-full aspect-[9/16] max-h-[540px] rounded-xl bg-zinc-900 animate-pulse" />
                <p className="text-center text-sm text-zinc-400 font-semibold">Video</p>
              </div>
              <div className="space-y-2">
                <div className="w-full aspect-[9/16] max-h-[540px] rounded-xl bg-zinc-900 animate-pulse" />
                <p className="text-center text-sm text-zinc-400 font-semibold">Thumbnail</p>
              </div>
            </div>

            <div className="space-y-2 max-w-[720px] mx-auto">
              <p className="text-sm text-zinc-400">Sound Used</p>
              <div className="flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-4 w-full">
                <LinkIcon className="h-4 w-4 text-zinc-700" />
                <Skeleton className="h-5 flex-1" />
                <ArrowUpRightIcon className="h-4 w-4 text-zinc-700" />
              </div>
            </div>

            <div className="space-y-2 max-w-[720px] mx-auto">
              <p className="text-sm text-zinc-400">Creator&apos;s Caption</p>
              <div className="bg-zinc-900 rounded-xl p-4">
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[35%] border-t lg:border-t-0 lg:border-l border-zinc-800">
          <div className="h-full flex flex-col">
            <div className="flex items-end justify-between border-b border-zinc-800 px-6 pt-4">
              <div className="flex gap-6">
                <span className="pb-3 text-sm font-semibold text-white relative">
                  Overview
                  <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-accent" />
                </span>
                <span className="pb-3 text-sm font-semibold text-zinc-500">
                  Messages
                </span>
              </div>
              <div className="p-1 pb-3 text-zinc-400">
                <MoreVerticalIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white">Overview</h2>

                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <div>
                    <p className="text-sm text-zinc-400">Brand</p>
                    <Skeleton className="h-5 w-20 mt-1" />
                  </div>
                </div>

                <div>
                  <p className="text-base text-zinc-400 font-medium">Brief Name</p>
                  <Skeleton className="h-5 w-32 mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-zinc-400">Fee</p>
                    <Skeleton className="h-5 w-16 mt-1" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Deadline</p>
                    <Skeleton className="h-5 w-20 mt-1" />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">Deliverable title</p>
                  <Skeleton className="h-5 w-48 mt-1" />
                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <div className="flex items-center justify-between w-full text-white -mx-2 px-2 py-2">
                    <span className="text-base font-bold">Caption &amp; Sound Instructions</span>
                    <ChevronRightIcon className="h-5 w-5 text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
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
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
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

function MoreVerticalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
