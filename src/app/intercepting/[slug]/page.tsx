import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeading } from '@/components/PageHeading';
import { ITEMS } from '@/app/_content';

type PageParams = {
  params: Promise<{ slug: string }>;
};

const getItem = async (slug: string) => {
  return ITEMS.find((item) => item.slug === slug);
};

export default async function NonInterceptedRoute({ params }: PageParams) {
  const { slug } = await params;
  const item = await getItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <section>
      <Link
        className="mb-2 block font-mono text-3xl"
        href="/intercepting"
        title="Back to items list"
      >
        &larr;
      </Link>
      <PageHeading>
        A <b>non-intercepted</b> route
      </PageHeading>
      <figure className="my-6">
        <div className="flex h-96 w-full items-center justify-center rounded-xl border-4 border-solid border-white bg-gray-100 text-8xl text-gray-200">
          {item.title.replace(/item/i, ''.trim())}
        </div>
      </figure>
      <h2 className="bold px-1 py-2 text-2xl font-bold">{item.title}</h2>
      <p className="px-1 py-2 text-justify">{`${item.description} `.repeat(7)}</p>
      <ul className="flex gap-4 py-4">
        {item.tags.map((tag) => (
          <li key={tag} className="rounded-xl bg-gray-300 px-2 py-1 font-mono">
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
