import type { PropsWithChildren } from 'react';

export default function ContentGroupLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="mb-8 w-full bg-gray-300 px-3 py-1 font-mono text-xl">
        (Content)
      </header>
      {children}
    </>
  );
}
