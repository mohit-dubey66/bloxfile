import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Folder Not Found
          </h2>
          <p className="mt-4 text-base text-gray-500">
            The folder you're looking for doesn't exist or might have been removed.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm font-semibold text-black hover:text-gray-700"
            >
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}