import Image from "next/image";

const testimonials = [
  {
    name: "Adriana Rodriguez",
    quote:
      "Fue demasiado mágico y especial, de verdad es una locura lo que uno puede lograr con la respiración y con nuestro propio cuerpo. Gracias por el espacio y por canalizar energía tan sanadora!",
    avatar: "/images/testimonials/adriana.png",
  },
  {
    name: "Eduardo Gutiérrez",
    quote:
      "Estuvo increíble. Me gusta eso de activar el cuerpo antes porque ayuda a mantener mejor la postura y después permite que las herramientas nuevas se sientan como un paso natural más y no partiendo del reposo.",
    avatar: "/images/testimonials/eduardo.png",
  },
  {
    name: "Katherine Arce",
    quote:
      "Sinceramente nunca había hecho nada parecido y fue una experiencia súper bonita. Lo de hoy fue demasiado ameno. Hasta que mejoré, fueron 2 horas súper provechosas y me encontraré seguir asistiendo a las sesiones.",
    avatar: "/images/testimonials/katherine.png",
  },
  {
    name: "Mariana Acuña",
    quote:
      "La sesión me encantó! Fue una experiencia increíble! Uno no solo sale relajada si no recargada.",
    avatar: "/images/testimonials/mariana.png",
  },
  {
    name: "Asdrúbal Mayorga",
    quote:
      "Vieras que he notado como la salud y la vida me está mejorando desde que inicié los talleres. Ahora cuando tengo situaciones que me generan mucho estrés, ya tengo las herramientas entonces quiero continuar aprendiendo para vivir mejor.",
    avatar: "/images/testimonials/asdrubal.png",
  },
  {
    name: "Eduardo Gutiérrez",
    quote:
      "De verdad que asistir a estas clases fue lo mejor que me pasó en este año. Una mentalidad totalmente diferente y positiva. Gracias por el espacio, por el tiempo, por la paciencia, por la experiencia y que se vengan las del 2025!",
    avatar: "/images/testimonials/eduardo 2.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] lg:text-[2.75rem] leading-[45px] lg:leading-normal  text-center mb-4">
          Testimonios
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Nada habla mejor de los resultados que las experiencias de quienes han
          participado en nuestros programas.
        </p>
        <div className="grid md:grid-cols-2 gap-6   rounded-xl">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" flex flex-col lg:flex-row border-2 border-[#D1D1D1] items-centerflex items-center gap-8 p-6 rounded-xl shadow-sm"
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full w-[110px] max-w-[35%]"
              />
              <div className="lg:max-w-[65%] text-center lg:text-start mb-4">
                <h3 className="font-medium text-[22px] lg:text-[28px] lg:leading-[35px]">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 italic text-[14px] lg:text-[16px] mt-3">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
