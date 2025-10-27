import React from 'react';

const MissionCritical = () => {
  return (
    <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
          <h2 className="max-w-3xl mb-10 text-5xl font-normal leading-tight text-gray-900 font-Kairos lg:text-6xl">
              Keep mission-critical systems online when it matters most
            </h2>
        <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            
          
            {/* Description */}
            <p className="mb-12 text-lg leading-relaxed text-[#0A0A0A]">
              Ditto is the only edge-native, mobile database that can consistently support your business anytime, anywhere. Edge-native solutions are built specifically to thrive on mobile and edge devices, without relying solely on cloud-based services.
            </p>

            {/* Features List */}
            <ul className="mb-12 space-y-6">
              <li className="flex items-start">
                <div>
                  <span className="font-semibold text-gray-900">Build flexible operations</span>
                  <span className="text-gray-700"> that are both latency-sensitive and resilient without reliance on network hardware, edge servers, or the cloud</span>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold text-gray-900">Decentralize your systems</span>
                  <span className="text-gray-700"> to remove single points of failure that lead to operational bottlenecks</span>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold text-gray-900">Drive consistent revenue and customer service</span>
                  <span className="text-gray-700"> anywhere, regardless of connectivity or bandwidth</span>
                </div>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 font-semibold text-gray-900 transition-colors bg-[#EAF044] rounded-md hover:bg-[#EAF044]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                TRY DITTO FOR FREE
              </button>
              <button className="px-6 py-3 text-sm font-medium text-gray-900 uppercase transition-colors hover:text-gray-700">
                Meet with a product specialist
              </button>
            </div>
          </div>

          {/* Right Diagram */}
          <div className="relative ">
            <img src="/border.svg" className='right-0 top-0 absolute w-2 h-2' alt="" />
            <div className="p-8 border border-gray-200  bg-gray-50 lg:p-12">
                          <img src="/homepage.svg" alt="" />

              
               {/*<div className="grid grid-cols-2 gap-8">
                
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">P2P Sync Plan</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="mb-2 text-xs text-gray-500 uppercase">Access Point</div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                        <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="mb-2 text-xs text-gray-500 uppercase">Access Point</div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                        <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-20 h-24 p-4 bg-white border-2 border-gray-300 rounded-lg">
                      <div className="absolute flex items-center justify-center w-8 h-8 bg-[#EAF044] rounded-full -bottom-3 -right-3">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-24 p-4 mb-2 bg-white border border-gray-200 rounded-lg">
                      <div className="mb-2 text-xs font-semibold text-center text-orange-500">SERVER</div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-orange-500 uppercase">Offline</div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-20 h-24 p-4 bg-white border-2 border-gray-300 rounded-lg">
                      <div className="absolute flex items-center justify-center w-8 h-8 bg-[#EAF044] rounded-full -bottom-3 -right-3">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative text-center">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Device Sync Plan</h3>
                    <div className="absolute right-0 px-3 py-1 text-xs text-gray-500 bg-white border border-gray-200 rounded-full -top-8">
                      CLOUD
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="mb-2 text-xs text-gray-500 uppercase">Access Point</div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                        <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="mb-2 text-xs text-gray-500 uppercase">Access Point</div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                        <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-20 h-24 p-4 bg-white border-2 border-gray-300 rounded-lg">
                      <div className="absolute flex items-center justify-center w-8 h-8 bg-[#EAF044] rounded-full -bottom-3 -right-3">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-24 p-4 mb-2 bg-white border border-gray-200 rounded-lg">
                      <div className="mb-2 text-xs font-semibold text-center text-orange-500">SERVER</div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-orange-500 uppercase">Offline</div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-20 h-24 p-4 bg-white border-2 border-gray-300 rounded-lg">
                      <div className="absolute flex items-center justify-center w-8 h-8 bg-[#EAF044] rounded-full -bottom-3 -right-3">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
              */}
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionCritical;