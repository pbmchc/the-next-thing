import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHeading } from '@/components/PageHeading';
import { ITEMS } from '@/app/_content';

const getItems = async () => {
  return ITEMS;
};

const ListItem = ({ children }: { children: ReactNode }) => {
  return <li className="my-2 bg-white p-2">{children}</li>;
};

export default async function InterceptingRoutesList() {
  const items = await getItems();

  return (
    <section>
      <PageHeading>
        An <b>intercepting</b> routes list
      </PageHeading>
      <header className="flex gap-4 py-4">
        <button className="border-b-2 border-solid border-gray-400">All items</button>
        <Link href="/login">My items (login)</Link>
        <Link href="/register">My items (register)</Link>
      </header>
      <ul className="mb-4 grid grid-cols-2 gap-4">
        {items.map(({ title, slug, description }, index) => (
          <ListItem key={index}>
            <Link className="relative" href={`/intercepting/${slug}`}>
              <figure>
                <div className="flex h-48 w-full items-center justify-center bg-gray-100 text-8xl text-gray-200">
                  {title.replace(/item/i, ''.trim())}
                </div>
              </figure>
              <h3 className="px-1 py-2">{title}</h3>
              <p className="px-1 py-2 text-sm">{description}</p>
            </Link>
          </ListItem>
        ))}
      </ul>
    </section>
  );
}
