'use client';

import UnderConstruction from '@/components/common/construction';

export default function Papers() {
  return (
    <main className="flex flex-col items-center py-8">
      <div className="space-y-4">
        {/* <HeadingText subtext="">
          Papers
        </HeadingText> */}
        <div className="flex flex-wrap gap-2">
          <UnderConstruction />
        </div>
      </div>
    </main>
  );
}
