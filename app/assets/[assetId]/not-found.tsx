import Link from 'next/link';

export default function AssetNotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4 px-4">
        <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center mx-auto">
          <SearchIcon className="w-8 h-8 text-zinc-500" />
        </div>
        <h1 className="text-xl font-semibold text-white">Asset not found</h1>
        <p className="text-zinc-400 max-w-md">
          The asset you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/assets"
          className="inline-block px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
        >
          Back to Assets
        </Link>
      </div>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
