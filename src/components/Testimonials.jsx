import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Aarav Gupta',
    title: 'JEE Main Top 1%',
    quote: 'The mentorship and practice material were exceptional. My confidence soared with every mock test.'
  },
  {
    name: 'Sneha Patel',
    title: 'NEET AIR 756',
    quote: 'Clear explanations and regular doubt-solving sessions helped me master tough concepts.'
  },
  {
    name: 'Rohan Mehta',
    title: 'Olympiad Gold',
    quote: 'Focused problem-solving approach and feedback made all the difference.'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What students say</h2>
          <p className="mt-3 text-gray-600">Real stories of hard work and success.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative rounded-2xl bg-gradient-to-br from-white to-blue-50 p-6 ring-1 ring-gray-100 shadow-sm"
            >
              <Quote className="text-blue-600" />
              <p className="mt-4 text-gray-700">{t.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
