import { PageHeading } from '@/components/PageHeading';

type DynamicPageParams = {
  params: Promise<{ slug: string[] }>;
};

export default async function DynamicWitOptionalCatchAll({ params }: DynamicPageParams) {
  const { slug } = await params;
  const segments = slug ? slug.join('-') : 'including-none';
  return (
    <section>
      <PageHeading>
        A <b>dynamic</b> route catching all
      </PageHeading>
      <span className="mt-2 inline-block rounded-sm bg-gray-300 p-2">{segments}</span>
    </section>
  );
}
