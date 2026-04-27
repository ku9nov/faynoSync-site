import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';
import React from 'react';

const noIndexPaths = new Set([
  '/blog/archive',
  '/docs/api/apps/get-all',
]);

const noIndexPrefixes = [
  '/blog/tags',
  '/blog/authors',
];

function normalizePathname(pathname: string): string {
  if (pathname === '/') {
    return pathname;
  }

  return pathname.replace(/\/$/, '');
}

function shouldNoIndex(pathname: string): boolean {
  const normalizedPathname = normalizePathname(pathname);

  return (
    noIndexPaths.has(normalizedPathname) ||
    noIndexPrefixes.some((prefix) => normalizedPathname === prefix || normalizedPathname.startsWith(`${prefix}/`))
  );
}

export default function Root({children}: {children: React.ReactNode}): React.ReactNode {
  const {pathname} = useLocation();

  return (
    <>
      {shouldNoIndex(pathname) && (
        <Head>
          <meta name="robots" content="noindex, follow" />
        </Head>
      )}
      {children}
    </>
  );
}
