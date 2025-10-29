import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center py-3 md:py-6 absolute w-full top-0 z-50">
      <header className="flex items-center justify-between w-[95%]  px-6 md:px-8 py-3 md:py-5 border border-gray-300 shadow-md rounded-2xl bg-white">
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 bg-[#0A0A0A] rounded-sm">
            <div className="w-2.5 h-2.5 bg-white"></div>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-black">
            INITECH
          </span>
        </div>

        {/* Center Navigation (Desktop Only) */}
        <nav className="hidden md:flex items-center text-[15px] font-extralight gap-8 text-black font-aeonik">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
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
          </div>
          <a href="#" className="hover:text-gray-600">
            PRICING
          </a>
          <a href="#" className="hover:text-gray-600">
            CONTACT
          </a>
        </nav>

        {/* Right Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-3 transition border border-gray-300 rounded-xl hover:bg-gray-50">
            DOCS
          </button>
          <button className="px-4 py-3 transition bg-gray-100 rounded-xl hover:bg-gray-200">
            LOGIN
          </button>
          <button className="flex items-center gap-2 px-4 py-3 text-white transition bg-[#0A0A0A] rounded-xl hover:bg-gray-800">
            <div className="w-2.5 h-2.5 bg-white"></div>
            GET STARTED
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden p-2 border border-gray-300 rounded-lg"
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
      </header>

      {/* Mobile Dropdown Menu Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-[72px] left-0 w-full bg-white border-t border-gray-200 shadow-md rounded-b-2xl md:hidden"
          >
            <nav className="flex flex-col items-start p-5 gap-4 text-[15px] font-light text-black">
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
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
              </div>
              <a href="#" className="hover:text-gray-600">
                PRICING
              </a>
              <a href="#" className="hover:text-gray-600">
                CONTACT
              </a>

              <div className="flex flex-col w-full gap-2 pt-3 border-t border-gray-200">
                <button className="w-full px-4 py-3 transition border border-gray-300 rounded-xl hover:bg-gray-50">
                  DOCS
                </button>
                <button className="w-full px-4 py-3 transition bg-gray-100 rounded-xl hover:bg-gray-200">
                  LOGIN
                </button>
                <button className="w-full flex justify-center items-center gap-2 px-4 py-3 text-white transition bg-[#0A0A0A] rounded-xl hover:bg-gray-800">
                  <div className="w-2.5 h-2.5 bg-white"></div>
                  GET STARTED
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
