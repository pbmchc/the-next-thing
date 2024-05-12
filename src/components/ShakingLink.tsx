'use client';

import { useState } from 'react';
import { type ReactNode } from 'react';
import Link from 'next/link';

export const ShakingLink = ({ children }: { children: ReactNode }) => {
  const [isPresentationOver, setIsPresentationOver] = useState(false);

  if (isPresentationOver) {
    return null;
  }

  return (
    <Link
      className="hover:animate-shaking text-2xl"
      href="/routing/w/js"
      onClick={() => setIsPresentationOver(true)}
    >
      {children}
    </Link>
  );
};
