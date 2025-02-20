"use client"

import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const navigationItems = ["Beneficios", "Enfoque", "Clases", "Precauciones"]

const tabContent = {
  Beneficios: [
    {
      title: "Salud",
      icon: "/images/icons/salud.svg",
      description:
        "Aumenta la capacidad pulmonar, permitiendo respiraciones más profundas y conscientes mientras revitalizas y purificas el corazón, favoreciendo la circulación y la energía vital.",
      bgImage: "/images/salud.jpeg",
    },
    {
      title: "Mente",
      icon: "/images/icons/mente.svg",
      description:
        "Reduce el estrés y la ansiedad, ayudando a encontrar calma en el presente, mejora la respuesta emocional, cultivando serenidad y ecuanimidad.",
      bgImage: "/images/mente.jpeg",
    },
    {
      title: "Cuerpo",
      icon: "/images/icons/cuerpo.svg",
      description:
        "Equilibra el sistema nervioso, promoviendo estabilidad y relajación y balancea el funcionamiento cerebral, armonizando los hemisferios y la actividad mental.",
      bgImage: "/images/cuerpo.jpeg",
    },
  ],
  Enfoque: [
    {
      title: "Mejorar la Respiración",
      icon: "/images/icons/Mejorar.svg",
      description:
        "Aumentar la capacidad pulmonar, permitiendo respiraciones más profundas y conscientes mientras revitalizas y purificas el corazón, favoreciendo la circulación y la energía vital.",
        bgImage: "/images/Mejorar.jpeg",
      },
    {
      title: "Conexión Interior",
      icon: "/images/icons/Conexión.svg",
      description:
        "Libera el estrés, la ansiedad y las preocupaciones mientras cultivas claridad mental, gratitud y creatividad. Transforma tu respiración en una herramienta poderosa de bienestar.",
        bgImage: "/images/Conexión.jpeg",
      },
  ],
  Clases: [
    {
      title: "Sin Requisitos Previos",
      icon: "/images/icons/sin.svg",
      description:
        "No necesitas experiencia previa para practicar. Cualquier persona, sin importar su nivel, puede beneficiarse de estas sesiones. La respiración es una herramienta universal y accesible para todos.",
        bgImage: "/images/sin.jpeg",
      },
    {
      title: "Fortaleza ante el Estrés",
      icon: "/images/icons/Fortaleza.svg",
      description:
        "Una respiración más saludable contribuye a una mejor respuesta ante el estrés. Aprenderás a regular tu sistema nervioso, controlar la ansiedad y afrontar situaciones desafiantes con mayor calma y equilibrio.",
        bgImage: "/images/Fortaleza.jpeg",
      },
    {
      title: "Herramientas para la Vida",
      icon: "/images/icons/Herramientas.svg",
      description:
        "Las herramientas aprendidas en cada sesión pueden aplicarse en cualquier momento del día. Ya sea para calmar la mente, mejorar el enfoque o liberar tensión, la respiración se convierte en un recurso poderoso y constante.",
        bgImage: "/images/Herramientas.jpeg",
      },
  ],
  Precauciones: [
    {
      title: "Supervisión Profesional",
      icon: "/images/icons/Supervisión.svg",
      description:
        "Algunas técnicas deben ser practicadas estrictamente bajo la supervisión de un profesional calificado para asegurar una ejecución correcta y segura en el proceso.",
        bgImage: "/images/supervision.jpeg",
      },
    {
      title: "Condiciones de Salud",
      icon: "/images/icons/Condiciones.svg",
      description:
        "Libera el estrés, la ansiedad y las preocupaciones mientras cultivas claridad mental, gratitud y creatividad. Transforma tu respiración en una herramienta poderosa de bienestar.",
        bgImage: "/images/Condiciones.jpeg",
      },
  ],
}

export default function WhatIsPranayama() {
  const [activeTab, setActiveTab] = useState("Beneficios")
  const [selectedCard, setSelectedCard] = useState(tabContent[activeTab as keyof typeof tabContent][0].title)
  const [isSelected, setIsSelected] = useState(false)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setSelectedCard(tabContent[tab as keyof typeof tabContent][0].title)
  }

  return (
    <section className="py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          <div>
            <h2 className="text-[2.75rem] font-serif mb-4">¿Qué es Pranayama?</h2>
            <p className="text-gray-600">Aprende sobre todos sus beneficios y como puede cambiarte la vida.</p>
          </div>

          <div className="relative aspect-[16/9] bg-black rounded-2xl overflow-hidden">
            <img src="/images/video.jpeg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Play className="w-6 h-6 text-black ml-1" />
              </button>
            </div>
          </div>

          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Pranayama es una disciplina que consiste de diversas técnicas de respiración para controlar y cultivar la
              cantidad, calidad, flujo y dirección de oxígeno y energía vital en nuestro sistema.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-between items-start">
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleTabChange(item)}
                className={`px-6 py-2.5 rounded-full transition-colors ${
                  activeTab === item ? "bg-[#2B2B2B] text-white" : "border-2 border-[#2B2B2B] text-[#2B2B2B]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsSelected(!isSelected)}
            className={`px-6 py-2.5 rounded-full transition-colors ${
              isSelected ? "bg-[#2B2B2B] text-white" : "border-2 border-[#2B2B2B] text-[#2B2B2B]"
            }`}
          >
            Conocer Más
          </button>
        </div>

        <div className="flex gap-6 h-[450px]">
          {tabContent[activeTab as keyof typeof tabContent].map((card) => {
            const isSelected = selectedCard === card.title

            return (
              <div
                key={card.title}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out ${
                  isSelected
                    ? activeTab === "Clases"
                      ? "w-[44%]"
                      : activeTab === "Enfoque" || activeTab === "Precauciones"
                      ? "w-[70%]"
                      : "w-[50%]"
                    : activeTab === "Clases"
                    ? "w-[33%]"
                    : activeTab === "Enfoque" || activeTab === "Precauciones"
                    ? "w-[30%]"
                    : "w-[25%]"
                }`}
                
                onClick={() => setSelectedCard(card.title)}
              >
                <Image
                  src={card.bgImage || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className={`object-cover transition-all duration-300 brightness-50 ${!isSelected && "grayscale"}`}
                />
                <div className={`absolute inset-0 p-8`}>
                  <div className={`flex gap-6 ${isSelected ? "items-center " : "items-center justify-center h-full flex-col"}`}>
                    <div>
                      <img src={card.icon} alt="" className="min-w-[94px] min-h-[94px]" />
                    </div>
                    <h3 className={`text-[38px] font-nimbus mb-4 ${isSelected ? "text-start" : "text-center"} leading-[55px] text-white`}>{card.title}</h3>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isSelected ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                    }`}
                  >
                    <p className="text-[20px] leading-relaxed text-white">{card.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

