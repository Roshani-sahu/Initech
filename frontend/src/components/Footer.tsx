export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 overflow-x-hidden">
      <div className="px-8 py-16 mx-auto max-w-full">
        <div className="grid grid-cols-5 gap-12">
          {/* Logo and Copyright */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-lg font-semibold text-gray-700">Ditto</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              © 2025 DITTOLIVE INCORPORATED
              <br />
              ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • PLATFORM
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • OUR CUSTOMERS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • PRICING
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • CAREERS
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • BLOG
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • DEMO APPS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • IN THE NEWS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • PRESS RELEASES
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • MAKE A REPORT
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">SOCIALS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • LINKEDIN
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • GITHUB
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • TWITTER / X
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • COOKIE POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                  • TRIAL AGREEMENT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
