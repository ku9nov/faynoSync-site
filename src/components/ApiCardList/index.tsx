import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

interface ApiCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  count?: number;
}

const apiCategories: ApiCategory[] = [
  {
    title: 'Authentication',
    description: 'User authentication, login, and signup endpoints',
    icon: '🔐',
    color: '#8B5CF6',
    href: '/docs/api/auth/auth-introduction',
  },
  {
    title: 'Applications',
    description: 'Manage applications, upload, download, and version control',
    icon: '📱',
    color: '#06B6D4',
    href: '/docs/api/apps/app-introduction',
  },
  {
    title: 'Platforms',
    description: 'Platform management and configuration',
    icon: '🖥️',
    color: '#10B981',
    href: '/docs/api/platforms/platform-introduction',
  },
  {
    title: 'Architectures',
    description: 'System architecture management and configuration',
    icon: '🏗️',
    color: '#F59E0B',
    href: '/docs/api/archs/arch-introduction',
  },
  {
    title: 'Channels',
    description: 'Distribution channels and release management',
    icon: '📡',
    color: '#EF4444',
    href: '/docs/api/channels/channel-introduction',
  },
  {
    title: 'Team Management',
    description: 'Team collaboration and user management',
    icon: '👥',
    color: '#EC4899',
    href: '/docs/api/team/users-introduction',
  },
  {
    title: 'System Info',
    description: 'System health, version info, and status endpoints',
    icon: 'ℹ️',
    color: '#6366F1',
    href: '/docs/api/info/info-introduction',
  },
];

export default function ApiCardList(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  return (
    <div className={styles.apiCardContainer}>
      <div className={styles.apiCardGrid}>
        {apiCategories.map((category) => (
          <Link
            key={category.title}
            to={category.href}
            className={`${styles.apiCard} sharedCard`}
            style={{ '--card-color': category.color } as React.CSSProperties}
          >
            <div className={`${styles.apiCardIcon} sharedCardIcon`}>
              <span className={styles.iconEmoji}>{category.icon}</span>
            </div>
            <div className={`${styles.apiCardContent} sharedCardContent`}>
              <h3 className={`${styles.apiCardTitle} sharedCardTitle`}>{category.title}</h3>
              <p className={`${styles.apiCardDescription} sharedCardDescription`}>{category.description}</p>
            </div>
            <div className={`${styles.apiCardArrow} sharedCardArrow`}>
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