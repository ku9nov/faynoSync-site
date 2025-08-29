import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { ArrowRight, Cloud, Hash, Zap, Globe, Rocket, Wrench, Laptop, Globe2, Smartphone, Shield, Zap as Lightning, Users, BarChart2, GitMerge, RefreshCw, CheckCircle, Star, Download, Upload, Settings, Database, Lock, Clock, TrendingUp } from 'lucide-react'
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
    description: 'Support for various update mechanisms including Squirrel Windows/macOS, Electron Builder, and custom manual updates.',
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
    description: 'Advanced authentication and authorization systems to protect your applications and user data.'
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: 'Multiple Updater Support',
    description: 'Compatible with Squirrel Windows/macOS, Electron Builder, and custom update mechanisms for maximum flexibility.'
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
  
  return (
    <Layout title="FaynoSync - Auto-Updater" description="FaynoSync is a powerful auto-updater service for desktop applications. Effortless updates with maximum flexibility and multi-platform support.">
      <div className="bg-gradient">
        {/* Animated FaynoSync Banner */}
        <AnimatedBanner fadeOut={false} />
        <div style={{ marginBottom: '2.5rem' }} />
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[20vh] text-white px-4 py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            FaynoSync
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
            {siteConfig.tagline}
          </p>
          <p className="text-lg text-center mb-12 max-w-4xl text-gray-200">
            Transform how you deliver updates to your applications. FaynoSync provides a comprehensive, secure, and scalable solution for managing application updates across multiple platforms and cloud providers. Whether you're building desktop applications, browser extensions, or mobile apps, our platform ensures your users always have access to the latest features and security patches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/docs/getting-started"
              className="button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link
              to="/demo"
              className="button-secondary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg border-2 border-white"
            >
              View Demo
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4 bg-white/5">
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

        {/* Key Features Section */}
        <section className="py-16 px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Key Features
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={"sharedCard featureFadeIn"}
                style={{ '--card-color': feature.color, animationDelay: `${idx * 120}ms` } as React.CSSProperties}
              >
                <div className="sharedCardIcon">
                  <span>{feature.icon}</span>
                </div>
                <div className="sharedCardContent">
                  <h3 className="sharedCardTitle">{feature.title}</h3>
                  <p className="sharedCardDescription">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={useCase.title} className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <div className="text-blue-400 mb-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-200 text-lg">{useCase.description}</p>
                </div>
              ))}
            </div>
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
              </div>
            ))}
          </div>
        </section>

        {/* Technical Overview Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Technical Overview
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
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-green-400" />
                    <span className="text-white">Multi-cloud storage support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Upload className="h-5 w-5 text-blue-400" />
                    <span className="text-white">RESTful API with comprehensive documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-purple-400" />
                    <span className="text-white">Advanced caching and performance optimization</span>
                  </div>
                </div>
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
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
                className="button-primary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link
                to="/demo"
                className="button-secondary text-lg font-semibold px-8 py-4 rounded-xl shadow-lg border-2 border-white"
              >
                Explore Demo
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}