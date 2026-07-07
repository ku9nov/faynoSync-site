import React, { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

type Props = {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  index: number
}

export default function UseCaseCard({ title, description, icon, color, index }: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 200, damping: 22 })
  const rotY = useSpring(useTransform(px, [0, 1], [-9, 9]), { stiffness: 200, damping: 22 })

  const mx = useTransform(px, (v) => `${v * 100}%`)
  const my = useTransform(py, (v) => `${v * 100}%`)
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx} ${my}, color-mix(in srgb, ${color} 26%, transparent), transparent 65%)`

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { perspective: 900 }}
      className="h-full"
    >
      <motion.div
        style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
        className="h-full"
      >
        <div
          className={`enhanced-use-case-card use-case-slide-${index % 2 === 0 ? 'left' : 'right'} rounded-xl p-8 backdrop-blur-sm group h-full`}
          style={{ '--use-case-color': color } as React.CSSProperties}
        >
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="use-case-spotlight"
              style={{ background: spotlight }}
            />
          )}
          <div className="enhanced-use-case-icon mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{icon}</div>
          <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
          <p className="text-gray-200 text-lg transition-colors duration-300 group-hover:text-white">{description}</p>
          <div className="use-case-hover-line"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}
