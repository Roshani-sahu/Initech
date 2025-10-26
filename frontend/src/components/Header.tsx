import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-center w-full py-6 overflow-x-hidden bg-gray-50">
      <header className="flex items-center justify-between w-[95%] max-w-full px-8 py-5 font-mono text-sm bg-white border border-gray-300 shadow-md rounded-2xl">
        {/* Left Logo */}
        <div className="flex justify-start gap-10 ">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 bg-[#0A0A0A] rounded-sm">
            <div className="w-2.5 h-2.5 bg-white"></div>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-black">
            INITECH
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="flex items-center gap-8 text-black font-aeonik">
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
          <a href="#" className="hover:text-gray-600">PRICING</a>
          <a href="#" className="hover:text-gray-600">CONTACT</a>
        </nav>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
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
      </header>
    </div>
  );
};

export default Header;
