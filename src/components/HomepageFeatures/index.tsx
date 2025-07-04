import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { ArrowRight, Cloud, Hash, Zap, Globe, Rocket, Wrench, Laptop, Globe2, Smartphone, Shield, Zap as Lightning, Users, BarChart2, GitMerge } from 'lucide-react'

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext()
  
  return (
    <Layout title="FaynoSync" description="Effortless Updates, Maximum Flexibility">
      <div className="bg-gradient">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-white px-4 py-16">
          <img 
            src={require('@site/static/img/banner.png').default}
            alt="FaynoSync Banner" 
            className="max-w-[550px] w-full h-auto mb-6 object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
          <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl">
            {siteConfig.tagline}
          </p>
          <Link
            to="/docs/category/getting-started"
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white hover:bg-white/20 transition-all duration-300 text-lg font-semibold"
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
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="h-8 w-8" />,
                  title: "Unified Registry",
                  description: "A centralized registry for all your application types, ensuring consistency across platforms. Supports AWS S3, MinIO, Digital Ocean Spaces, and GCP Cloud Storage.",
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Security",
                  description: "Keep your S3 buckets and applications private — downloads are only accessible through authenticated access.",
                },
                {
                  icon: <Lightning className="h-8 w-8" />,
                  title: "Speed",
                  description: "Fast and efficient system operation with minimal user intervention.",
                },
                {
                  icon: <Rocket className="h-8 w-8" />,
                  title: "Application Management",
                  description: "Publish, modify, and update your applications with ease. Manage your application lifecycle efficiently.",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Team Management",
                  description: "Create and manage team users with granular permissions. Control access to applications and resources with fine-grained authorization.",
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Performance Mode",
                  description: "Enable caching to reduce server load and minimize response times. Optimize your application's performance with smart request handling.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white"
                >
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
              {[
                {
                  icon: <BarChart2 className="h-8 w-8" />,
                  title: "Telemetry System",
                  description: "Gain valuable insights with detailed analytics about your application's usage, version distribution, and user base across platforms.",
                },
                {
                  icon: <GitMerge className="h-8 w-8" />,
                  title: "Required Intermediate Builds",
                  description: "Enforce specific update paths for breaking changes and critical updates, ensuring safe and controlled application upgrades.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white"
                >
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
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
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Laptop className="h-8 w-8" />, name: "Desktop Apps" },
              { icon: <Globe2 className="h-8 w-8" />, name: "Browser Extensions" },
              { icon: <Smartphone className="h-8 w-8" />, name: "Mobile Applications" },
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-3">
                  {platform.icon}
                </div>
                <span className="text-white font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}