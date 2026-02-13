import React from 'react';
import styles from './styles.module.css';

interface ApiStatsProps {
  totalEndpoints?: number;
  categories?: number;
}

export default function ApiStats({ 
  totalEndpoints = 46, 
  categories = 8
}: ApiStatsProps): JSX.Element {
  const [apiVersion, setApiVersion] = React.useState({
    version: 'v0.0.0',
    date: '1970-01-01'
  });

  React.useEffect(() => {
    fetch('https://api.github.com/repos/ku9nov/faynoSync/releases/latest', {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    })
      .then(res => res.json())
      .then(data => {
        setApiVersion({
          version: data.tag_name || 'v0.0.0',
          date: data.published_at ? data.published_at.split('T')[0] : '1970-01-01',
        });
      })
      .catch(() => {});
  }, []);

  return (
    <div className={styles.apiStatsContainer}>
      <div className={styles.apiStatsGrid}>
        <div className={styles.apiStatCard}>
          <div className={styles.apiStatIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.apiStatContent}>
            <div className={styles.apiStatNumber}>{totalEndpoints}</div>
            <div className={styles.apiStatLabel}>Total Endpoints</div>
          </div>
        </div>
        
        <div className={styles.apiStatCard}>
          <div className={styles.apiStatIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.apiStatContent}>
            <div className={styles.apiStatNumber}>{categories}</div>
            <div className={styles.apiStatLabel}>Categories</div>
          </div>
        </div>
        
        <div className={styles.apiStatCard}>
          <div className={styles.apiStatIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.apiStatContent}>
            <div className={styles.apiStatNumber}>{apiVersion.version}</div>
            <div className={styles.apiStatLabel}>API Version</div>
          </div>
        </div>
      </div>
      
      <div className={styles.apiStatsFooter}>
        <span className={styles.lastUpdated}>
          Last updated: {apiVersion.date}
        </span>
      </div>
    </div>
  );
} 