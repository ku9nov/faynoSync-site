import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from '@docusaurus/Link'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { SiElectron, SiTauri } from 'react-icons/si'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './styles.module.css'

type Updater = {
  key: string
  name: string
  type: string
  tagline: string
  color: string
  color2: string
  href: string
  logo: React.ReactNode
}

const VelopackLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 4 42 14v20L24 44 6 34V14L24 4Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
    <path d="M17 17l7 15 7-15" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SquirrelLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M15 40c-3-6-1-14 5-17-4-1-8-5-8-10 3 2 6 2 9 1-2-3-1-7 2-9 1 4 3 6 6 7 3-2 7-2 10 0-3 1-5 3-6 6 5 2 8 7 7 12-1-3-4-5-7-5 3 3 4 8 2 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 40h11c2 0 3-2 2-4-1-3-4-5-7-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20.5" cy="20.5" r="1.4" fill="currentColor" />
  </svg>
)

const ManualLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M30 8a9 9 0 0 0-8.5 12L9 32.5a4 4 0 0 0 5.6 5.6L27 25.5A9 9 0 1 0 30 8Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
    <circle cx="31" cy="17" r="2.6" fill="currentColor" />
  </svg>
)

const updaters: Updater[] = [
  {
    key: 'velopack',
    name: 'Velopack',
    type: 'velopack',
    tagline: 'Native feed protocol — cross-platform updates with no per-language SDK, delta updates, CDN by default.',
    color: '#7c5cff',
    color2: '#4d7cff',
    href: '/docs/updaters/velopack',
    logo: <VelopackLogo />,
  },
  {
    key: 'electron',
    name: 'Electron Builder',
    type: 'electron-builder',
    tagline: 'Drop-in electron-updater backend — faynoSync generates the *.yml manifests your app reads.',
    color: '#9feaf9',
    color2: '#47848f',
    href: '/docs/updaters/electron-builder',
    logo: <SiElectron />,
  },
  {
    key: 'tauri',
    name: 'Tauri',
    type: 'tauri',
    tagline: "Serve Tauri's built-in updater with the cryptographic signature it expects — nothing to wire up.",
    color: '#24c8db',
    color2: '#ffc131',
    href: '/docs/updaters/tauri',
    logo: <SiTauri />,
  },
  {
    key: 'squirrel-win',
    name: 'Squirrel Windows',
    type: 'squirrel_windows',
    tagline: 'Generates the RELEASES file Squirrel.Windows fetches — full and delta packages, served straight.',
    color: '#f08c3c',
    color2: '#c0561c',
    href: '/docs/updaters/squirrel-windows',
    logo: <SquirrelLogo />,
  },
  {
    key: 'squirrel-mac',
    name: 'Squirrel macOS',
    type: 'squirrel_darwin',
    tagline: 'Speaks the Squirrel.Mac update protocol for native macOS auto-updates out of the box.',
    color: '#e8724c',
    color2: '#a03a28',
    href: '/docs/updaters/squirrel-darwin',
    logo: <SquirrelLogo />,
  },
  {
    key: 'manual',
    name: 'Manual',
    type: 'manual',
    tagline: 'The default faynoSync flow — full control over version resolution with your own client logic.',
    color: '#b28bff',
    color2: '#8b5cf6',
    href: '/docs/updaters/manual',
    logo: <ManualLogo />,
  },
]

const AUTOPLAY_MS = 3000

const wrapOffset = (raw: number, len: number) => {
  let value = raw
  if (value > len / 2) value -= len
  if (value < -len / 2) value += len
  return value
}

const UpdaterCard = ({
  updater,
  offset,
  isActive,
  reduce,
  onClick,
}: {
  updater: Updater
  offset: number
  isActive: boolean
  reduce: boolean | null
  onClick: () => void
}) => {
  const abs = Math.abs(offset)
  const hidden = abs > 2.5

  return (
    <motion.button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-label={updater.name}
      aria-hidden={hidden}
      tabIndex={isActive ? 0 : -1}
      style={
        {
          '--accent': updater.color,
          '--accent-2': updater.color2,
          zIndex: 100 - Math.round(abs * 10),
          pointerEvents: hidden ? 'none' : 'auto',
        } as React.CSSProperties
      }
      animate={
        reduce
          ? { opacity: hidden ? 0 : 1 }
          : {
              x: `${offset * 62}%`,
              scale: isActive ? 1 : Math.max(0.7, 1 - abs * 0.16),
              rotateY: offset * -22,
              z: -abs * 160,
              opacity: hidden ? 0 : abs > 1.5 ? 0.35 : 1,
              filter: `blur(${isActive ? 0 : Math.min(abs * 2.2, 6)}px)`,
            }
      }
      transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.9 }}
    >
      <div className={styles.cardInner}>
        <motion.div
          className={styles.logo}
          animate={
            reduce || !isActive
              ? {}
              : { y: [0, -7, 0], rotate: [0, 2, 0, -2, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {updater.logo}
        </motion.div>
        <div className={styles.cardBody}>
          <span className={styles.type}>{updater.type}</span>
          <h3 className={styles.name}>{updater.name}</h3>
          <p className={styles.tagline}>{updater.tagline}</p>
          <Link
            to={updater.href}
            className={styles.docsLink}
            tabIndex={isActive ? 0 : -1}
            onClick={(e) => e.stopPropagation()}
          >
            View docs
            <ChevronRight className={styles.docsArrow} />
          </Link>
        </div>
      </div>
      <div className={styles.glow} />
    </motion.button>
  )
}

export default function UpdatersShowcase() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)

  const len = updaters.length

  const go = useCallback((dir: number) => {
    setActive((prev) => (prev + dir + len) % len)
  }, [len])

  useEffect(() => {
    if (paused || reduce) return
    const id = window.setInterval(() => setActive((prev) => (prev + 1) % len), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, reduce, len])

  // mouse parallax tilt
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 })
  const rotY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 })

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return
    const rect = stageRef.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onLeave = () => {
    setPaused(false)
    px.set(0)
    py.set(0)
  }

  return (
    <section className={styles.section} id="updaters" data-scroll-section>
      <h2 className={`text-4xl font-bold text-center text-white mb-4 section-title-enhanced ${styles.heading}`}>
        <span className="gradient-text">Works With Your Updater</span>
      </h2>
      <p className={styles.subtitle}>
        One backend, every desktop update mechanism. Pick the client you already ship —
        faynoSync speaks its protocol natively.
      </p>

      <div
        className={styles.stage}
        ref={stageRef}
        onMouseMove={onMove}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={onLeave}
      >
        <motion.div
          className={styles.track}
          style={reduce ? undefined : { rotateX: rotX, rotateY: rotY }}
        >
          {updaters.map((u, i) => (
            <UpdaterCard
              key={u.key}
              updater={u}
              offset={wrapOffset(i - active, len)}
              isActive={i === active}
              reduce={reduce}
              onClick={() => setActive(i)}
            />
          ))}
        </motion.div>

        <button
          type="button"
          className={`${styles.nav} ${styles.navPrev}`}
          onClick={() => go(-1)}
          aria-label="Previous updater"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className={`${styles.nav} ${styles.navNext}`}
          onClick={() => go(1)}
          aria-label="Next updater"
        >
          <ChevronRight />
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Select updater">
        {updaters.map((u, i) => (
          <button
            key={u.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={u.name}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            style={{ '--accent': u.color } as React.CSSProperties}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}
