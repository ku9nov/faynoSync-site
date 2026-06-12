import React from 'react';
import OriginalBlogPostPage from '@theme-original/BlogPostPage';
import type BlogPostPageType from '@theme/BlogPostPage';
import type { WrapperProps } from '@docusaurus/types';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof BlogPostPageType>;

export default function BlogPostPage(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url.replace(/\/$/, '');
  const { title, permalink } = props.content.metadata;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${siteUrl}${permalink}`,
      },
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Head>
      <OriginalBlogPostPage {...props} />
    </>
  );
}
