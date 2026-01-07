import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full flex justify-center">
        <div className="container px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-semibold text-sm sm:text-lg">
              JS
            </div>
            <div>
              <h1 className="text-sm sm:text-md font-semibold">Jitesh Solanki</h1>
              <p className="text-xs sm:text-sm text-blue-600">FrontEnd • Developer</p>
            </div>
          </div>

          {/* DESKTOP NAVBAR */}
          <nav className="hidden lg:flex gap-6 xl:gap-10 text-base xl:text-lg font-medium mx-4 xl:mx-[200px]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-purple-700 transition-colors duration-300 text-gray-800"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl text-gray-700 hover:text-purple-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU - CENTERED ON SM SCREENS */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container px-4 py-6 sm:py-8">
            <nav className="flex flex-col items-center space-y-4 sm:space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-center w-full sm:w-auto sm:px-8 py-3 sm:py-4 text-gray-800 hover:text-purple-700 transition-colors duration-300 font-medium text-lg sm:text-xl"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Optional: Add a close button at bottom for better UX on mobile */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300 text-sm"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;