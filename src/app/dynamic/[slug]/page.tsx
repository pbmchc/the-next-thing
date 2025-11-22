import { PageHeading } from '@/components/PageHeading';

type DynamicPageParams = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicWithSingleSlug({ params }: DynamicPageParams) {
  const { slug } = await params;
  return (
    <section>
      <PageHeading>
        A <b>dynamic</b> route
      </PageHeading>
      <span className="mt-2 inline-block rounded-sm bg-gray-300 p-2">{slug}</span>
    </section>
  );
}
