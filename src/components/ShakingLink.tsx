'use client';

import { useState } from 'react';
import { type ReactNode } from 'react';
import Link from 'next/link';

export const ShakingLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const [isPresentationOver, setIsPresentationOver] = useState(false);

  if (isPresentationOver) {
    return null;
  }

  return (
    <Link
      className="text-2xl hover:animate-shaking"
      href={href}
      onClick={() => setIsPresentationOver(true)}
    >
      {children}
    </Link>
  );
};
