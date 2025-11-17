import { useState } from 'react'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white grid place-content-center shadow">
              <GraduationCap size={20} />
            </div>
            <span className="font-semibold text-gray-900 text-lg tracking-tight">EDT Center</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#apply" className="inline-flex items-center gap-1 rounded-md bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-blue-700 transition-colors">
              Apply Now <ChevronDown className="-rotate-90" size={16} />
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-100 py-3">
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="px-1 py-2 text-gray-700 hover:text-blue-600">
                  {l.label}
                </a>
              ))}
              <a href="#apply" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-blue-700">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
