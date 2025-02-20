import Image from 'next/image';

const events = [
  {
    date: { day: 9, month: 'FEB' },
    title: 'Sesión de Pranayama - Batsú, Candelaria, Palmares',
    image: '/images/events/event-1.jpg',
    buttonText: 'GUARDAR ESPACIO'
  },
  {
    date: { day: 12, month: 'FEB' },
    title: 'Sesión en Grupo: "Libera tu Mente"',
    image: '/images/events/event-2.jpg',
    buttonText: 'COMPRAR ENTRADAS'
  },
  {
    date: { day: 23, month: 'FEB' },
    title: 'Sesión de Respiración - Esfera, Alajuela',
    image: '/images/events/event-3.jpg',
    buttonText: 'GUARDAR ESPACIO'
  }
];

export default function Events() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4">Eventos</h2>
        <p className="text-gray-600 text-center mb-12">
          Descubre el poder de tu respiración en nuestros encuentros únicos.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-center">
                  <div className="text-sm font-medium">{event.date.month}</div>
                  <div className="text-2xl font-bold">{event.date.day}</div>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-4">{event.title}</h3>
              <button className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition-colors">
                {event.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
