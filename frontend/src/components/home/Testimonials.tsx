export default function TestimonialSection() {
  return (
    <section className="w-full px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full relative">
         <img src="/border.svg" className='right-0 top-0 absolute w-2 h-2' alt="" />
            <img src="/border.svg" className='left-0 rotate-269 top-0 absolute w-2 h-2' alt="" />
            <img src="/border.svg" className='bottom-0 right-0 rotate-90 absolute w-2 h-2' alt="" />
            <img src="/border.svg" className='bottom-0 left-0 rotate-180 absolute w-2 h-2' alt="" />
        <div className="p-12 bg-gray-100  border border-gray-200">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl max-w-[462px] font-bold font-Kairos leading-snug text-[#0A0A0A] sm:text-4xl lg:text-[2.4rem]">
                “When your POS goes down, that has a true financial cost to your business”
              </h2>

              <p className="mb-10 text-base leading-relaxed text-[#5D5D5D] max-w-xl">
                Once Ditto is installed in your applications, write a few simple queries, and watch your mobile and edge devices automatically form mesh networks and share data directly without the need for servers or access points.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
               <button className="group flex items-center text-base gap-2 px-2 py-1 md:py-2 font-medium text-gray-900 transition-all bg-[#EAF044] rounded-xl hover:scale-105">
  <div className="w-10 h-10 bg-[#0A0A0A1A] hover:bg-black transition-all duration-500 ease-in-out rounded-lg flex items-center justify-center relative overflow-hidden">
    {/* White Icon (initially visible) */}
    <img
      src="/11.svg"
      alt="white icon"
      className="w-5 h-5 absolute transition-all duration-500 ease-in-out transform group-hover:translate-x-full group-hover:opacity-0"
    />

    {/* Black Icon (slides in on hover) */}
    <img
      src="/1.png"
      alt="black icon"
      className="w-5 h-5 absolute  transition-all duration-500 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0  group-hover:opacity-100"
    />
  </div>

  HEAR THE FULL STORY
</button>


                 <button className="px-6 py-2 bg-white text-base font-medium text-gray-900 transition-colors border border-gray-200 md:py-4 rounded-xl hover:bg-gray-200 hover:text-gray-700">
              SEE MORE CUSTOMERS
            </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex relative justify-center lg:justify-end">
              <div className=" w-full max-w-xl">
                               <div className="relative inline-block group">
  {/* Gray Animated Square */}
  <div className="w-8 h-7 bg-gray-100 transition-all duration-500 ease-in-out absolute top-0 -left-2 group-hover:scale-120 group-hover:translate-x-1"></div>

  {/* Image */}
  <img
    src="/testimonialpicture.svg"
    alt="Testimonial"
    className="object-cover w-full h-auto z-10  "
  />

  {/* Blue Circle with Centered Icon */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-20 h-20 backdrop-blur-sm rounded-full flex items-center justify-center  scale-75 transition-all duration-500 ease-in-out ">
      <img
        src="/11.svg"
        alt="Share Icon"
        className="w-7 h-7 "
      />
    </div>
  </div>
</div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
