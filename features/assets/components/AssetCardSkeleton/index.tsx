import { Card, Skeleton } from '@/components/ui';

export function AssetCardSkeleton() {
  return (
    <Card className="overflow-hidden w-full">
      <div className="relative aspect-[9/16] w-full bg-zinc-800">
        <div className="absolute top-3 left-3">
          <Skeleton className="h-5 w-28 rounded-lg" />
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-black/70 rounded-xl p-3 space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-3 w-36" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
