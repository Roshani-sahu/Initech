export default function TestimonialSection() {
  return (
    <section className="w-full px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="p-12 bg-[#F7F8FA] rounded-lg border border-gray-200">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-extrabold leading-snug text-[#0A0A0A] sm:text-4xl lg:text-[2.4rem]">
                “When your POS goes down, that has a true financial cost to your business”
              </h2>

              <p className="mb-10 text-base leading-relaxed text-[#555] max-w-md">
                Once Ditto is installed in your applications, write a few simple queries, and watch your mobile and edge devices automatically form mesh networks and share data directly without the need for servers or access points.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-extrabold text-black transition-colors bg-[#EAF044] rounded-md hover:bg-[#EAF044] shadow-sm">
                  <img src="buttonicon" alt="" /> HEAR THE FULL STORY
                </button>

                <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  SEE MORE CUSTOMERS
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-xl">
                <img
                  src="/testimonialpicture.svg"
                  alt="Testimonial"
                  className="object-cover w-full h-auto rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
