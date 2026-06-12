import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ArrowRight, Github } from 'lucide-react';
import styles from './faq.module.css';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: 'What is FaynoSync?',
    answer:
      'FaynoSync is a self-hosted, open-source auto-updater service for desktop and cross-platform applications. It manages release distribution, versioning, and secure delivery of updates so your apps can update themselves automatically across Windows, macOS, and Linux.',
  },
  {
    question: 'Is FaynoSync free and open source?',
    answer:
      'Yes. FaynoSync is free and open source. The main API, dashboard UI, and admin panel are all available on GitHub under the ku9nov organization, and you can self-host the entire stack without licensing fees.',
  },
  {
    question: 'Which platforms and frameworks does FaynoSync support?',
    answer:
      'FaynoSync is platform- and language-agnostic by design — it can manage updates for any application, written in any programming language, on any platform. You flexibly define your own platforms and architectures to match exactly what you ship, so support is not limited to a fixed list. Common setups include desktop apps on Windows, macOS, and Linux with frameworks like Electron (electron-updater), Tauri, or Squirrel, and architectures such as AMD64 and ARM64 — but these are examples, not boundaries.',
  },
  {
    question: 'How is FaynoSync different from Squirrel or electron-updater?',
    answer:
      'Squirrel and electron-updater are client-side update mechanisms, while FaynoSync is the self-hosted backend that stores releases, manages versions and channels, and serves update metadata to those clients. FaynoSync works alongside them, giving you a single server to manage updates for multiple apps and platforms with multi-cloud storage and telemetry.',
  },
  {
    question: 'Can I self-host FaynoSync?',
    answer:
      'Yes. FaynoSync is designed to be self-hosted. You run the API with MongoDB and connect it to your own object storage, keeping full control over your release data and update infrastructure. See the Getting Started guide for local and production deployment instructions.',
  },
  {
    question: 'Where does FaynoSync store update artifacts?',
    answer:
      'FaynoSync stores update artifacts in object storage and supports multi-cloud distribution, including Amazon S3, S3-compatible providers, and self-hosted MinIO. This lets you keep artifacts close to your users and avoid vendor lock-in.',
  },
  {
    question: 'Does FaynoSync support release channels and staged rollouts?',
    answer:
      'Yes. FaynoSync supports multiple release channels (such as stable, beta, and nightly) so you can publish versions to specific audiences, test releases before a full rollout, and control which users receive which updates.',
  },
  {
    question: 'How does FaynoSync keep updates secure?',
    answer:
      'FaynoSync delivers updates over a secure pipeline with metadata signature verification inspired by The Update Framework (TUF). Update metadata is signed and verified, expiration and version monotonicity are enforced, and private artifacts are served through authenticated, signed storage URLs.',
  },
  {
    question: 'Does FaynoSync provide telemetry and analytics?',
    answer:
      'Yes. FaynoSync includes built-in telemetry that lets you track update adoption, active versions, and rollout progress across your user base, giving you insight into how releases are performing in production.',
  },
  {
    question: 'How do I get started with FaynoSync?',
    answer:
      'Start with the Getting Started documentation, which walks you through running FaynoSync locally with Docker, configuring storage and MongoDB, and uploading your first application release. From there you can connect your desktop app and enable automatic updates.',
  },
];

export default function Faq(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${siteUrl}/faq` },
    ],
  };

  return (
    <Layout
      title="FAQ"
      description="Frequently asked questions about FaynoSync — the self-hosted, open-source auto-updater service for Electron, Tauri, and Squirrel desktop apps, with multi-cloud storage, channels, and secure delivery.">
      <Head>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <main className={`${styles.main} bg-gradient relative overflow-hidden`}>
        <div className={styles.container}>
          <header className={`${styles.header} fade-in-up`}>
            <h1 className={`${styles.title} hero-title`}>
              <span className="gradient-text">Frequently Asked Questions</span>
            </h1>
            <p className={styles.subtitle}>
              Everything you need to know about FaynoSync — the self-hosted
              auto-updater service for desktop and cross-platform apps.
            </p>
          </header>

          <div className={styles.list}>
            {faqs.map((item) => (
              <details key={item.question} className={styles.item}>
                <summary className={styles.question}>{item.question}</summary>
                <p className={styles.answer}>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className={`${styles.cta} enhanced-cta-section`}>
            <h2 className="gradient-text">Still have questions?</h2>
            <p>Dive into the docs or explore the source on GitHub.</p>
            <div className={styles.buttons}>
              <Link
                to="/docs/getting-started"
                className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://github.com/ku9nov/faynoSync"
                className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button"
                style={{ background: 'transparent', border: '2px solid var(--ifm-color-primary)' }}>
                <Github className="mr-2 h-5 w-5 inline transition-transform group-hover:scale-110" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
