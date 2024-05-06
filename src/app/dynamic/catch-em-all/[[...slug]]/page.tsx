import { PageHeading } from '@/components/PageHeading';

type DynamicPageParams = {
  params: { slug: string[] };
};

export default function DynamicWitOptionalCatchAll({ params }: DynamicPageParams) {
  const segments = params.slug ? params.slug.join('-') : 'including-none';
  return (
    <section>
      <PageHeading>
        A <b>dynamic</b> route catching all
      </PageHeading>
      <span className="mt-2 inline-block rounded-sm bg-gray-300 p-2">{segments}</span>
    </section>
  );
}
