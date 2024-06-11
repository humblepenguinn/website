'use client';

import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="h-8 w-8 animate-spin mr-2" />
      <p className="text-lg font-semibold">Loading...</p>
    </div>
  );
}
