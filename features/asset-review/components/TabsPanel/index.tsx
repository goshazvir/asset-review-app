'use client';

import { useState } from 'react';
import { cn } from '@/utils';
import { t } from '@/locales';
import { OverviewTab } from '../OverviewTab';
import { MessagesTab } from '../MessagesTab';
import type { Asset } from '@/features/assets/types';

type TabId = 'overview' | 'messages';

interface TabsPanelProps {
  asset: Asset;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: t.tabs.overview },
  { id: 'messages', label: t.tabs.messages },
];

export function TabsPanel({ asset }: TabsPanelProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-end justify-between border-b border-zinc-800 px-6 pt-4">
        <div className="flex gap-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'pb-3 text-sm font-semibold transition-colors relative',
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </div>
        <button className="p-1 pb-3 text-zinc-400 hover:text-white transition-colors">
          <MoreVerticalIcon className="h-5 w-5" />
        </button>
      </div>

      <div className={cn(
        'flex-1',
        activeTab === 'overview' ? 'overflow-y-auto p-6' : 'overflow-hidden'
      )}>
        {activeTab === 'overview' && <OverviewTab asset={asset} />}
        {activeTab === 'messages' && <MessagesTab assetId={asset.id} />}
      </div>
    </div>
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
