export default function CTA() {
  return (
    <section id="apply" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-10 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">Book a free counseling session</h3>
          <p className="mt-2 text-white/90">Tell us your goals, and we’ll craft a personalized learning plan.</p>
          <form onSubmit={(e)=> e.preventDefault()} className="mt-6 grid sm:grid-cols-3 gap-3">
            <input required type="text" placeholder="Your name" className="col-span-1 sm:col-span-1 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-500" />
            <input required type="tel" placeholder="Phone number" className="col-span-1 sm:col-span-1 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-500" />
            <button className="col-span-1 inline-flex items-center justify-center rounded-md bg-white text-blue-700 font-semibold px-4 py-3 hover:bg-blue-50">Request Callback</button>
          </form>
          <p className="mt-3 text-sm text-white/80">We typically respond within the same day.</p>
        </div>
      </div>
    </section>
  )
}
