import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[#1a2721] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid justify-center text-center lg:text-start items-center md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Pranayama Logo"
              width={120}
              height={120}
              className="mb-6 mx-auto md:mx-0"
            />
          </div>
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="about" smooth={true} duration={500}>
                  <a href="#" className="hover:text-gray-300">
                    Sobre Nosotros
                  </a>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="Pranayama" smooth={true} duration={500}>
                  <a href="#" className="hover:text-gray-300">
                    Qué es Pranayama
                  </a>
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="Programa" smooth={true} duration={500}>
                  <a href="#" className="hover:text-gray-300">
                    Sesiones Personalizadas
                  </a>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="events" smooth={true} duration={500}>
                  <a href="#" className="hover:text-gray-300">
                    Clases & Eventos
                  </a>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="tools" smooth={true} duration={500}>
                  <a href="#" className="hover:text-gray-300">
                    Productos
                  </a>
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-4">
                <a
                  href="/https://www.instagram.com/pranayamacostarica"
                  className="hover:text-gray-300"
                  target="_blank"
                >
                  <Image
                    src="/images/icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <p>Instagram</p>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://wa.link/1967vo"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/whatsApp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                </a>
                <p>WhatsApp</p>
              </div>
              {/* <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Image
                    src="/images/icons/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <p>Facebook</p>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Image
                    src="/images/icons/tiktok.svg"
                    alt="TikTok"
                    width={24}
                    height={24}
                  />
                </a>
                <p>Tiktok</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
