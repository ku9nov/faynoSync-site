import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FaynoSync - Auto-Updater Service',
  tagline: 'The auto-updater service that puts simplicity, reliability, and user control at the forefront.',
  favicon: 'img/favicon.png',

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



  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/search/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: 'FaynoSync',
      logo: {
        alt: 'faynoSync Logo',
        src: 'img/favicon.png',
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
        {
          href: 'https://github.com/ku9nov/faynoSync',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
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
      copyright: `
        <div class="footer-copyright-enhanced">
          <div class="footer-brand">
            <img src="/img/favicon.png" alt="FaynoSync" class="footer-logo" />
            <span class="footer-brand-text">FaynoSync</span>
          </div>
          <div class="footer-tagline">
            Powerful auto-updater service for modern applications
          </div>
          <div class="footer-copyright-text">
            Copyright © ${new Date().getFullYear()} FaynoSync. Built with 💜 for developers.
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
