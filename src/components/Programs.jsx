import { BookOpen, FlaskConical, Calculator, Trophy } from 'lucide-react'

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
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-700 grid place-content-center mb-4 group-hover:scale-105 transition-transform">
                <Icon />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
