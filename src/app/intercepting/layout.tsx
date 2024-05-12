import type { ReactNode } from 'react';

export default function InterceptingRoutesLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="border-2 border-solid border-gray-100 p-4">
      <p>Intercepting routes context</p>
      {children}
      {modal}
    </div>
  );
}
