import Link from 'next/link';
import { PageHeading } from '@/components/PageHeading';

export default function SalesGroupShop() {
  return (
    <section>
      <PageHeading>
        A sales <b>group</b> route: shop
      </PageHeading>
      <Link className="mt-4 inline-block" href="/groups/checkout">
        To checkout &rarr;
      </Link>
    </section>
  );
}
