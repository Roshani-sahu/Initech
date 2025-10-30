export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-full mx-auto px-12 py-12">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr] gap-20">
          {/* Logo and Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Ditto Logo - Pixelated Grid Style */}
              <div className="flex gap-0.5">
                <div className="w-2 h-2 bg-gray-400"></div>
                <div className="w-2 h-2 bg-gray-400"></div>
                <div className="w-2 h-2 bg-gray-300"></div>
              </div>
              <div className="flex gap-0.5">
                <div className="w-2 h-2 bg-gray-400"></div>
                <div className="w-2 h-2 bg-gray-300"></div>
                <div className="w-2 h-2 bg-gray-300"></div>
              </div>
              <span className="text-sm font-semibold text-gray-600 ml-2">Ditto</span>
            </div>
            <p className="text-xs text-gray-600 leading-tight">
              © 2025 DITTOLIVE INCORPORATED
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
          <div>
            <h3 className="text-xs font-bold tracking-widest text-gray-900 mb-3">RESOURCES</h3>
            <ul className="space-y-1">
              {["BLOG", "DEMO APPS", "IN THE NEWS", "PRESS RELEASES", "MAKE A REPORT"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
            <h3 className="text-xs font-bold tracking-widest text-gray-900 mb-3">LEGAL</h3>
            <ul className="space-y-1">
              {["PRIVACY POLICY", "COOKIE POLICY", "TRIAL AGREEMENT"].map((item) => (
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
