import { motion } from 'framer-motion'
import { BookOpen, FlaskConical, Calculator, Trophy, CircuitBoard, BrainCircuit } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    title: 'Foundation (VI - X)',
    desc: 'Strengthen concepts in Math & Science with continuous assessments and doubt-solving.',
  },
  {
    icon: FlaskConical,
    title: 'IIT-JEE Coaching',
    desc: 'Rigorous training, problem-solving workshops, and mock tests for JEE Main & Advanced.',
  },
  {
    icon: Calculator,
    title: 'NEET Preparation',
    desc: 'Concept-driven learning with regular practice and revision for medical aspirants.',
  },
  {
    icon: Trophy,
    title: 'Olympiad & NTSE',
    desc: 'Special modules for competitive excellence with expert mentorship.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Programs we offer</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Carefully structured courses to build strong fundamentals and achieve top results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-700 grid place-content-center mb-4 group-hover:scale-105 transition-transform">
                <Icon />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Digital future banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl ring-1 ring-gray-100 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        >
          <div className="relative p-8 sm:p-10">
            <div className="absolute inset-0 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 120 Q150 60 300 120 T600 120 T900 120" fill="none" stroke="url(#g)" strokeWidth="2" />
              </svg>
            </div>
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white/80 text-sm">Next up</p>
                <h3 className="text-xl sm:text-2xl font-bold">Add-on tracks in AI, Data Science and Robotics</h3>
                <p className="text-white/90 mt-1 text-sm">Future-focused skill boosters alongside your core prep.</p>
              </div>
              <div className="flex items-center gap-2 text-blue-50/90">
                <CircuitBoard size={18} />
                <BrainCircuit size={18} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
