import type { ReactNode } from 'react';
import { PageSubHeading } from '@/components/PageSubHeading';

const SettingsItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="my-2 flex items-center justify-between p-2">
      {children}{' '}
      <span className="inline-block h-4 w-4 rounded-full border-2 border-solid border-gray-300 bg-gray-200"></span>
    </li>
  );
};

export default function ParallelStatsSettings() {
  return (
    <section>
      <PageSubHeading>
        A <b>parallel</b> stats settings route
      </PageSubHeading>
      <hr className="my-2" />
      <ul>
        <SettingsItem>Setting A</SettingsItem>
        <SettingsItem>Setting B</SettingsItem>
      </ul>
    </section>
  );
}
