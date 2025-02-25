import Image from "next/image";

const locations = [
  {
    name: "Lindora",
    image: "/images/events/event-1.jpeg",
    image2: "/images/events/event-1b.jpeg",
    size: "half",
  },
  {
    name: "Fortuna",
    image: "/images/events/event-2.jpeg",
    image2: "/images/events/event-2b.png", // Fixed typo
    size: "half",
  },
  {
    name: "Palmares",
    image: "/images/events/event-3.jpeg",
    image2: "/images/events/event-3b.jpeg",
    size: "full",
  },
  {
    name: "Hotel Tamarindo",
    image: "/images/events/event-4.png",
    image2: "/images/events/event-4b.jpeg",
    size: "half",
  },
  {
    name: "Microsoft",
    image: "/images/events/event-5.jpeg",
    image2: "/images/events/event-5b.jpeg",
    size: "half",
  },
];

export default function Locations() {
  return (
    <section className="py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row text-center lg:text-start justify-between items-start mb-16">
          <div className="max-w-xl order-2 lg:order-1">
            <p className="text-gray-600 mb-4">
              A lo largo del tiempo, hemos llevado la magia del Pranayama a
              distintos espacios, creando experiencias transformadoras en cada
              encuentro.
            </p>
          </div>
          <h2 className="text-[40px] mx-auto lg:text-[2.75rem]  lg:text-start leading-[45px] lg:leading-normal font-serif text-right">
            Nuestros
            <br />
            Encuentros
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            {locations.slice(0, 2).map((location) => (
              <div
                key={location.name}
                className="relative rounded-[2rem] overflow-hidden group"
              >
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={location.image2 || "/placeholder.svg"}
                  alt={`${location.name} - second view`}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-8 py-3 bg-[#EBEBEB] rounded-full text-[14px] lg:text-[24px]">
                    {location.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Full width image */}
          <div className="relative rounded-[2rem] overflow-hidden group">
            <Image
              src={locations[2].image || "/placeholder.svg"}
              alt={locations[2].name}
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src={locations[2].image2 || "/placeholder.svg"}
              alt={`${locations[2].name} - second view`}
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute top-6 right-6 z-10">
              <span className="px-8 py-3 bg-[#EBEBEB] rounded-full text-[14px] lg:text-[24px]">
                {locations[2].name}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.slice(3).map((location) => (
              <div
                key={location.name}
                className="relative rounded-[2rem] overflow-hidden group"
              >
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={location.image2 || "/placeholder.svg"}
                  alt={`${location.name} - second view`}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-8 py-3 bg-[#EBEBEB] rounded-full text-[14px] lg:text-[24px]">
                    {location.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
