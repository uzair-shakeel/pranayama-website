import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgTransparent, setBgTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setBgTransparent(false);
      } else {
        setBgTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed w-full text-white z-50 transition-all duration-300 ${
          bgTransparent ? "bg-transparent" : "bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 py-3 md:py-2 flex justify-between items-center relative">
          <a href="#" className="md:hidden text-xl sm:text-2xl font-semibold">
            Pranayama
          </a>

          <button
            className="md:hidden text-white mx-2 focus:outline-none relative w-6 h-6"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-2.5" : "top-1"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-2.5"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-2.5" : "top-4"
              }`}
            />
          </button>

          <div className="hidden md:block space-x-4">
            {[
              "Pranayama",
              "Programa",
              "Eventos",
              "Instructor",
              "Testimonios",
            ].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))}
          </div>

          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            className="hidden md:block"
          >
            <button className="border border-white text-white hover:bg-[#7B8E6A] hover:border-[#7B8E6A] duration-200 px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base">
              Reservar Sesión
            </button>
          </ScrollLink>
        </div>
      </nav>
    </>
  );
}
