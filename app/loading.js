'use client';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#0077C8] mb-4"></div>
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    </div>
  );
}