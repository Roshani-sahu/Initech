export default function Footer() {
    const routes = {
    Services: "/Services",
    "ABOUT US": "/about",
    "OUR CUSTOMERS": "/customers",
    PRICING: "/pricing",
    CAREERS: "/careers",
  };

   const socialLinks = {
    LINKEDIN: "https://www.linkedin.com/in/your-username",
    GITHUB: "https://github.com/your-username",
    "TWITTER / X": "https://twitter.com/your-username",
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-full mx-auto px-14 py-12">
        <div className="flex justify-between items-start gap-20 flex-wrap">
          
          {/* 🔹 Left: Logo and Copyright */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
                <img
                  src="/logos/initech.png"
                  alt="INITECH Logo"
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-700">INITECH</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              © 2025 INITECH SOLUTIONS PVT. LTD.
              <br />
              ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* 🔹 Right: Company, Socials, Legal (aligned right) */}
          <div className="flex gap-20 text-right">
            
            {/* COMPANY */}
            <div>
              <h3 className="text-xs font-bold tracking-widest text-gray-900 mb-3">COMPANY</h3>
              <ul className="space-y-1">
                {["Services", "ABOUT US", "OUR CUSTOMERS", "PRICING", "CAREERS"].map((item) => (
                  <li key={item}>
      <a
        href={routes[item]}
        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
      >
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
      <a
        href={socialLinks[item]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
      >
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
      </div>
    </footer>
  );
}
