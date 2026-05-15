import React, { useEffect, useRef, useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Cloud, Hash, Zap, Globe, Rocket, Wrench, Laptop, Globe2, Smartphone, Shield, Zap as Lightning, Users, BarChart2, GitMerge, RefreshCw, Star, Download, Upload, Settings, Database, Lock, Clock, TrendingUp } from 'lucide-react'
import AnimatedBanner from '../AnimatedBanner';

const hexToRgb = (hex: string) => {
  const normalizedHex = hex.replace('#', '');
  const value = Number.parseInt(normalizedHex, 16);

  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
};

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set<string>());
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set<string>());
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cardRevealTimers: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => {
              if (prev.has(entry.target.id)) {
                return prev;
              }

              return new Set(prev).add(entry.target.id);
            });
            
            if (entry.target.id === 'features') {
              const revealFeatures = () => {
                setVisibleCards((prev) => {
                  if (prev.has('features-cards')) {
                    return prev;
                  }

                  return new Set(prev).add('features-cards');
                });
              };

              if (prefersReducedMotion) {
                revealFeatures();
              } else {
                cardRevealTimers.push(window.setTimeout(revealFeatures, 360));
              }
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -80px 0px' }
    );

    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      cardRevealTimers.forEach((timer) => window.clearTimeout(timer));
      observer.disconnect();
    };
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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId = 0;
    let lastFrameTime = performance.now();
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;

      canvas.width = viewportWidth * dpr;
      canvas.height = viewportHeight * dpr;
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
      pulse: number;
    }> = [];

    const colors = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

    for (let i = 0; i < 64; i++) {
      particles.push({
        x: Math.random() * viewportWidth,
        y: Math.random() * viewportHeight,
        size: Math.random() * 2.4 + 1.1,
        speedX: (Math.random() - 0.5) * 14,
        speedY: (Math.random() - 0.5) * 14,
        opacity: Math.random() * 0.22 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2
      });
    }

    const animate = (currentTime: number) => {
      const deltaTime = Math.min((currentTime - lastFrameTime) / 1000, 0.05);
      lastFrameTime = currentTime;

      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      particles.forEach((particle) => {
        particle.x += particle.speedX * deltaTime;
        particle.y += particle.speedY * deltaTime;

        if (particle.x < 0 || particle.x > viewportWidth) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > viewportHeight) particle.speedY *= -1;

        particle.x = Math.max(0, Math.min(viewportWidth, particle.x));
        particle.y = Math.max(0, Math.min(viewportHeight, particle.y));

        const glowSize = particle.size + Math.sin(currentTime * 0.0015 + particle.pulse) * 0.5;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      particles.forEach((particle, particleIndex) => {
        for (let nextIndex = particleIndex + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(particle.x - nextParticle.x, particle.y - nextParticle.y);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nextParticle.x, nextParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - distance / 120) * 0.08;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
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
    </div>
  );
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const buildSparklinePath = (values: number[], width = 220, height = 72) => {
  if (!values.length) return ''

  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const step = width / Math.max(values.length - 1, 1)

  return values
    .map((value, index) => {
      const x = index * step
      const y = height - ((value - min) / range) * height
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')
}

const releaseStages = ['build', 'upload', 'test', 'publish', 'clients'] as const
type ReleaseStage = (typeof releaseStages)[number]
const releaseStageLabels: Record<ReleaseStage, string> = {
  build: 'Build',
  upload: 'Upload',
  test: 'Test',
  publish: 'Publish',
  clients: 'Clients',
}

const releaseStageMeta: Record<ReleaseStage, { title: string; detail: string }> = {
  build: {
    title: 'Build artifacts',
    detail: 'CI/CD compiles and signs release bundles.',
  },
  upload: {
    title: 'Upload package',
    detail: 'Signed archive streams to FaynoSync.',
  },
  test: {
    title: 'Validate release',
    detail: 'Quality gates verify readiness and integrity.',
  },
  publish: {
    title: 'Publish rollout',
    detail: 'Approved release becomes trusted for delivery.',
  },
  clients: {
    title: 'Distribute clients',
    detail: 'One release propagates across all endpoints.',
  },
}

const HeroUpdateFlow = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeStage = releaseStages[activeStageIndex]

  useEffect(() => {
    const stageDurations = [5200, 4800, 5000, 4600, 5600]
    const timeoutId = window.setTimeout(
      () => setActiveStageIndex((prev) => (prev + 1) % releaseStages.length),
      reduceMotion ? 6200 : stageDurations[activeStageIndex]
    )

    return () => window.clearTimeout(timeoutId)
  }, [activeStageIndex, reduceMotion])

  const sceneTransition = reduceMotion
    ? { duration: 0.35, ease: 'easeOut' as const }
    : { type: 'spring' as const, stiffness: 120, damping: 22, mass: 0.95 }

  return (
    <div className="premium-hero-update-flow fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="premium-hero-grid">
        <div className="premium-hero-copy">
          <div className="premium-copy-badge">Live release orchestration</div>
          <h2>From CI build to every client endpoint.</h2>
          <p>
            faynoSync visualizes and controls the software distribution lifecycle in one reliable pipeline.
            Ship signed builds, validate quality gates, and roll out safely across platforms.
          </p>
          <div className="premium-copy-points" aria-label="faynoSync core capabilities">
            <span><Wrench size={14} /> CI/CD aware delivery</span>
            <span><Shield size={14} /> Verified update flow</span>
            <span><Globe size={14} /> Multi-platform fan-out</span>
          </div>
          <div className="premium-copy-cta">
            <Link
              to="/docs/getting-started"
              className="enhanced-button button-primary premium-hero-button"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo"
              className="enhanced-button button-primary premium-hero-button premium-hero-button-ghost"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        <div className="premium-hero-visual">
          <div className="hero-release-board">
            <div className="release-stage-row" aria-label="Release pipeline animation">
              {releaseStages.map((stage) => {
                const isActive = activeStage === stage

                return (
                  <button
                    key={stage}
                    type="button"
                    className={`release-stage ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveStageIndex(releaseStages.indexOf(stage))}
                    aria-pressed={isActive}
                  >
                    <span className="stage-title">{releaseStageLabels[stage]}</span>
                    <span className="stage-meta">{releaseStageMeta[stage].title}</span>
                    {isActive && (
                      <motion.span
                        className="stage-progress-line"
                        layoutId="active-stage-progress"
                        transition={sceneTransition}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className={`hero-topology stage-view-${activeStage}`}>
            <div className="hero-topology-noise" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                className={`topology-scene scene-${activeStage}`}
                initial={{ opacity: 0, filter: 'blur(9px)', y: reduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(7px)', y: reduceMotion ? 0 : -8 }}
                transition={sceneTransition}
              >
                {activeStage === 'build' && (
                  <div className="premium-scene-build" aria-label="Build stage in CI/CD">
                    <svg viewBox="0 0 700 450" className="premium-scene-svg" role="img" aria-label="Build pipeline topology">
                      <path className="premium-wire" d="M102 109 H350" />
                      <path className="premium-wire" d="M350 109 H600" />
                    </svg>
                    <div className="premium-node node-build-source">
                      <Wrench size={15} />
                      <span>CI/CD</span>
                    </div>
                    <div className="premium-node node-build-compile">
                      <Hash size={15} />
                      <span>Compile</span>
                    </div>
                    <div className="premium-node node-build-artifact">
                      <Download size={15} />
                      <span>Artifact</span>
                    </div>
                    <div className="premium-build-terminal" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="premium-build-bars" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                )}

                {activeStage === 'upload' && (
                  <div className="premium-scene-upload" aria-label="Upload stage to FaynoSync server">
                    <svg viewBox="0 0 700 450" className="premium-scene-svg" role="img" aria-label="Upload topology">
                      <path className="premium-wire" d="M165 135 H538" />
                    </svg>
                    <div className="premium-node node-upload-source">
                      <Download size={15} />
                      <span>Signed bundle</span>
                    </div>
                    <div className="premium-node node-upload-target">
                      <Cloud size={15} />
                      <span>FaynoSync Server</span>
                    </div>
                    <div className="premium-upload-stream" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}

                {activeStage === 'test' && (
                  <div className="premium-scene-test" aria-label="Testing stage with validation nodes">
                    <svg viewBox="0 0 700 450" className="premium-scene-svg" role="img" aria-label="Testing topology">
                      <path className="premium-wire" d="M350 118 V204" />
                      <path className="premium-wire" d="M350 204 H172" />
                      <path className="premium-wire" d="M350 204 H528" />
                    </svg>
                    <div className="premium-node node-test-hub">
                      <Shield size={15} />
                      <span>QA Control</span>
                    </div>
                    <div className="premium-check-list" aria-hidden="true">
                      <div><TrendingUp size={13} /> API checks</div>
                      <div><Zap size={13} /> Smoke tests</div>
                      <div><Lock size={13} /> Signature verify</div>
                    </div>
                  </div>
                )}

                {activeStage === 'publish' && (
                  <div className="premium-scene-publish" aria-label="Publish approved release">
                    <svg viewBox="0 0 700 450" className="premium-scene-svg" role="img" aria-label="Publish topology">
                      <path className="premium-wire" d="M168 141 H536" />
                    </svg>
                    <div className="premium-node node-publish-release">
                      <Rocket size={16} />
                      <span>Release candidate</span>
                    </div>
                    <div className="premium-node node-publish-server">
                      <Database size={16} />
                      <span>Trusted registry</span>
                    </div>
                    <div className="premium-publish-status" aria-hidden="true">Approved and published</div>
                  </div>
                )}

                {activeStage === 'clients' && (
                  <div className="premium-scene-clients" aria-label="Distribution from server to clients">
                    <svg viewBox="0 0 700 450" className="premium-scene-svg" role="img" aria-label="Client distribution topology">
                      <path className="premium-wire" d="M350 224 L201 73" />
                      <path className="premium-wire" d="M350 224 L499 73" />
                      <path className="premium-wire" d="M350 224 L201 379" />
                      <path className="premium-wire" d="M350 224 L499 379" />
                      <path className="premium-wire" d="M350 224 L93 224" />
                      <path className="premium-wire" d="M350 224 L607 224" />
                    </svg>
                    <div className="premium-node node-clients-core">
                      <Cloud size={16} />
                      <span>FaynoSync Server</span>
                    </div>
                    <div className="premium-node node-client linux"><Laptop size={14} /><span>Linux</span></div>
                    <div className="premium-node node-client windows"><Laptop size={14} /><span>Windows</span></div>
                    <div className="premium-node node-client mac"><Laptop size={14} /><span>macOS</span></div>
                    <div className="premium-node node-client arm"><Smartphone size={14} /><span>ARM</span></div>
                    <div className="premium-node node-client electron"><Globe2 size={14} /><span>Electron</span></div>
                    <div className="premium-node node-client edge"><Cloud size={14} /><span>Edge</span></div>
                    <div className="premium-fanout-packets" aria-hidden="true">
                      <span className="packet-1" />
                      <span className="packet-2" />
                      <span className="packet-3" />
                      <span className="packet-4" />
                      <span className="packet-5" />
                      <span className="packet-6" />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="hero-stage-caption">
              Active stage: <strong>{releaseStageLabels[activeStage]}</strong>
            </div>
            <p className="premium-stage-detail">{releaseStageMeta[activeStage].detail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dashboard mockup component
const DashboardMockup = ({ isBooting }: { isBooting: boolean }) => {
  const [requestsSeries, setRequestsSeries] = useState([1820, 1960, 2075, 2140, 2215, 2280, 2350, 2410])
  const [outdatedSeries, setOutdatedSeries] = useState([102, 97, 92, 88, 84, 80, 77, 72])
  const [versionUsage, setVersionUsage] = useState([72, 18, 10])
  const [channelDistribution, setChannelDistribution] = useState([68, 24, 8])
  const [outdatedClients, setOutdatedClients] = useState(72)
  const [latestVersionUsers, setLatestVersionUsers] = useState(2837)
  const [totalRequests, setTotalRequests] = useState(20943)
  const [uniqueClients, setUniqueClients] = useState(1364)

  useEffect(() => {
    const updateInterval = window.setInterval(() => {
      setTotalRequests((prev) => prev + 18 + Math.floor(Math.random() * 11))
      setUniqueClients((prev) => prev + (Math.random() > 0.6 ? 1 : 0))
      setLatestVersionUsers((prev) => prev + (Math.random() > 0.55 ? 1 : 0))
      setOutdatedClients((prev) => clamp(prev + (Math.random() > 0.7 ? 1 : -1), 58, 86))

      setRequestsSeries((prev) => [...prev.slice(1), prev[prev.length - 1] + 18 + Math.floor(Math.random() * 9)])
      setOutdatedSeries((prev) => [...prev.slice(1), clamp(prev[prev.length - 1] + (Math.random() > 0.6 ? -1 : 0), 58, 84)])
      setVersionUsage((prev) => {
        const next = [
          clamp(prev[0] + (Math.random() > 0.5 ? 1 : 0), 68, 78),
          clamp(prev[1] + (Math.random() > 0.7 ? 1 : -1), 14, 23),
          0,
        ]
        next[2] = 100 - next[0] - next[1]
        return next
      })
      setChannelDistribution((prev) => {
        const stable = clamp(prev[0] + (Math.random() > 0.55 ? 1 : -1), 64, 72)
        const beta = clamp(prev[1] + (Math.random() > 0.55 ? -1 : 1), 20, 27)
        return [stable, beta, 100 - stable - beta]
      })
    }, 2600)

    return () => window.clearInterval(updateInterval)
  }, [])

  const requestTrend = requestsSeries[requestsSeries.length - 1] - requestsSeries[0]
  const outdatedTrend = outdatedSeries[outdatedSeries.length - 1] - outdatedSeries[0]

  const requestsPath = buildSparklinePath(requestsSeries)
  const outdatedPath = buildSparklinePath(outdatedSeries)
  const channelGradient = `conic-gradient(#34D399 0 ${channelDistribution[0]}%, #60A5FA ${channelDistribution[0]}% ${channelDistribution[0] + channelDistribution[1]}%, #F59E0B ${channelDistribution[0] + channelDistribution[1]}% 100%)`

  return (
    <div className={`dashboard-mockup ${isBooting ? 'booting' : ''}`}>
      <div className="mockup-window">
        <div className="mockup-header">
          <div className="mockup-dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="mockup-title">FaynoSync Telemetry</div>
          <div className="mockup-live-pill">
            <span className="live-indicator" />
            <span>Live</span>
          </div>
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
            <div className="stats-grid telemetry-grid">
              <div className="stat-card telemetry-card">
                <div className="stat-label">Total Requests</div>
                <div className="stat-number animated-counter">{totalRequests.toLocaleString()}</div>
              </div>
              <div className="stat-card telemetry-card">
                <div className="stat-label">Unique Clients</div>
                <div className="stat-number animated-counter">{uniqueClients.toLocaleString()}</div>
              </div>
              <div className="stat-card telemetry-card">
                <div className="stat-label">Latest Version Users</div>
                <div className="stat-number animated-counter">{latestVersionUsers.toLocaleString()}</div>
              </div>
              <div className="stat-card telemetry-card">
                <div className="stat-label">Outdated Clients</div>
                <div className="stat-number animated-counter">{outdatedClients}</div>
              </div>
            </div>

            <div className="telemetry-charts-grid">
              <div className="chart-container">
                <div className="chart-title">Total Requests Trend</div>
                <svg viewBox="0 0 220 72" className="sparkline-chart" role="img" aria-label="Total Requests Trend">
                  <path d={requestsPath} className="sparkline-path requests-path" />
                </svg>
                <div className="sparkline-footer">
                  <span className="sparkline-value">{requestsSeries[requestsSeries.length - 1].toLocaleString()}</span>
                  <span className={`sparkline-trend ${requestTrend >= 0 ? 'positive' : 'negative'}`}>
                    {requestTrend >= 0 ? '+' : ''}
                    {requestTrend}
                  </span>
                </div>
              </div>

              <div className="chart-container">
                <div className="chart-title">Outdated Clients Trend</div>
                <svg viewBox="0 0 220 72" className="sparkline-chart" role="img" aria-label="Outdated Clients Trend">
                  <path d={outdatedPath} className="sparkline-path outdated-path" />
                </svg>
                <div className="sparkline-footer">
                  <span className="sparkline-value">{outdatedSeries[outdatedSeries.length - 1]} devices</span>
                  <span className={`sparkline-trend ${outdatedTrend <= 0 ? 'positive' : 'negative'}`}>
                    {outdatedTrend > 0 ? '+' : ''}
                    {outdatedTrend}
                  </span>
                </div>
              </div>

              <div className="chart-container">
                <div className="chart-title">Version Usage</div>
                <div className="usage-bars">
                  <div className="usage-bar-item">
                    <div className="usage-bar-track">
                      <div className="usage-bar-fill latest" style={{ height: `${versionUsage[0]}%` }} />
                    </div>
                    <div className="usage-bar-label">0.57.x</div>
                  </div>
                  <div className="usage-bar-item">
                    <div className="usage-bar-track">
                      <div className="usage-bar-fill previous" style={{ height: `${versionUsage[1]}%` }} />
                    </div>
                    <div className="usage-bar-label">0.56.x</div>
                  </div>
                  <div className="usage-bar-item">
                    <div className="usage-bar-track">
                      <div className="usage-bar-fill legacy" style={{ height: `${versionUsage[2]}%` }} />
                    </div>
                    <div className="usage-bar-label">legacy</div>
                  </div>
                </div>
              </div>

              <div className="chart-container">
                <div className="chart-title">Channel Distribution</div>
                <div className="pie-chart-wrap">
                  <div className="pie-chart" style={{ background: channelGradient }} />
                  <div className="pie-legend">
                    <span className="legend-item"><i className="legend-dot stable" />Stable {channelDistribution[0]}%</span>
                    <span className="legend-item"><i className="legend-dot beta" />Beta {channelDistribution[1]}%</span>
                    <span className="legend-item"><i className="legend-dot canary" />Canary {channelDistribution[2]}%</span>
                  </div>
                </div>
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
    description: 'Keep your S3 buckets and applications private — downloads are only accessible through authenticated access or verified with The Update Framework (TUF).',
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
        {/* <div className="relative" style={{ zIndex: 10 }}>
          <AnimatedBanner fadeOut={false} />
        </div> */}
        
        {/* Enhanced Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[88vh] text-white px-4 py-8" style={{ zIndex: 10 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 hero-title">
            <span className="gradient-text">FaynoSync</span>
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl fade-in-up">
            {siteConfig.tagline}
          </p>
          <HeroUpdateFlow />
        </section>

        {/* Introduction Section */}
        <section 
          className={`py-16 px-4 bg-white/5 scroll-reveal ${visibleSections.has('intro') ? 'revealed' : ''}`}
          data-scroll-section
          id="intro"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12 section-title-enhanced">
              <span className="gradient-text">Why Choose FaynoSync?</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  The Complete Auto-Updater Solution
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  FaynoSync simplifies secure desktop app updates across platforms and cloud providers with one unified workflow.
                </p>
                <p className="text-lg text-gray-200 mb-6">
                  Built for reliability and fast integration, it combines multi-cloud distribution, API-first automation, telemetry-driven insights, and performance-focused delivery.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Star className="h-5 w-5 text-yellow-400 tech-icon" />
                    <span className="text-white">Enterprise Ready</span>
                  </div>
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Lock className="h-5 w-5 text-green-400 tech-icon" />
                    <span className="text-white">Secure by Design</span>
                  </div>
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Zap className="h-5 w-5 text-blue-400 tech-icon" />
                    <span className="text-white">High Performance</span>
                  </div>
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Download className="h-5 w-5 text-green-400 tech-icon" />
                    <span className="text-white">Multi-cloud storage and deployment flexibility</span>
                  </div>
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Upload className="h-5 w-5 text-blue-400 tech-icon" />
                    <span className="text-white">RESTful API and docs for quick integration</span>
                  </div>
                  <div className="flex items-center gap-3 tech-feature-item">
                    <Database className="h-5 w-5 text-purple-400 tech-icon" />
                    <span className="text-white">Optimized caching and low-latency update delivery</span>
                  </div>
                </div>

              </div>
              <div className="space-y-6">
                <div className="dashboard-mockup-container">
                  <DashboardMockup isBooting={visibleSections.has('intro')} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Key Features Section */}
        <section 
          className={`py-16 px-4 relative scroll-reveal reveal-pattern-features ${visibleSections.has('features') ? 'revealed' : ''}`}
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
                  '--card-rgb': hexToRgb(feature.color),
                  '--animation-delay': `${idx * 80}ms`,
                  animationDelay: visibleCards.has('features-cards') ? `${idx * 80}ms` : '0ms'
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
          className={`py-16 px-4 bg-white/5 section-enhanced scroll-reveal reveal-pattern-usecases ${visibleSections.has('usecases') ? 'revealed' : ''}`}
          data-scroll-section
          id="usecases"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12 section-title-enhanced">
              <span className="gradient-text">Perfect For</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, idx) => (
                <div
                  key={useCase.title}
                  className={`enhanced-use-case-card use-case-slide-${idx % 2 === 0 ? 'left' : 'right'} bg-white/10 rounded-xl p-8 backdrop-blur-sm group`}
                >
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