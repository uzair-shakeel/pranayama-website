export default function Navbar() {
  return (
    <nav className="absolute w-full text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold">Pranayama</a>
        <div className="hidden md:flex space-x-8">
          <a href="#" className=" hover:text-gray-200">Tienda</a>
          <a href="#" className=" hover:text-gray-200">Servicios</a>
          <a href="#" className=" hover:text-gray-200">Tips</a>
          <a href="#" className=" hover:text-gray-200">Contacto</a>
          <a href="#" className=" hover:text-gray-200">Sobre Nosotros</a>
        </div>
        <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10">
          Reservar Sesión
        </button>
      </div>
    </nav>
  );
}
