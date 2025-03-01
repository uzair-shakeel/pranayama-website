import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar - Always on Top */}
      <nav className="absolute w-full text-white z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
          {/* Logo */}
          <a href="#" className="text-xl sm:text-2xl font-semibold">
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
          {/* <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#" className="hover:text-gray-200 text-sm lg:text-base">
              Tienda
            </a>
            <a href="#" className="hover:text-gray-200 text-sm lg:text-base">
              Servicios
            </a>
            <a href="#" className="hover:text-gray-200 text-sm lg:text-base">
              Tips
            </a>
            <a href="#" className="hover:text-gray-200 text-sm lg:text-base">
              Contacto
            </a>
            <a href="#" className="hover:text-gray-200 text-sm lg:text-base">
              Sobre Nosotros
            </a>
          </div> */}

          <div className="space-x-4">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="what-is-pranayama"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              What is Pranayama
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="optimize"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Optimize
            </ScrollLink>
            <ScrollLink
              to="locations"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Locations
            </ScrollLink>
            <ScrollLink
              to="tools"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Tools
            </ScrollLink>
            <ScrollLink
              to="instructor"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Instructor
            </ScrollLink>
            <ScrollLink
              to="events"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Events
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="faq"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              FAQ
            </ScrollLink>
          </div>
          {/* Reserve Button (Desktop) */}
          <ScrollLink to="events" smooth={true} duration={500}>
            <button className="hidden md:block border border-white text-white hover:bg-[#7B8E6A] hover:border-[#7B8E6A] duration-200 px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base">
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
          <a href="#" className="hover:text-gray-200 text-lg">
            Tienda
          </a>
          <a href="#" className="hover:text-gray-200 text-lg">
            Servicios
          </a>
          <a href="#" className="hover:text-gray-200 text-lg">
            Tips
          </a>
          <a href="#" className="hover:text-gray-200 text-lg">
            Contacto
          </a>
          <a href="#" className="hover:text-gray-200 text-lg">
            Sobre Nosotros
          </a>
          <button className="border border-white text-white hover:bg-[#EBEBEB] hover:text-black duration-200 px-6 py-2 rounded-full text-lg w-full max-w-xs">
            Reservar Sesión
          </button>
        </div>
      </div>
    </>
  );
}
