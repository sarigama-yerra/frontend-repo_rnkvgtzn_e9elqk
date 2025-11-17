import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Brain, Atom, Rocket, CircuitBoard, Sparkles } from 'lucide-react'

const items = [
  { icon: Cpu, label: 'AI Coaching' },
  { icon: Brain, label: 'Cognitive Skills' },
  { icon: Atom, label: 'STEM Labs' },
  { icon: CircuitBoard, label: 'Robotics' },
  { icon: Rocket, label: 'Performance Boost' },
  { icon: Sparkles, label: 'Results-Driven' },
]

export default function HoloMarquee() {
  const row = useMemo(() => [...items, ...items, ...items], [])

  return (
    <div aria-hidden className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((i, idx) => (
          <div key={idx} className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 shadow-sm">
            <i.icon size={14} className="text-blue-600" />
            <span className="font-medium tracking-tight">{i.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
