import { Users, Lightbulb, ClipboardList, Award } from 'lucide-react'

const points = [
  { icon: Users, title: 'Expert Faculty', desc: 'Experienced mentors with proven track records.' },
  { icon: Lightbulb, title: 'Concept-first Learning', desc: 'Focus on understanding, not rote memorization.' },
  { icon: ClipboardList, title: 'Regular Assessments', desc: 'Weekly tests, analytics, and personalized feedback.' },
  { icon: Award, title: 'Result-Oriented', desc: 'Consistent top ranks across exams and boards.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why choose us</h2>
            <p className="mt-3 text-gray-600">We combine structured curriculum, experienced guidance, and continuous evaluation to drive outcomes.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                  <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 grid place-content-center mb-3">
                    <Icon size={18} />
                  </div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" alt="Coaching center" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
