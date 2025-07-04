import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { ArrowRight, Cloud, Hash, Zap, Globe, Rocket, Wrench, Laptop, Globe2, Smartphone, Shield, Zap as Lightning, Users, BarChart2, GitMerge } from 'lucide-react'
import AnimatedBanner from '../AnimatedBanner';

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
    description: 'Keep your S3 buckets and applications private — downloads are only accessible through authenticated access.',
    color: featureColors[1],
  },
  {
    icon: <Lightning className="h-8 w-8" />,
    title: 'Speed',
    description: 'Fast and efficient system operation with minimal user intervention.',
    color: featureColors[2],
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

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext()
  
  return (
    <Layout title="FaynoSync" description="Effortless Updates, Maximum Flexibility">
      <div className="bg-gradient">
        {/* Animated FaynoSync Banner */}
        <AnimatedBanner fadeOut={false} />
        <div style={{ marginBottom: '2.5rem' }} />
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[20vh] text-white px-4 py-8">
          {/* <img 
            src={require('@site/static/img/banner.png').default}
            alt="FaynoSync Banner" 
            className="max-w-[550px] w-full h-auto mb-6 object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          /> */}
          <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl">
            {siteConfig.tagline}
          </p>
          <Link
            to="/docs/getting-started"
            className="button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Link>
        </section>

        {/* Key Features Section */}
        <section className="py-16 px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Key Features
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="sharedCard"
                style={{ '--card-color': feature.color } as React.CSSProperties}
              >
                <div className="sharedCardIcon">
                  <span>{feature.icon}</span>
                </div>
                <div className="sharedCardContent">
                  <h3 className="sharedCardTitle">{feature.title}</h3>
                  <p className="sharedCardDescription">{feature.description}</p>
                </div>
                {/* <div className="sharedCardArrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div> */}
              </div>
            ))}
          </div>
        </section>

        {/* Supported Platforms Section */}
        <section className="py-16 px-4">
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
                {/* <div className="sharedCardArrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div> */}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}