import Image from "next/image"

const locations = [
  {
    name: "Evento MIA: Lindora",
    image: "/images/events/event-1.jpeg",
    size: "half",
  },
  {
    name: "Fortuna",
    image: "/images/events/event-2.jpeg",    size: "half",
  },
  {
    name: "Palmares",
    image: "/images/events/event-3.jpeg",    size: "full",
  },
  {
    name: "Hotel Tamarindo",
    image: "/images/events/event-4.png",    size: "half",
  },
  {
    name: "Microsoft",
    image: "/images/events/event-5.jpeg",    size: "half",
  },
]

export default function Locations() {
  return (
    <section className="py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-xl">
            <p className="text-gray-600 mb-4">
              A lo largo del tiempo, hemos llevado la magia del Pranayama a distintos espacios, creando experiencias
              transformadoras en cada encuentro.
            </p>
          </div>
          <h2 className="text-[2.5rem] font-serif text-right">
            Nuestros
            <br />
            Encuentros
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            {locations.slice(0, 2).map((location) => (
              <div key={location.name} className="relative rounded-[2rem] overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-6 right-6">
                  <span className="px-8 py-3 bg-[#EBEBEB] rounded-full text-[24px]">{location.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Full width image */}
          <div className="relative rounded-[2rem] overflow-hidden">
            <Image
              src={locations[2].image || "/placeholder.svg"}
              alt={locations[2].name}
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-6 right-6">
            <span className="px-8 py-3 bg-[#EBEBEB] rounded-full text-[24px]">{locations[2].name}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.slice(3).map((location) => (
              <div key={location.name} className="relative rounded-[2rem] overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-6 right-6">
                <span className="px-8 py-3 bg-[#EBEBEB] rounded-full text-[24px]">{location.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

