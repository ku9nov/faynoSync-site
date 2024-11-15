import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { ArrowRight, Cloud, Hash, Zap, Globe, Rocket, Wrench, Laptop, Globe2, Smartphone } from 'lucide-react'


export function HeroSection() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">{siteConfig.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">{siteConfig.tagline}</p>
          <Link
            to="/docs/category/getting-started"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-primary text-white hover:text-white transition duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOTEzOTUgMS43OTA4NjA1LTQgNC00czQgMS43OTA4NjA1IDQgNC0xLjc5MDg2MDUgNC00IDQtNC0xLjc5MDg2MDUtNC00em0wLTE3YzAtMi4yMDkxMzk1IDEuNzkwODYwNS00IDQtNHM0IDEuNzkwODYwNSA0IDQtMS43OTA4NjA1IDQtNCA0LTQtMS43OTA4NjA1LTQtNHptMTcgMTdjMC0yLjIwOTEzOTUgMS43OTA4NjA1LTQgNC00czQgMS43OTA4NjA1IDQgNC0xLjc5MDg2MDUgNC00IDQtNC0xLjc5MDg2MDUtNC00em0wLTE3YzAtMi4yMDkxMzk1IDEuNzkwODYwNS00IDQtNHM0IDEuNzkwODYwNSA0IDQtMS43OTA4NjA1IDQtNCA0LTQtMS43OTA4NjA1LTQtNHptLTE3IDE3YzAtMi4yMDkxMzk1IDEuNzkwODYwNS00IDQtNHM0IDEuNzkwODYwNSA0IDQtMS43OTA4NjA1IDQtNCA0LTQtMS43OTA4NjA1LTQtNHptMC0xN2MwLTIuMjA5MTM5NSAxLjc5MDg2MDUtNCA0LTRzNCAxLjc5MDg2MDUgNCA0LTEuNzkwODYwNSA0LTQgNC00LTEuNzkwODYwNS00LTR6TTE5IDM0YzAtMi4yMDkxMzk1IDEuNzkwODYwNS00IDQtNHM0IDEuNzkwODYwNSA0IDQtMS43OTA4NjA1IDQtNCA0LTQtMS43OTA4NjA1LTQtNHptMC0xN2MwLTIuMjA5MTM5NSAxLjc5MDg2MDUtNCA0LTRzNCAxLjc5MDg2MDUgNCA0LTEuNzkwODYwNSA0LTQgNC00LTEuNzkwODYwNS00LTR6bS0xNyAxN2MwLTIuMjA5MTM5NSAxLjc5MDg2MDUtNCA0LTRzNCAxLjc5MDg2MDUgNCA0LTEuNzkwODYwNSA0LTQgNC00LTEuNzkwODYwNS00LTR6bTAtMTdjMC0yLjIwOTEzOTUgMS43OTA4NjA1LTQgNC00czQgMS43OTA4NjA1IDQgNC0xLjc5MDg2MDUgNC00IDQtNC0xLjc5MDg2MDUtNC00eiIvPjwvZz48L2c+PC9zdmc>')] bg-repeat" />
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <Layout title="FaynoSync" description="Effortless Updates, Maximum Flexibility">
      <HeroSection />
      <main>
        {/* How It Works Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SectionTitle>How FaynoSync Works</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              <Feature
                icon={Cloud}
                title="1. Upload to S3"
                description="Securely upload your application updates to Amazon S3."
              />
              <Feature
                icon={Hash}
                title="2. Set Version Numbers"
                description="Easily manage and set version numbers for your updates."
              />
              <Feature
                icon={Zap}
                title="3. API Integration"
                description="Seamlessly integrate our API for update notifications."
              />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionTitle>Key Features</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              <Feature
                icon={Globe}
                title="Unified Registry"
                description="A centralized registry for all your application types, ensuring consistency across platforms."
              />
              <Feature
                icon={Rocket}
                title="Seamless Updates"
                description="Effortlessly push updates to your applications with minimal user intervention."
              />
              <Feature
                icon={Wrench}
                title="Maximum Flexibility"
                description="Customize update processes to fit your specific needs and user preferences."
              />
            </div>
          </div>
        </section>

        {/* Supported Platforms Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SectionTitle>Supported Platforms</SectionTitle>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <Laptop className="h-8 w-8" />
                </div>
                <span className="text-lg font-medium">Desktop Apps</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <Globe2 className="h-8 w-8" />
                </div>
                <span className="text-lg font-medium">Browser Extensions</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <Smartphone className="h-8 w-8" />
                </div>
                <span className="text-lg font-medium">Mobile Applications</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

function SectionTitle({ children }) {
  return <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{children}</h2>
}

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="bg-primary text-white p-3 rounded-full mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}