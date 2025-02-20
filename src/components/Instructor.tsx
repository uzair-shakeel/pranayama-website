import Image from 'next/image';



export default function Instructor() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4">Sobre Nuestro Instructor</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Con más de siete años de experiencia y certificación profesional en Pranayama, Kenneth guía cada sesión con profundidad, entrega y gratitud, creando espacios donde la respiración se convierte en una herramienta de cambio y renovación.
        </p>
        <div className="">
          <Image src="/images/instructor.jpeg" alt="Instructor" width={680} height={680} className="rounded-xl object-cover max-w-5xl mx-auto w-full max-h-[500px]" />
        </div>
      </div>
    </section>
  );
}
