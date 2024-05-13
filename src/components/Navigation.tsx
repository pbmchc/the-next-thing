import type { PropsWithChildren } from 'react';
import Link from 'next/link';

const NavigationLink = ({ to, children }: PropsWithChildren<{ to: string }>) => {
  return (
    <Link className="text-blue-500 hover:text-blue-800" href={to}>
      {children}
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex h-full min-w-64 flex-col border-x-2 border-solid border-gray-300 bg-white px-8 py-4">
        <li>
          <NavigationLink to="/">(ᵔᴥᵔ)</NavigationLink>
        </li>
        <li className="mt-12">
          <NavigationLink to="/api/knock-knock">API</NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/basic">Basic</NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/dynamic/with-a-single-segment">
            Dynamic [single]
          </NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/dynamic/catch-em-all/those/sneaky/little/segments">
            Dynamic [multi]
          </NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/groups/blog">Blog (content)</NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/groups/shop">Shop (sales)</NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/parallel">Parallel</NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/intercepting">Intercepting</NavigationLink>
        </li>
        <li className="mt-6">
          <NavigationLink to="/w">Routing</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};
