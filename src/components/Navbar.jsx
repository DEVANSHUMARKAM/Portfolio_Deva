import React, { useEffect, useState } from "react";

const Navbar = ({ scrollContainerRef }) => {
  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (menuOpen) return; // Pause scroll detection while mobile menu is open

      const currentScrollTop = scrollContainer.scrollTop;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        setShow(false); // scroll down → hide navbar
      } else {
        setShow(true); // scroll up → show navbar
      }

      setLastScrollTop(currentScrollTop);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, scrollContainerRef, menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-[#4831d4] border-b border-gray-700 shadow-md`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-[#9eef47]">Devanshu Markam</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-bold">
          {["about", "projects", "education", "skills", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-[#9eef47] capitalize">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-[#9eef47] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#4831d4]">
          <ul className="flex flex-col space-y-3 text-white font-bold">
            {["about", "projects", "education", "skills", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#9eef47] capitalize"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
