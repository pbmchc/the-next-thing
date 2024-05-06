import type { ReactNode } from 'react';
import Link from 'next/link';

const StatsTab = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link className="h-full flex-auto border py-2 text-center text-sm" href={href}>
      {children}
    </Link>
  );
};

export default function StatsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="mb-2 flex items-center justify-evenly">
        <StatsTab href="/parallel">Stats</StatsTab>
        <StatsTab href="/parallel/settings">Settings</StatsTab>
      </header>
      {children}
    </>
  );
}
