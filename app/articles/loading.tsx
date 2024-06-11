import Loading from '@/components/common/Loading';

export default async function Articles() {
  return (
    <main className="flex flex-col items-center py-8">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Loading />
        </div>
      </div>
    </main>
  );
}
