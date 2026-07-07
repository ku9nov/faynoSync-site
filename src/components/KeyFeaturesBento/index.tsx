import React, { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion'
import styles from './styles.module.css'

type Feature = {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  color: string
}

const hexToRgb = (hex: string) => {
  const value = Number.parseInt(hex.replace('#', ''), 16)
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`
}

const BIG = new Set([0, 4, 8])

export default function KeyFeaturesBento({ features }: { features: Feature[] }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const mx = useMotionValue(-1000)
  const my = useMotionValue(-1000)
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${mx}px ${my}px, rgba(139, 92, 246, 0.14), transparent 70%)`

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const onLeave = () => {
    mx.set(-1000)
    my.set(-1000)
  }

  return (
    <div className={styles.grid} ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      {!reduce && <motion.div className={styles.spotlight} style={{ background: spotlight }} aria-hidden="true" />}

      {features.map((feature, idx) => (
        <motion.div
          key={feature.title}
          className={`${styles.card} ${BIG.has(idx) ? styles.big : ''}`}
          style={
            {
              '--accent': feature.color,
              '--accent-rgb': hexToRgb(feature.color),
            } as React.CSSProperties
          }
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: Math.min(idx * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.beam} aria-hidden="true" />
          <div className={styles.inner}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>{feature.icon}</span>
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
