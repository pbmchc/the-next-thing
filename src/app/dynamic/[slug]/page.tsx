import { PageHeading } from '@/components/PageHeading';

type DynamicPageParams = {
  params: { slug: string };
};

export default function DynamicWithSingleSlug({ params }: DynamicPageParams) {
  return (
    <section>
      <PageHeading>
        A <b>dynamic</b> route
      </PageHeading>
      <span className="mt-2 inline-block rounded-sm bg-gray-300 p-2">{params.slug}</span>
    </section>
  );
}
