import { PageSubHeading } from '@/components/PageSubHeading';

const getStats = (): Promise<number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([77, -3]), 3000);
  });
};

const StatsItem = ({ value }: { value: number }) => {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-center text-2xl">
      {value > 0 ? '+' : ''}
      {value}%
    </div>
  );
};

export default async function ParallelStats() {
  const stats = await getStats();

  return (
    <section>
      <PageSubHeading>
        A <b>parallel</b> stats route
      </PageSubHeading>
      <div className="mt-4 flex items-center justify-evenly">
        {stats.map((value, index) => (
          <StatsItem key={index} value={value} />
        ))}
      </div>
    </section>
  );
}
