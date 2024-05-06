import type { ReactNode } from 'react';

export const PageSubHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-l">{children}</h2>;
};
