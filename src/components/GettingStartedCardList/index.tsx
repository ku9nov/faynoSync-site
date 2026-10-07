import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Step {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

const steps: Step[] = [
  {
    title: 'Environment Variables',
    description: 'Configure all required environment variables for FaynoSync.',
    icon: '⚙️',
    color: '#8B5CF6',
    href: '/docs/getting-started/env-overview',
  },
  {
    title: 'Local Setup',
    description: 'Run FaynoSync locally with Docker Compose or from source.',
    icon: '🚀',
    color: '#EF4444',
    href: '/docs/getting-started/local-deploy',
  },
  {
    title: 'Production Deployment',
    description: 'Deploy FaynoSync to production environment.',
    icon: '🏭',
    color: '#7C3AED',
    href: '/docs/getting-started/production-deploy',
  },
  {
    title: 'Logging Configuration',
    description: 'Learn how to configure and use logging in FaynoSync.',
    icon: '📋',
    color: '#F59E0B',
    href: '/docs/getting-started/logging',
  },
];

export default function GettingStartedCardList(): JSX.Element {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardGrid}>
        {steps.map((step) => (
          <Link
            key={step.title}
            to={step.href}
            className={`${styles.card} sharedCard`}
            style={{ '--card-color': step.color } as React.CSSProperties}
          >
            <div className={`${styles.cardIcon} sharedCardIcon`}>
              <span className={styles.iconEmoji}>{step.icon}</span>
            </div>
            <div className={`${styles.cardContent} sharedCardContent`}>
              <h3 className={`${styles.cardTitle} sharedCardTitle`}>{step.title}</h3>
              <p className={`${styles.cardDescription} sharedCardDescription`}>{step.description}</p>
            </div>
            <div className={`${styles.cardArrow} sharedCardArrow`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 