import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    // Assuming the hero section has an id of "hero"
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <>
      {/* Navbar - Always on Top */}
      <nav
        className={`fixed w-full text-white z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
          {/* Logo */}
          <a href="#" className="text-xl md:hidden sm:text-2xl font-semibold">
            Pranayama
          </a>

          {/* Hamburger/X Button */}
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

          {/* Desktop Navigation */}
          <div className="space-x-4 hidden md:block">
            <ScrollLink
              to="Pranayama"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Pranayama
            </ScrollLink>
            <ScrollLink
              to="Programa"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Programa
            </ScrollLink>
            <ScrollLink
              to="Eventos"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Eventos
            </ScrollLink>
            <ScrollLink
              to="Instructor"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Instructor
            </ScrollLink>
            <ScrollLink
              to="Testimonios"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Testimonios
            </ScrollLink>
          </div>
          {/* Reserve Button (Desktop) */}
          <ScrollLink
            to="events"
            className="hidden md:block"
            smooth={true}
            duration={500}
          >
            <button className=" border border-white text-white hover:bg-[#7B8E6A] hover:border-[#7B8E6A] duration-200 px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base">
              Reservar Sesión
            </button>
          </ScrollLink>
        </div>
      </nav>

      {/* Mobile Menu - Below Navbar */}
      <div
        className={`md:hidden fixed inset-0 bg-[#1a2721] text-white transform transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 py-16 px-4">
          <ScrollLink
            to="Pranayama"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button onClick={toggleMenu}>Pranayama</button>
          </ScrollLink>
          <ScrollLink
            to="Programa"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button onClick={toggleMenu}>Programa</button>
          </ScrollLink>
          <ScrollLink
            to="Eventos"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button onClick={toggleMenu}>Eventos</button>
          </ScrollLink>
          <ScrollLink
            to="Instructor"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button onClick={toggleMenu}>Instructor</button>
          </ScrollLink>
          <ScrollLink
            to="Testimonios"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button onClick={toggleMenu}>Testimonios</button>
          </ScrollLink>
          <ScrollLink to="events" smooth={true} duration={500}>
            <button
              onClick={toggleMenu}
              className="border border-white text-white hover:bg-[#7B8E6A] hover:border-[#7B8E6A] duration-200 px-6 py-2 rounded-full text-sm"
            >
              Reservar Sesión
            </button>
          </ScrollLink>
        </div>
      </div>
    </>
  );
}
