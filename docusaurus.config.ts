import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const llmsRootContent = `## Key facts

- **What it is:** an open-source (Apache-2.0), self-hosted update server written in Go. You upload builds, it serves update checks, update feeds and downloads to your apps.
- **What it is not:** not an installer or packaging framework and not a client-side updater. It does not replace Velopack, Sparkle, Squirrel, electron-updater or the Tauri updater — it is the backend those clients talk to.
- **History:** developed since January 2023 (first commit 2023-01-13). Source: https://github.com/ku9nov/faynoSync
- **Stack:** Go API, MongoDB, optional Redis (performance mode, TUF state), object storage: AWS S3, Garage, DigitalOcean Spaces, GCP Cloud Storage (MinIO deprecated). Admin dashboard: https://github.com/ku9nov/faynoSync-dashboard

## Supported client updaters

- **Velopack** — native releases feed (releases.{channel}.json), delta updates, no extra SDK.
- **Sparkle (macOS)** — hosted per-channel appcast, signatures and deltas preserved, no extra SDK.
- **Squirrel.Windows / Squirrel.Mac** — RELEASES manifest and ZIP responses.
- **electron-builder / electron-updater** — YAML feed for the generic provider.
- **Tauri** — signature-verified JSON for the built-in Tauri updater.
- **Manual** — plain JSON with update URLs for custom update logic (desktop, browser extensions, mobile, anything else).

## Key features

- Custom channels, platforms and architectures with any names.
- Staged (canary) rollouts with deterministic client-side bucketing and adoption tracking.
- Required intermediate builds to force update paths across breaking changes.
- Critical updates and private apps (private bucket, download tokens, short-lived signed URLs).
- TUF-inspired signed metadata with threshold signatures, expiration and rollback protection.
- Telemetry (version adoption, platforms, active users) and crash / failed-update / failed-install reports grouped for triage.
- Team-based authorization and scoped CI tokens; CLI, GitHub Action and Jenkins integration for uploads.
- Performance mode (Redis cache), edge-first delivery with S3 response cache, presigned uploads for large builds.
- Official JavaScript/TypeScript and Go SDKs.

Pages below are ordered by importance: overview, updaters, features, setup, tutorials, then the full API reference.`;

const config: Config = {
  title: 'FaynoSync - Auto-Updater Service',
  tagline: 'The auto-updater service that puts simplicity, reliability, and user control at the forefront.',
  favicon: 'img/logo-96.png',

  // Set the production url of your site here
  url: 'https://faynosync.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ku9nov', // Usually your GitHub org/user name.
  projectName: 'faynoSync', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Static files configuration
  staticDirectories: ['static'],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content:
          'auto-updater, software updates, desktop app updates, Electron updater, Squirrel, Tauri, release management, version distribution, multi-cloud, S3, MinIO, update server, FaynoSync',
      },
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:type', content: 'website'},
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:site_name', content: 'FaynoSync'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'FaynoSync',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows, macOS, Linux',
        description:
          'FaynoSync is a powerful auto-updater service for desktop and cross-platform applications, with multi-cloud distribution, telemetry, and secure delivery.',
        url: 'https://faynosync.com',
        softwareHelp: 'https://faynosync.com/docs/getting-started',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        author: {
          '@type': 'Organization',
          name: 'FaynoSync',
          url: 'https://faynosync.com',
        },
      }),
    },
  ],



  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        includeBlog: true,
        addMdExtension: false,
        rootContent: llmsRootContent,
        fullRootContent: llmsRootContent,
        includeOrder: [
          'docs/intro.md',
          'docs/updaters/index.mdx',
          'docs/updaters/*',
          'docs/examples/index.mdx',
          'docs/examples/*',
          'docs/rollout.mdx',
          'docs/intermediate_build.mdx',
          'docs/telemetry.mdx',
          'docs/team_based_auth.mdx',
          'docs/sdk/intro.mdx',
          'docs/sdk/**',
          'docs/cli.mdx',
          'docs/edge.mdx',
          'docs/performance.mdx',
          'docs/presigned-uploads.mdx',
          'docs/getting-started/index.mdx',
          'docs/getting-started/*',
          'docs/troubleshooting.mdx',
          'blog/*',
          'docs/api/**',
        ],
        title: 'FaynoSync - Self-Hosted Update Server',
        description:
          'FaynoSync is an open-source, self-hosted update server (backend) for desktop and cross-platform apps. It does not replace client updaters — it serves update feeds for them: Velopack, Sparkle, Squirrel.Windows/Mac, electron-updater and Tauri, plus manual JSON updates, with channels, staged rollouts, TUF-signed metadata, telemetry and multi-cloud storage.',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ku9nov/faynoSync-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ku9nov/faynoSync-site/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-YFCEX7V8BF',
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/search/**',
            '/markdown-page',
            '/blog/archive',
            '/blog/tags/**',
            '/blog/authors/**',
            '/docs/api/apps/get-all',
            '/blog/atom.xml',
            '/blog/rss.xml',
          ],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              const path = new URL(item.url).pathname;
              if (path === '/') {
                return {...item, priority: 1.0};
              }
              if (
                path === '/docs/intro' ||
                path === '/docs/getting-started' ||
                path.startsWith('/docs/getting-started/') ||
                path === '/blog' ||
                path === '/demo'
              ) {
                return {...item, priority: 0.8};
              }
              if (path.startsWith('/blog/')) {
                return {...item, priority: 0.7};
              }
              if (path.startsWith('/docs/api/')) {
                return {...item, priority: 0.3};
              }
              return item;
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/faynosync-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      // title: 'FaynoSync',
      logo: {
        alt: 'faynoSync Logo',
        src: 'img/logo-96.png',
      },
      style: 'primary',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/demo', label: 'Demo Dashboard', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
            // {
            //   label: 'Troubleshooting',
            //   to: '/docs/troubleshooting',
            // },
            // {
            //   label: 'Performance',
            //   to: '/docs/performance',
            // },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Medium Articles',
              href: 'https://medium.com/@sergeyku9nov',
            },
            {
              label: 'Dev.to Posts',
              href: 'https://dev.to/faynosync',
            },
            {
              label: 'Tutorials & Guides',
              to: '/blog/tags/development',
            },
          ],
        },
        {
          title: 'Open Source',
          items: [
            {
              label: 'Main API',
              href: 'https://github.com/ku9nov/faynoSync',
            },
            {
              label: 'Dashboard UI',
              href: 'https://github.com/ku9nov/faynoSync-dashboard',
            },
            {
              label: 'Website',
              href: 'https://github.com/ku9nov/faynoSync-site',
            },
            {
              label: 'Admin Panel',
              href: 'https://github.com/ku9nov/faynoSync-mongodb-dashboard',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'GitHub Discussions',
            //   href: 'https://github.com/ku9nov/faynoSync/discussions',
            // },
            {
              label: 'Report Issues',
              href: 'https://github.com/ku9nov/faynoSync/issues',
            },
            {
              label: 'Feature Requests',
              href: 'https://github.com/ku9nov/faynoSync/issues/new?template=feature_request.md',
            },
            // {
            //   label: 'Contributing',
            //   href: 'https://github.com/ku9nov/faynoSync/blob/main/CONTRIBUTING.md',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FaynoSync. Built with 💜 for developers.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
