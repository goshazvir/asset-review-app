'use client';

import Link from 'next/link';

interface AssetDetailErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AssetDetailError({ error, reset }: AssetDetailErrorProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4 px-4">
        <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto">
          <AlertIcon className="w-8 h-8 text-red-400" />
        </div>
        <h1 className="text-xl font-semibold text-white">Failed to load asset</h1>
        <p className="text-zinc-400 max-w-md">
          Something went wrong while loading this asset. Please try again.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <p className="text-red-400 text-sm font-mono bg-zinc-900 p-3 rounded-lg">
            {error.message}
          </p>
        )}
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/assets"
            className="px-6 py-2 bg-zinc-900 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Back to Assets
          </Link>
        </div>
      </div>
    </div>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
}
