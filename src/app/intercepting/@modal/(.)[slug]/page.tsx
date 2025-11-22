import { Dialog } from '@/components/Dialog';
import { ITEMS } from '@/app/_content';

type PageParams = {
  params: Promise<{ slug: string }>;
};

const getItem = async (slug: string) => {
  return ITEMS.find((item) => item.slug === slug);
};

export default async function InterceptingRoute({ params }: PageParams) {
  const { slug } = await params;
  const item = await getItem(slug);

  if (!item) {
    return (
      <Dialog>
        <p className="px-4 py-8">
          Item <b>{slug}</b> not found!
        </p>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <section>
        <header>
          An <b>intercepting</b> route
        </header>
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
    </Dialog>
  );
}
