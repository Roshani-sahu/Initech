export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-full mx-auto px-12 py-12">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr] gap-20">
          {/* Logo and Copyright */}
          <div>
            <div className="flex items-center mb-6">
              {/* <div className="w-6 h-6 bg-gray-400 rounded"></div> */}
              <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
            <img
              src="/logos/initech.png"
              alt="INITECH Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
              <span className="text-lg font-semibold text-gray-700">INITECH</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              © 2025 INITECH SOLUTIONS PVT. LTD.
              <br />
              ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-gray-900 mb-3">COMPANY</h3>
            <ul className="space-y-1">
              {["PLATFORM", "ABOUT US", "OUR CUSTOMERS", "PRICING", "CAREERS"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          {/* <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">RESOURCES</h3>
            <ul className="space-y-2">
              {["BLOG", "DEMO APPS", "IN THE NEWS", "PRESS RELEASES", "MAKE A REPORT"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* SOCIALS */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-gray-900 mb-3">SOCIALS</h3>
            <ul className="space-y-1">
              {["LINKEDIN", "GITHUB", "TWITTER / X"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">LEGAL</h3>
            <ul className="space-y-2">
              {["PRIVACY POLICY"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
