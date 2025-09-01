import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ArrowRight, Play, Download, Github } from 'lucide-react';
import styles from './demo.module.css';

// Floating particles component for demo page
const DemoParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#8B5CF6', '#06B6D4', '#10B981'];

    // Create fewer particles for demo page
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.2 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

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
      <main className={`${styles.main} bg-gradient relative overflow-hidden`}>
        {/* Animated Background Elements */}
        <DemoParticles />
        
        <div className={`${styles.container} relative`} style={{ zIndex: 10 }}>
          <div className={`${styles.header} fade-in-up`}>
            <h1 className={`${styles.title} hero-title`}>
              <span className="gradient-text">Dashboard Demo</span>
            </h1>
            <p className={`${styles.subtitle} fade-in-up`} style={{ animationDelay: '0.2s' }}>
              Watch how FaynoSync dashboard works in real-time
            </p>
          </div>
          
          <div className={`${styles.videoContainer} fade-in-up`} style={{ animationDelay: '0.4s' }}>
            <div className={`${styles.videoWrapper} enhanced-video-container`}>
              {/* Enhanced video player with fallback */}
              {/* <div className="video-play-overlay">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div> */}
              <video 
                className={`${styles.video} enhanced-video`}
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

          <div className={`${styles.features} fade-in-up`} style={{ animationDelay: '0.6s' }}>
            <div 
              className="enhanced-feature-card sharedCard featureFadeIn"
              style={{ '--card-color': '#8B5CF6', animationDelay: '0.7s' } as React.CSSProperties}
            >
              <div className="sharedCardIcon enhanced-icon-container">
                <span className="enhanced-icon" style={{ fontSize: '2rem' }}>🚀</span>
                <div className="icon-glow"></div>
              </div>
              <div className="sharedCardContent">
                <h3 className="sharedCardTitle enhanced-card-title">Easy Setup</h3>
                <p className="sharedCardDescription enhanced-card-description">See how quickly you can get started with FaynoSync</p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
            <div 
              className="enhanced-feature-card sharedCard featureFadeIn"
              style={{ '--card-color': '#06B6D4', animationDelay: '0.8s' } as React.CSSProperties}
            >
              <div className="sharedCardIcon enhanced-icon-container">
                <span className="enhanced-icon" style={{ fontSize: '2rem' }}>📊</span>
                <div className="icon-glow"></div>
              </div>
              <div className="sharedCardContent">
                <h3 className="sharedCardTitle enhanced-card-title">Real-time Monitoring</h3>
                <p className="sharedCardDescription enhanced-card-description">Watch live updates and deployment tracking</p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
            <div 
              className="enhanced-feature-card sharedCard featureFadeIn"
              style={{ '--card-color': '#10B981', animationDelay: '0.9s' } as React.CSSProperties}
            >
              <div className="sharedCardIcon enhanced-icon-container">
                <span className="enhanced-icon" style={{ fontSize: '2rem' }}>🔧</span>
                <div className="icon-glow"></div>
              </div>
              <div className="sharedCardContent">
                <h3 className="sharedCardTitle enhanced-card-title">Simple Management</h3>
                <p className="sharedCardDescription enhanced-card-description">Experience the intuitive interface for managing your apps</p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          </div>

          <div className={`${styles.cta} fade-in-up enhanced-cta-section`} style={{ animationDelay: '1s' }}>
            <h2 className="gradient-text">Ready to try it yourself?</h2>
            <p>Get started with FaynoSync today and experience the power of automated updates</p>
            <div className={styles.buttons}>
              <Link
                to="/docs/getting-started"
                className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="https://github.com/ku9nov/faynoSync-dashboard" 
                className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button"
                style={{ background: 'transparent', border: '2px solid var(--ifm-color-primary)' }}
              >
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