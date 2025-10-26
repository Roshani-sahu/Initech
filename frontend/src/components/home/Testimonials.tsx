export default function TestimonialSection() {
  return (
    <section className="w-full px-4 py-12 bg-white sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 bg-gray-100 border-2 border-gray-300 rounded-lg sm:p-12 lg:p-16">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-4xl">
                "When your POS goes down, that has a true financial cost to your business"
              </h2>

              <p className="mb-8 text-sm leading-relaxed text-gray-700 sm:text-base">
                Once Ditto is installed in your applications, write a few simple queries, and watch your mobile and edge
                devices automatically form mesh networks and share data directly without the need for servers or access
                points.
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-black transition-colors bg-yellow-300 rounded hover:bg-yellow-400">
                  <span>⚡</span>
                  HEAR THE FULL STORY
                </button>

                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-900 transition-colors bg-white border border-gray-400 rounded hover:bg-gray-50">
                  SEE MORE CUSTOMERS
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-none">
                <img
                  src="/professional-man-in-casual-clothing-warm-lighting.jpg"
                  alt="Customer testimonial"
                  className="object-cover w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
