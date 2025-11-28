import { fetchAssets, fetchCommentCounts } from '@/services/api/server';
import { AssetGrid } from '@/features/assets';
import type { AssetStatus } from '@/features/assets/types';

interface AssetsPageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function AssetsPage({ searchParams }: AssetsPageProps) {
  const params = await searchParams;
  const statusParam = params.status as AssetStatus | undefined;
  const activeFilter = statusParam || 'ALL';

  const allAssets = await fetchAssets();
  const filteredAssets =
    activeFilter === 'ALL'
      ? allAssets
      : allAssets.filter((asset) => asset.status === activeFilter);

  const assetIds = allAssets.map((a) => a.id);
  const commentCounts = await fetchCommentCounts(assetIds);

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-sm mb-4 min-w-max">
              <a href="#" className="text-white hover:underline whitespace-nowrap">Brands</a>
              <ChevronIcon className="h-4 w-4 text-white flex-shrink-0" />
              <a href="#" className="text-white hover:underline whitespace-nowrap">Brand X</a>
              <ChevronIcon className="h-4 w-4 text-white flex-shrink-0" />
              <a href="#" className="text-white hover:underline whitespace-nowrap">KyraPlatformChallenge</a>
              <ChevronIcon className="h-4 w-4 text-white flex-shrink-0" />
              <span className="text-white font-bold whitespace-nowrap">#KyraChallenge</span>
            </div>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <BackIcon className="h-5 w-5 text-zinc-400 flex-shrink-0" />
            #KyraChallenge
          </h1>
          <div className="flex gap-2 mt-4">
            <span className="px-2.5 py-1 bg-[#7c2d41] rounded text-xs text-[#e8a0b0]">IG &amp; TT</span>
            <span className="px-2.5 py-1 bg-[#1e3a5f] rounded text-xs text-[#8eb4d9]">BCA</span>
          </div>
        </header>

        <AssetGrid
          assets={filteredAssets}
          allAssets={allAssets}
          commentCounts={commentCounts}
          activeFilter={activeFilter}
        />
      </div>
    </main>
  );
}

function BackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}
