import Link from 'next/link';
import { PageHeading } from '@/components/PageHeading';

export default function SalesGroupCheckout() {
  return (
    <section>
      <Link className="mb-4 inline-block" href="/groups/shop">
        &larr; Back to shop
      </Link>
      <PageHeading>
        A sales <b>group</b> route: checkout
      </PageHeading>
    </section>
  );
}
