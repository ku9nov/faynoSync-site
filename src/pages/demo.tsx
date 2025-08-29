import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ArrowRight } from 'lucide-react';
import styles from './demo.module.css';

export default function Demo(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
    const video = e.currentTarget;
    console.error('Video error details:', video.error);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  return (
    <Layout
      title={`Demo Dashboard - ${siteConfig.title}`}
      description="Watch FaynoSync dashboard in action with our interactive demo video. See how to manage applications, track updates, and monitor your auto-updater service in real-time.">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Dashboard Demo</h1>
            <p className={styles.subtitle}>
              Watch how FaynoSync dashboard works in real-time
            </p>
          </div>
          
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              {/* Video player with fallback */}
              <video 
                className={styles.video}
                controls
                preload="metadata"
                crossOrigin="anonymous"
                playsInline
                onError={handleVideoError}
                onLoadedData={handleVideoLoad}
              >
                <source src="/videos/demo.mov" type="video/quicktime" />
                <source src="/videos/demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className={styles.features}>
            <div 
              className="sharedCard"
              style={{ '--card-color': '#8B5CF6' } as React.CSSProperties}
            >
              <div className="sharedCardIcon">
                <span style={{ fontSize: '2rem' }}>🚀</span>
              </div>
              <div className="sharedCardContent">
                <h3 className="sharedCardTitle">Easy Setup</h3>
                <p className="sharedCardDescription">See how quickly you can get started with FaynoSync</p>
              </div>
            </div>
            <div 
              className="sharedCard"
              style={{ '--card-color': '#06B6D4' } as React.CSSProperties}
            >
              <div className="sharedCardIcon">
                <span style={{ fontSize: '2rem' }}>📊</span>
              </div>
              <div className="sharedCardContent">
                <h3 className="sharedCardTitle">Real-time Monitoring</h3>
                <p className="sharedCardDescription">Watch live updates and deployment tracking</p>
              </div>
            </div>
            <div 
              className="sharedCard"
              style={{ '--card-color': '#10B981' } as React.CSSProperties}
            >
              <div className="sharedCardIcon">
                <span style={{ fontSize: '2rem' }}>🔧</span>
              </div>
              <div className="sharedCardContent">
                <h3 className="sharedCardTitle">Simple Management</h3>
                <p className="sharedCardDescription">Experience the intuitive interface for managing your apps</p>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>Ready to try it yourself?</h2>
            <p>Get started with FaynoSync today and experience the power of automated updates</p>
            <div className={styles.buttons}>
              <Link
                to="/docs/getting-started"
                className="button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <a 
                href="https://github.com/ku9nov/faynoSync-dashboard" 
                className="button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg"
                style={{ background: 'transparent', border: '2px solid var(--ifm-color-primary)' }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 