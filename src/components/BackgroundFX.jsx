import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function BackgroundFX() {
  // Generate a starfield once
  const stars = useMemo(() => {
    const arr = []
    const count = 120
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      })
    }
    return arr
  }, [])

  // Constellation nodes
  const nodes = useMemo(() => {
    const pts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 50,
    }))
    const lines = []
    for (let i = 0; i < pts.length - 1; i++) {
      lines.push([pts[i], pts[i + 1]])
    }
    return { pts, lines }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute -top-40 -right-24 h-[42rem] w-[42rem] bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-56 -left-20 h-[46rem] w-[46rem] bg-gradient-to-br from-cyan-400/25 via-sky-400/20 to-indigo-400/20 blur-3xl rounded-full" />

      {/* Animated radial highlight */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-white/6 to-transparent"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Starfield */}
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, boxShadow: '0 0 12px rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Subtle dotted grid with mask fade */}
      <div className="absolute inset-0 opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" className="text-blue-400" />
        </svg>
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-x-0 top-24 w-full h-64" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.45">
          {nodes.lines.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={`${a.x}%`} y1={`${a.y}%`}
              x2={`${b.x}%`} y2={`${b.y}%`}
              stroke="url(#gradLine)" strokeWidth="1.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          <defs>
            <linearGradient id="gradLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    </div>
  )
}
