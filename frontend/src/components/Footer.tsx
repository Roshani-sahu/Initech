export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 overflow-x-hidden">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          
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
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">COMPANY</h3>
            <ul className="space-y-2">
              {["PLATFORM", "ABOUT US", "OUR CUSTOMERS", "PRICING", "CAREERS"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    • {item}
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
                  <a
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    • {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* SOCIALS */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-900">SOCIALS</h3>
            <ul className="space-y-2">
              {["LINKEDIN", "GITHUB", "TWITTER / X"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    • {item}
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
                  <a
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    • {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom border for small touch */}
      
    </footer>
  );
}
