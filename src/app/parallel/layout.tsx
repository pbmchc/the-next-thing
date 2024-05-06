import type { ReactNode } from 'react';

type ParallelRoutesLayoutProps = {
  children: ReactNode;
  list: ReactNode;
  stats: ReactNode;
};

const RouteContainer = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  const baseClass = 'relative border-2 border-solid border-gray-300 bg-gray-100 p-4';
  return (
    <div className={className ? `${baseClass} ${className}` : baseClass}>{children}</div>
  );
};

export default function ParallelRoutesLayout({
  children,
  list,
  stats,
}: ParallelRoutesLayoutProps) {
  return (
    <>
      <RouteContainer>{children}</RouteContainer>
      <section className="mt-2 flex gap-2">
        <RouteContainer className="basis-1/2">{list}</RouteContainer>
        <RouteContainer className="basis-1/2">{stats}</RouteContainer>
      </section>
    </>
  );
}
