import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <WhyUs />
        <Testimonials />
        <CTA />
        <footer id="contact" className="py-10 border-t mt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-gray-900">EDT Center</p>
                <p className="text-gray-600 mt-2">Quality coaching for ambitious students.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contact</p>
                <p className="text-gray-600 mt-2">Phone: +91-90000-12345</p>
                <p className="text-gray-600">Email: info@edtcenter.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Visit</p>
                <p className="text-gray-600 mt-2">Mon - Sat, 9am - 7pm</p>
                <p className="text-gray-600">Multiple campuses across city</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-8">© {new Date().getFullYear()} EDT Center. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
