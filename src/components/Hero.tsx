export default function Hero() {
  return (
    <section className="relative h-screen text-center lg:text-start">
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
          <h1
            data-aos="fade-up"
            className="text-[35px] lg:text-5xl md:text-6xl mb-6"
          >
            Encuentra calma en cada respiro.
          </h1>
          <p data-aos="fade-up" className="text-[14px] font-[500] lg:hidden">
            Aprende técnicas para mejorar tu energía, reducir el estrés y
            aumentar tu concentración.
          </p>
          <div
            data-aos="fade-up"
            className="flex lg:flex-row flex-col justify-center lg:justify-start items-center gap-4 mt-8"
          >
            <button className="bg-[#EBEBEB] w-fit duration-200 text-black px-8 py-3 rounded-full hover:bg-[#7B8E6A] hover:border-[#7B8E6A] hover:text-white">
              Comienza tu viaje
            </button>
            <button className="border border-white w-fit text-white px-8 py-3 rounded-full hover:bg-[#EBEBEB] hover:text-black duration-200">
              Conoce Más
            </button>
          </div>
          <div
            data-aos="fade-up"
            className="absolute hidden  bottom-5 w-2/3 left-5 lg:flex  mt-8"
          >
            <p className="text-white px-8 py-3 ">
              Aprende técnicas para mejorar tu energía, reducir el estrés y
              aumentar tu concentración.
            </p>

            <p className="text-white px-10 py-3 border-l border-white ">
              Aprende técnicas para mejorar tu energía, reducir el estrés y
              aumentar tu concentración.
            </p>
          </div>
          <div data-aos="fade-up" className="absolute bottom-5 px-4 lg:hidden">
            <p className="text-[14px] font-[500] lg:hidden">
              Sesiones diseñadas para reducir el estrés, mejorar tu bienestar y
              reconectar contigo mismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
