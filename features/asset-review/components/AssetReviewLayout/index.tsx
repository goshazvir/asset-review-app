import type { ReactNode } from 'react';

interface AssetReviewLayoutProps {
  mediaPanel: ReactNode;
  infoPanel: ReactNode;
}

export function AssetReviewLayout({
  mediaPanel,
  infoPanel,
}: AssetReviewLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-7rem)]">
      <div className="w-full lg:w-[65%] p-6">{mediaPanel}</div>
      <div className="w-full lg:w-[35%] border-t lg:border-t-0 lg:border-l border-zinc-800 lg:h-full min-h-[50vh] lg:min-h-0">
        {infoPanel}
      </div>
    </div>
  );
}
