import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="flex justify-center fixed w-full z-50"
      animate={{
        top: isScrolled ? "0rem" : "1rem",
        paddingTop: isScrolled ? "0rem" : "0.5rem",
        paddingBottom: isScrolled ? "0rem" : "0.5rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.header
        className="flex items-center justify-between px-4 md:px-6 border border-gray-300 bg-white"
        animate={{
          width: isScrolled ? "100%" : "90%",
          borderRadius: isScrolled ? "0px" : "1rem",
          paddingTop: isScrolled ? "0.75rem" : "0.5rem",
          paddingBottom: isScrolled ? "0.75rem" : "0.5rem",
          boxShadow: isScrolled
            ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Left Logo */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <img
              src="/logos/initech.png"
              alt="INITECH Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-black relative top-px">
            INITECH
          </span>
        </div>

        {/* Center Navigation (Desktop Only) */}
        <nav className="hidden lg:flex items-center text-[14px] font-extralight gap-6 text-black font-aeonik">
          {/* <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
            PRODUCTS <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
            SOLUTIONS <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
            COMPANY <ChevronDown size={14} />
          </div> */}
          {/* <div className="flex items-center gap-1 cursor-pointer hover:text-gr  ay-600">
            RESOURCES <ChevronDown size={14} />
          </div> */}
          <a href="/" className="text-lg hover:text-gray-600">
            HOME
          </a>
          <a href="/services" className="text-lg hover:text-gray-600">
            SERVICES
          </a>
          <a href="/about" className="text-lg hover:text-gray-600">
            ABOUT US
          </a>
          <a href="/contact" className="text-lg hover:text-gray-600">
            CONTACT
          </a>
        </nav>

        {/* Right Buttons (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* <button className="px-4 py-3 transition border border-gray-300 rounded-xl hover:bg-gray-50">
            DOCS
          </button>
          <button className="px-4 py-3 transition bg-gray-100 rounded-xl hover:bg-gray-200">
            LOGIN
          </button> */}
          <a href="mailto:support@initech.com" className="flex items-center gap-2 px-4 py-2 text-sm text-white transition bg-[#0A0A0A] rounded-xl hover:bg-gray-800">
            {/* <div className="w-2.5 h-2.5 bg-white"></div> */}
            LET'S TALK
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="block lg:hidden p-2 border border-gray-300 rounded-lg"
        >
          <motion.div
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            className="relative w-6 h-6 flex flex-col justify-between"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7 },
              }}
              transition={{ duration: 0.3 }}
              className="block w-full h-[2px] bg-black"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="block w-full h-[2px] bg-black"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              transition={{ duration: 0.3 }}
              className="block w-full h-[2px] bg-black"
            />
          </motion.div>
        </motion.button>
      </motion.header>

      {/* Mobile Dropdown Menu Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              top: isScrolled ? "56px" : "76px",
              width: isScrolled ? "100%" : "90%",
              borderRadius: isScrolled ? "0px" : "0.5rem",
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 md:w-[85%] rounded-lg bg-white border-t border-gray-200 shadow-md lg:hidden"
            style={{
              top: isScrolled ? "56px" : "76px",
            }}
          >
            <nav className="flex flex-col items-start p-4 gap-3 text-[14px] font-light text-black">
              {/* <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                PRODUCTS <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                SOLUTIONS <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                COMPANY <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                RESOURCES <ChevronDown size={14} />
              </div> */}
              <a href="#" className="hover:text-gray-600">
                HOME
              </a>
              <a href="#" className="hover:text-gray-600">
                SERVICES
              </a>
              <a href="#" className="hover:text-gray-600">
                ABOUT US
              </a>
              <a href="#" className="hover:text-gray-600">
                CONTACT
              </a>

              <div className="flex flex-col w-full gap-2 pt-2 border-t border-gray-200">
                {/* <button className="w-full px-4 py-3 transition border border-gray-300 rounded-xl hover:bg-gray-50">
                  DOCS
                </button>
                <button className="w-full px-4 py-3 transition bg-gray-100 rounded-xl hover:bg-gray-200">
                  LOGIN
                </button> */}
                <a href="mailto:support@initech.com" className="w-full flex justify-center items-center gap-2 px-4 py-2 text-sm text-white transition bg-[#0A0A0A] rounded-xl hover:bg-gray-800">
                  <div className="w-2.5 h-2.5 bg-white"></div>
                  GET STARTED
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
