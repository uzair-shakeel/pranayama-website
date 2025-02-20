import { ArrowRight } from "lucide-react"
import Image from "next/image"

const tools = [
  {
    title: "E-books",
    description:
      "La respiración es la llave de tu bienestar. Explora conocimientos profundos que transformarán tu práctica.",
    image: "/images/tools-3.jpeg",
  },
  {
    title: "Accesorios",
    description: "Vístete con intención, rodea tu día de símbolos de equilibrio y mantén tu práctica siempre presente.",
    image: "/images/tools-3.jpeg",
  },
  {
    title: "Tinas para hielo",
    description: "Tinas para baño de hielo, para quienes buscan el poder del frío como herramienta de transformación.",
    image: "/images/tools-3.jpeg",
  },
]

export default function Tools() {
  return (
    <section className="py-24 ">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-serif mb-4">Herramientas para tu bienestar</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Elementos diseñados para profundizar tu conexión con la respiración, el cuerpo y la energía.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="border-2 border-[#D1D1D1] rounded-[2rem] p-8 relative group cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute right-12 top-12 w-10 h-10 bg-[#EBEBEB] rounded-full flex items-center justify-center shadow-md z-10">
                <ArrowRight className="w-5 h-5 text-black" />
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F2F2F2] mb-6">
                <Image
                  src={tool.image || "/placeholder.svg"}
                  alt={tool.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-serif mb-3">{tool.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

