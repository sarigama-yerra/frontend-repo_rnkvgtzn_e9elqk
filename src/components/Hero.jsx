import { motion } from 'framer-motion'
import { ArrowRight, Star, Play, Cpu, Sparkles, Rocket } from 'lucide-react'

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-24 overflow-hidden">
      {/* Futuristic background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute -top-40 right-1/3 h-[56rem] w-[56rem] rounded-full bg-gradient-to-tr from-blue-300/40 via-indigo-300/30 to-cyan-300/30 blur-3xl" />
        <div className="absolute -left-40 top-32 h-[44rem] w-[44rem] rounded-full bg-gradient-to-br from-cyan-200/40 via-blue-200/30 to-indigo-200/30 blur-3xl" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.22] [mask-image:linear-gradient(to_bottom,black,transparent)]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-500" />
          </svg>
        </div>
        {/* Floating nodes */}
        <motion.div aria-hidden className="absolute left-10 top-1/4 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_30px_8px_rgba(34,211,238,0.35)]" animate={{ y: [0, -16, 0] }} transition={floatTransition} />
        <motion.div aria-hidden className="absolute right-12 top-1/3 h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_26px_6px_rgba(129,140,248,0.35)]" animate={{ y: [0, 18, 0] }} transition={{ ...floatTransition, duration: 5 }} />
        <motion.div aria-hidden className="absolute right-1/2 bottom-10 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_24px_6px_rgba(96,165,250,0.35)]" animate={{ y: [0, -14, 0] }} transition={{ ...floatTransition, duration: 7 }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200">
                <Sparkles size={14} /> Future-ready learning
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Build your edge for the digital future
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Master STEM and emerging tech with expert-led coaching, hands-on practice, and data-driven progress.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white font-medium px-6 py-3 hover:bg-blue-700 shadow">
                  Get Started <ArrowRight size={18} />
                </a>
                <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 font-medium px-6 py-3 ring-1 ring-gray-200 hover:bg-gray-50">
                  Explore Programs
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2"><Star className="text-yellow-500" size={16}/> 4.8/5 Rated</div>
                <div className="flex items-center gap-2"><Play className="text-blue-600" size={16}/> Free demo classes</div>
              </div>

              {/* Animated tech badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200 shadow-sm">
                  <Cpu size={14} /> AI-driven analytics
                </motion.span>
                <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200 shadow-sm">
                  <Rocket size={14} /> Outcome-focused
                </motion.span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="relative rounded-2xl bg-gradient-to-br from-white to-blue-50 p-2 shadow-xl ring-1 ring-gray-100">
              {/* Futuristic card with animated orbit */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-white grid place-items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(6,182,212,0.08),transparent_35%)]" />
                <motion.div className="relative h-40 w-40 rounded-full border border-blue-200/60" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
                  <motion.div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_6px_rgba(59,130,246,0.45)]" animate={{ y: [0, -4, 0] }} transition={floatTransition} />
                  <motion.div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_6px_rgba(34,211,238,0.45)]" animate={{ y: [0, 4, 0] }} transition={{ ...floatTransition, duration: 5 }} />
                </motion.div>
                <div className="relative z-10 text-center">
                  <p className="text-sm font-medium text-blue-700">Next-gen learning</p>
                  <p className="text-2xl font-extrabold text-gray-900 tracking-tight">Data • Discipline • Discovery</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 ring-1 ring-gray-100 w-64">
                <p className="text-sm font-semibold text-gray-900">Top Results</p>
                <p className="text-sm text-gray-600">Our students consistently rank in top percentiles across exams.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
