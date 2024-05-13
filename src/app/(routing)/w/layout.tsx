import type { ReactNode } from 'react';

export default function RoutingInRoutesLayout({
  children,
  next,
}: {
  children: ReactNode;
  next: ReactNode;
}) {
  return (
    <>
      {children}
      {next}
    </>
  );
}
