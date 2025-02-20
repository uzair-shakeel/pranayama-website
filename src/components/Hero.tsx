export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Encuentra calma en cada respiro.
          </h1>
          <div className="flex gap-4 mt-8">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100">
              Comienza tu viaje
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10">
              Conoce Más
            </button>
          </div>
          <div className="absolute bottom-5 w-2/3 left-5 flex  mt-8">
            <p className="text-white px-8 py-3 ">
            Aprende técnicas para mejorar tu energía, reducir el estrés y aumentar tu concentración.
            </p>
            
            <p className="text-white px-10 py-3 border-l border-white ">
            Aprende técnicas para mejorar tu energía, reducir el estrés y aumentar tu concentración.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
