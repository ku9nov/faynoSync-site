import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { ArrowRight, Cloud, Hash, Zap, Globe, Rocket, Wrench, Laptop, Globe2, Smartphone, Shield, Zap as Lightning } from 'lucide-react'

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Unified Registry",
                description: "A centralized registry for all your application types, ensuring consistency across platforms.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security",
                description: "Keep your S3 buckets and applications private — downloads are only accessible through authenticated access.",
              },
              {
                icon: <Lightning className="h-8 w-8" />,
                title: "Performance",
                description: "Fast and efficient system operation with minimal user intervention.",
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