import { Skeleton } from '@/components/ui';
import { AssetCardSkeleton } from '@/features/assets';

export default function AssetsLoading() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-sm mb-4 min-w-max">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-8 w-40" />
          </div>
          <div className="flex gap-2 mt-4">
            <Skeleton className="h-6 w-16 rounded" />
            <Skeleton className="h-6 w-12 rounded" />
          </div>
        </header>

        <div className="space-y-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="inline-flex items-center gap-1 bg-zinc-900 rounded-lg pl-1 pr-3 py-1 min-w-max">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="px-3 py-1.5">
                  <Skeleton className="h-5 w-20" />
                </div>
              ))}
            </div>
          </div>

          <section className="space-y-4">
            <Skeleton className="h-7 w-32" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <AssetCardSkeleton key={i} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
