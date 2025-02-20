import Image from 'next/image'

const navigationItems = ['Ayuda', 'Familia', 'Terapia', 'Relajación']

export default function About() {
  return (
    <section className="py-24 ">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex gap-3 flex-wrap mb-8">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  className="border border-[#2A2A2A] px-9 py-2.5 rounded-full text-[#2A2A2A]  transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <h2 className="text-[2.75rem] font-serif">Somos Pranayama</h2>
          </div>
          <div className="w-full lg:w-1/2 lg:text-right">
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl ml-auto">
              Aquí no solo encuentras técnicas de respiración, sino un espacio 
              sagrado donde puedes fluir con tu propia naturaleza, liberar 
              tensiones y despertar tu vitalidad.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] overflow-hidden">
          <Image
            src="/images/somos_bg.jpeg"
            alt="Grupo Pranayama"
            width={1200}
            height={600}
            className="w-full object-cover max-h-[600px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
