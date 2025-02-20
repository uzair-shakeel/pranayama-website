import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a2721] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Pranayama Logo"
              width={120}
              height={40}
              className="mb-6"
            />
          </div>
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-gray-300">Qué es Pranayama</a></li>
              <li><a href="#" className="hover:text-gray-300">Tips & Preguntas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Sesiones Personalizadas</a></li>
              <li><a href="#" className="hover:text-gray-300">Clases & Eventos</a></li>
              <li><a href="#" className="hover:text-gray-300">Productos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Image
                  src="/images/instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Image
                  src="/images/facebook-icon.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Image
                  src="/images/tiktok-icon.svg"
                  alt="TikTok"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
