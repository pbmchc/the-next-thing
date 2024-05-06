import type { ReactNode } from 'react';

export const PageHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-xl">{children}</h1>;
};
