import React, { useEffect, useRef, useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { ArrowRight, Cloud, Hash, Zap, Globe, Rocket, Wrench, Laptop, Globe2, Smartphone, Shield, Zap as Lightning, Users, BarChart2, GitMerge, RefreshCw, CheckCircle, Star, Download, Upload, Settings, Database, Lock, Clock, TrendingUp } from 'lucide-react'
import AnimatedBanner from '../AnimatedBanner';

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set<string>());
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set<string>());
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...Array.from(prev), entry.target.id]));
            
            // Special handling for features section to trigger card animations
            if (entry.target.id === 'features') {
              setTimeout(() => {
                setVisibleCards((prev) => new Set([...Array.from(prev), 'features-cards']));
              }, 300); // Delay before starting card animations
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return { visibleSections, visibleCards };
};

// Floating particles component
const FloatingParticles = () => {
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

    const colors = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
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

// Animated geometric shapes
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {/* <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      <div className="floating-shape shape-4"></div>
      <div className="floating-shape shape-5"></div> */}
    </div>
  );
};

// Dashboard mockup component
const DashboardMockup = () => {
  return (
    <div className="dashboard-mockup">
      <div className="mockup-window">
        <div className="mockup-header">
          <div className="mockup-dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="mockup-title">FaynoSync Dashboard</div>
        </div>
        <div className="mockup-content">
          <div className="mockup-sidebar">
            <div className="sidebar-item active">
              <BarChart2 className="h-4 w-4" />
              <span>Statistics</span>
            </div>
            <div className="sidebar-item">
              <Upload className="h-4 w-4" />
              <span>Uploads</span>
            </div>
            <div className="sidebar-item">
              <Users className="h-4 w-4" />
              <span>Teams</span>
            </div>
            <div className="sidebar-item">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </div>
          </div>
          <div className="mockup-main">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number animated-counter">2,847</div>
                <div className="stat-label">Unique Clients</div>
                <div className="stat-trend up">↗ +12%</div>
              </div>
              <div className="stat-card">
                <div className="stat-number animated-counter">98.5%</div>
                <div className="stat-label">Latest Version Users</div>
                <div className="stat-trend up">↗ +2.1%</div>
              </div>
              <div className="stat-card">
                <div className="stat-number animated-counter">42</div>
                <div className="stat-label">Outdated Clients</div>
                <div className="stat-trend neutral">→ 0%</div>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-title">Version Usage</div>
              <div className="animated-chart">
                <div className="chart-bar" style={{ height: '60%', animationDelay: '0.1s' }}></div>
                <div className="chart-bar" style={{ height: '80%', animationDelay: '0.2s' }}></div>
                <div className="chart-bar" style={{ height: '45%', animationDelay: '0.3s' }}></div>
                <div className="chart-bar" style={{ height: '90%', animationDelay: '0.4s' }}></div>
                <div className="chart-bar" style={{ height: '70%', animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Shared card color palette for features and platforms
const featureColors = [
  '#8B5CF6', // purple
  '#06B6D4', // cyan
  '#10B981', // green
  '#F59E0B', // yellow
  '#EF4444', // red
  '#EC4899', // pink
  '#6366F1', // indigo
]

const features = [
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Unified Registry',
    description: 'A centralized registry for all your application types, ensuring consistency across platforms.',
    color: featureColors[0],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Security',
    description: 'Keep your S3 buckets and applications private — downloads are only accessible through authenticated access and verified with The Update Framework (TUF).',
    color: featureColors[1],
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Application Management',
    description: 'Publish, modify, and update your applications with ease. Manage your application lifecycle efficiently.',
    color: featureColors[3],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Team Management',
    description: 'Create and manage team users with granular permissions. Control access to applications and resources with fine-grained authorization.',
    color: featureColors[4],
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Performance Mode',
    description: 'Enable caching to reduce server load and minimize response times. Optimize your application\'s performance with smart request handling.',
    color: featureColors[5],
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: 'Telemetry System',
    description: 'Gain valuable insights with detailed analytics about your application\'s usage, version distribution, and user base across platforms.',
    color: featureColors[6],
  },
  {
    icon: <GitMerge className="h-8 w-8" />,
    title: 'Required Intermediate Builds',
    description: 'Enforce specific update paths for breaking changes and critical updates, ensuring safe and controlled application upgrades.',
    color: featureColors[0],
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: 'Multi-Updater Support',
    description: 'Support for various update mechanisms including Squirrel Windows/macOS, Electron Builder, Tauri and custom manual updates.',
    color: featureColors[1],
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Multi-Cloud Storage',
    description: 'Seamless integration with AWS S3, MinIO, Digital Ocean Spaces, and GCP Cloud Storage for maximum flexibility and reliability.',
    color: featureColors[3],
  },
]

const platforms = [
  {
    icon: <Laptop className="h-8 w-8" />,
    name: 'Desktop Apps',
    color: featureColors[1],
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    name: 'Browser Extensions',
    color: featureColors[2],
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    name: 'Mobile Applications',
    color: featureColors[3],
  },
]

const benefits = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'Multiple S3 Providers',
    description: 'Support for AWS S3, MinIO, Digital Ocean Spaces, and GCP Cloud Storage - choose the provider that fits your needs.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Enterprise Security',
    description: 'Advanced authentication, authorization, and TUF-signed builds to protect your applications from unauthorized access and supply-chain attacks.'
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: 'Multiple Updater Support',
    description: 'Compatible with Squirrel Windows/macOS, Electron Builder, Tauri and custom update mechanisms for maximum flexibility.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Real-time Monitoring',
    description: 'Track update deployments, user adoption rates, and system performance in real-time.'
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Flexible Storage',
    description: 'Choose from multiple cloud storage providers or use your own infrastructure.'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Easy Integration',
    description: 'Simple API endpoints and comprehensive documentation for quick implementation.'
  }
]

const useCases = [
  {
    title: 'Desktop Applications',
    description: 'Perfect for Electron apps, native desktop applications, and cross-platform software that needs reliable update mechanisms.',
    icon: <Laptop className="h-8 w-8" />
  },
  {
    title: 'Development Teams',
    description: 'Streamline your development workflow with automated deployment pipelines and version management.',
    icon: <Users className="h-8 w-8" />
  },
  {
    title: 'Enterprise Software',
    description: 'Meet enterprise requirements with advanced security, compliance features, and detailed audit trails.',
    icon: <Shield className="h-8 w-8" />
  },
  {
    title: 'SaaS Platforms',
    description: 'Provide seamless updates for client applications while maintaining high availability and performance.',
    icon: <Cloud className="h-8 w-8" />
  }
]

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext()
  const { visibleSections, visibleCards } = useScrollAnimation()
  
  return (
    <Layout title="FaynoSync - Auto-Updater" description="FaynoSync is a powerful auto-updater service for desktop applications. Effortless updates with maximum flexibility and multi-platform support.">
      <div className="bg-gradient relative overflow-hidden">
        {/* Animated Background Elements */}
        <FloatingParticles />
        <GeometricShapes />
        
        {/* Animated FaynoSync Banner */}
        <div className="relative" style={{ zIndex: 10 }}>
          <AnimatedBanner fadeOut={false} />
        </div>
        <div style={{ marginBottom: '2.5rem' }} />
        
        {/* Enhanced Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[20vh] text-white px-4 py-8" style={{ zIndex: 10 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 hero-title">
            <span className="gradient-text">FaynoSync</span>
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl fade-in-up">
            {siteConfig.tagline}
          </p>
          <p className="text-lg text-center mb-12 max-w-4xl text-gray-200 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform how you deliver updates to your applications. FaynoSync provides a comprehensive, secure, and scalable solution for managing application updates across multiple platforms and cloud providers. Whether you're building desktop applications, browser extensions, or mobile apps, our platform ensures your users always have access to the latest features and security patches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/docs/getting-started"
              className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/demo"
              className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button"
            >
              <span>View Demo</span>
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section 
          className={`py-16 px-4 bg-white/5 scroll-reveal ${visibleSections.has('intro') ? 'revealed' : ''}`}
          data-scroll-section
          id="intro"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Why Choose FaynoSync?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  The Complete Auto-Updater Solution
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  FaynoSync eliminates the complexity of managing application updates across different platforms and cloud providers. Our unified platform provides everything you need to deliver seamless updates to your users, from secure file storage to comprehensive analytics.
                </p>
                <p className="text-lg text-gray-200 mb-6">
                  Built with modern technologies and best practices, FaynoSync offers enterprise-grade reliability while remaining simple to integrate and use. Our RESTful API makes it easy to integrate with your existing development workflow, while our comprehensive documentation ensures you can get up and running quickly.
                </p>
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span>Enterprise Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-green-400" />
                    <span>Secure by Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-400" />
                    <span>High Performance</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {benefits.slice(0, 4).map((benefit, idx) => (
                  <div key={benefit.title} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-blue-400 mb-3">{benefit.icon}</div>
                    <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Key Features Section */}
        <section 
          className={`py-16 px-4 relative scroll-reveal ${visibleSections.has('features') ? 'revealed' : ''}`}
          data-scroll-section
          id="features"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12 section-title-enhanced">
            <span className="gradient-text">Key Features</span>
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`enhanced-feature-card sharedCard ${visibleCards.has('features-cards') ? 'staggered-card-visible' : 'staggered-card-hidden'}`}
                style={{ 
                  '--card-color': feature.color, 
                  '--animation-delay': `${idx * 150}ms`,
                  animationDelay: visibleCards.has('features-cards') ? `${idx * 150}ms` : '0ms'
                } as React.CSSProperties}
              >
                <div className="sharedCardIcon enhanced-icon-container">
                  <span className="enhanced-icon">{feature.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <div className="sharedCardContent">
                  <h3 className="sharedCardTitle enhanced-card-title">{feature.title}</h3>
                  <p className="sharedCardDescription enhanced-card-description">{feature.description}</p>
                </div>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Use Cases Section */}
        <section 
          className={`py-16 px-4 bg-white/5 section-enhanced scroll-reveal ${visibleSections.has('usecases') ? 'revealed' : ''}`}
          data-scroll-section
          id="usecases"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12 section-title-enhanced">
              <span className="gradient-text">Perfect For</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={useCase.title} className="enhanced-use-case-card bg-white/10 rounded-xl p-8 backdrop-blur-sm group">
                  <div className="text-blue-400 mb-4 enhanced-use-case-icon transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-blue-300">{useCase.title}</h3>
                  <p className="text-gray-200 text-lg transition-colors duration-300 group-hover:text-white">{useCase.description}</p>
                  <div className="use-case-hover-line"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms Section */}
        {/* <section className="py-16 px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Supported Platforms
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="sharedCard"
                style={{ '--card-color': platform.color } as React.CSSProperties}
              >
                <div className="sharedCardIcon">
                  <span>{platform.icon}</span>
                </div>
                <div className="sharedCardContent">
                  <h3 className="sharedCardTitle">{platform.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Enhanced Technical Overview Section */}
        <section 
          className={`py-16 px-4 bg-white/5 section-enhanced scroll-reveal ${visibleSections.has('technical') ? 'revealed' : ''}`}
          data-scroll-section
          id="technical"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12 section-title-enhanced">
              <span className="gradient-text">Technical Overview</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Architecture & Technology
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  FaynoSync is built on a modern, scalable architecture that leverages cloud-native technologies and best practices. Our platform is designed to handle high-throughput update requests while maintaining low latency and high availability.
                </p>
                <p className="text-lg text-gray-200 mb-6">
                  The system supports multiple update mechanisms including Squirrel for Windows and macOS, Electron Builder, and custom update protocols. This flexibility ensures compatibility with virtually any desktop application framework.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Download className="h-5 w-5 text-green-400 tech-icon" />
                    <span className="text-white">Multi-cloud storage support</span>
                  </div>
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Upload className="h-5 w-5 text-blue-400 tech-icon" />
                    <span className="text-white">RESTful API with comprehensive documentation</span>
                  </div>
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Database className="h-5 w-5 text-purple-400 tech-icon" />
                    <span className="text-white">Advanced caching and performance optimization</span>
                  </div>
                </div>
              </div>
              <div className="dashboard-mockup-container">
                <DashboardMockup />
              </div>
              {/* <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Getting Started
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  Getting started with FaynoSync is straightforward. Our comprehensive documentation guides you through the setup process, from initial configuration to deploying your first update.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/docs/getting-started"
                    className="block bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
                  >
                    <h4 className="text-white font-semibold mb-2">Quick Start Guide</h4>
                    <p className="text-gray-300 text-sm">Set up FaynoSync in minutes with our step-by-step guide</p>
                  </Link>
                  <Link
                    to="/docs/api"
                    className="block bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
                  >
                    <h4 className="text-white font-semibold mb-2">API Documentation</h4>
                    <p className="text-gray-300 text-sm">Explore our comprehensive API reference</p>
                  </Link>
                  <Link
                    to="/blog"
                    className="block bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
                  >
                    <h4 className="text-white font-semibold mb-2">Blog & Tutorials</h4>
                    <p className="text-gray-300 text-sm">Learn from real-world examples and best practices</p>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section 
          className={`py-16 px-4 scroll-reveal ${visibleSections.has('cta') ? 'revealed' : ''}`}
          data-scroll-section
          id="cta"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Update Process?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Start building reliable auto-update systems for your applications with FaynoSync's powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/docs/getting-started"
                className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button"
              >
                <span>Start Building</span>
                <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/demo"
                className="enhanced-button button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg group cta-button"
              >
                <span>Explore Demo</span>
                <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}