import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Optimize() {
  return (
    <main className="min-h-screen">
      {/* Optimization Section */}
      <section className="py-12 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-[40px] lg:text-[2.75rem] leading-[45px] lg:leading-normal font-serif text-center mb-4"
          >
            Optimiza Tu Respiración
          </h2>
          <p
            data-aos="fade-up"
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Para quienes buscan un enfoque más individualizado y una
            transformación profunda en su manera de respirar, vivir y sentir.
          </p>
          <div data-aos="fade-up" className="grid lg:grid-cols-2 gap-12">
            <div className="p-6 rounded-3xl border-[2px] border-[#D1D1D1]">
              <div className="rounded-3xl overflow-hidden max-h-[300px] w-full">
                <Image
                  src="/images/optimization.jpeg"
                  alt="Person meditating"
                  width={600}
                  height={400}
                  className=" object-cover max-h-[300px] w-full"
                />
              </div>
              <h4 className="text-[18px] lg:text-[32px] leading-[48px]">
                ¿Quieres transformar tu bienestar?{" "}
              </h4>
              <h4 className="text-[14px] lg:text-[20px] ">
                Además de nuestras sesiones grupales, estamos desarrollando un
                programa exclusivo diseñado para ayudarte a respirar mejor y
                optimizar tu energía en solo 15 días.{" "}
              </h4>
            </div>
            <div className="text-[14px] lg:text-[20px] px-6 lg:px-0 space-y-6 flex flex-col justify-between">
              {[
                "Seguimiento personalizado durante 15 días para asegurarnos de tu progreso.",
                "Documentación del proceso, permitiéndote hacer de la respiración una herramienta de bienestar permanente.",
                "Dos sesiones en vivo donde recibirás orientación directa y podrás resolver dudas en tiempo real.",
                "Videos pregrabados con información clave sobre técnicas de respiración y su impacto en tu bienestar.",
                "Retos progresivos diseñados para que mejores tu respiración de manera natural y sostenible.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
              <button
                onClick={() => window.open("https://wa.link/1967vo", "_blank")}
                className="border-2 text-xl border-[#222222] hover:bg-[#222222] group duration-200 hover:text-white px-8 py-5 rounded-lg w-full flex justify-between"
              >
                Preordena Ahora
                <span className="transform font-serif transition-transform border-2 border-[#2A2A2A] group-hover:border-white rounded-full duration-200 ease-in-out">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transform transition-transform duration-300"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
