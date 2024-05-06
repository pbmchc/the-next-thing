import type { ReactNode } from 'react';
import { PageSubHeading } from '@/components/PageSubHeading';

const getListItems = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['Item A', 'Item B', 'Item C']), 1500);
  });
};

const ListItem = ({ children }: { children: ReactNode }) => {
  return <li className="my-2 bg-gray-200 p-2">{children}</li>;
};

export default async function ParallelList() {
  const items = await getListItems();

  return (
    <section>
      <PageSubHeading>
        A <b>parallel</b> list route
      </PageSubHeading>
      <ul className="my-4">
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>
    </section>
  );
}
