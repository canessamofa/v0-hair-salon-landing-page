"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Scissors, Palette, Droplets, Ruler, MessageCircle, Sparkles, Star } from "lucide-react"

const services = [
  {
    id: "cortes",
    title: "CORTES",
    icon: Scissors,
    emoji: "✂️",
    description: "Cortes modernos y clásicos adaptados a tu estilo",
    works: [
      {
        title: "Corte Bob Moderno",
        description: "Corte clásico con un toque contemporáneo, perfecto para cualquier ocasión",
        duration: "45 min",
        image: "/modern-bob-haircut.jpg",
      },
      {
        title: "Corte en Capas",
        description: "Perfecto para dar volumen y movimiento natural a tu cabello",
        duration: "50 min",
        image: "/layered-haircut.jpg",
      },
      {
        title: "Corte Pixie",
        description: "Estilo audaz y sofisticado para mujeres modernas",
        duration: "40 min",
        image: "/pixie-haircut.jpg",
      },
      {
        title: "Corte Long Bob",
        description: "Elegancia y versatilidad en un solo corte",
        duration: "45 min",
        image: "/long-bob-haircut.jpg",
      },
    ],
  },
  {
    id: "peinados",
    title: "PEINADOS",
    icon: Sparkles,
    emoji: "💇‍♀️",
    description: "Peinados elegantes para ocasiones especiales",
    works: [
      {
        title: "Peinado de Novia",
        description: "Elegancia y sofisticación para tu día más especial",
        duration: "90 min",
        image: "/bridal-hairstyle.jpg",
      },
      {
        title: "Recogido Sofisticado",
        description: "Perfecto para eventos formales y celebraciones",
        duration: "60 min",
        image: "/elegant-updo-hairstyle.jpg",
      },
      {
        title: "Ondas Naturales",
        description: "Estilo relajado y natural para el día a día",
        duration: "45 min",
        image: "/natural-waves-hairstyle.jpg",
      },
      {
        title: "Peinado de Fiesta",
        description: "Glamour y estilo para noches especiales",
        duration: "75 min",
        image: "/party-hairstyle.jpg",
      },
    ],
  },
  {
    id: "coloracion",
    title: "COLORACIÓN",
    icon: Palette,
    emoji: "🎨",
    description: "Técnicas avanzadas de coloración y mechas",
    works: [
      {
        title: "Balayage Natural",
        description: "Técnica francesa para un look natural y luminoso",
        duration: "120 min",
        image: "/balayage-hair-color.jpg",
      },
      {
        title: "Mechas Californianas",
        description: "Iluminación perfecta que realza tu belleza natural",
        duration: "100 min",
        image: "/california-highlights.jpg",
      },
      {
        title: "Color Completo",
        description: "Transformación total de color con productos premium",
        duration: "90 min",
        image: "/full-hair-color.jpg",
      },
      {
        title: "Reflejos Dorados",
        description: "Toques dorados que iluminan tu rostro",
        duration: "80 min",
        image: "/golden-hair-highlights.jpg",
      },
    ],
  },
  {
    id: "tratamientos",
    title: "TRATAMIENTOS",
    icon: Droplets,
    emoji: "💧",
    description: "Tratamientos reparadores y nutritivos",
    works: [
      {
        title: "Keratina Brasileña",
        description: "Alisado y nutrición profunda que dura hasta 4 meses",
        duration: "150 min",
        image: "/keratin-hair-treatment.png",
      },
      {
        title: "Hidratación Profunda",
        description: "Restaura la salud y brillo natural de tu cabello",
        duration: "60 min",
        image: "/deep-hair-hydration.jpg",
      },
      {
        title: "Tratamiento Anti-Frizz",
        description: "Controla el encrespamiento y suaviza tu cabello",
        duration: "90 min",
        image: "/anti-frizz-hair-treatment.jpg",
      },
      {
        title: "Botox Capilar",
        description: "Rejuvenece y repara el cabello dañado",
        duration: "120 min",
        image: "/hair-botox-treatment.jpg",
      },
    ],
  },
  {
    id: "extensiones",
    title: "EXTENSIONES",
    icon: Ruler,
    emoji: "📏",
    description: "Extensiones de cabello natural de alta calidad",
    works: [
      {
        title: "Extensiones de Keratina",
        description: "Extensiones de larga duración con acabado natural",
        duration: "180 min",
        image: "/keratin-hair-extensions.jpg",
      },
      {
        title: "Extensiones de Clip",
        description: "Extensiones removibles para cambios instantáneos",
        duration: "30 min",
        image: "/clip-in-hair-extensions.jpg",
      },
      {
        title: "Volumen Extra",
        description: "Añade densidad y volumen a tu cabello natural",
        duration: "120 min",
        image: "/volume-hair-extensions.jpg",
      },
      {
        title: "Extensiones de Colores",
        description: "Mechas de colores temporales y divertidas",
        duration: "60 min",
        image: "/colored-hair-extensions.jpg",
      },
    ],
  },
  {
    id: "consultas",
    title: "CONSULTAS",
    icon: MessageCircle,
    emoji: "💬",
    description: "Asesoría personalizada y análisis capilar",
    works: [
      {
        title: "Análisis Capilar Completo",
        description: "Evaluación profesional del estado de tu cabello",
        duration: "30 min",
        image: "/hair-analysis-consultation.jpg",
      },
      {
        title: "Asesoría de Estilo",
        description: "Encuentra el look perfecto según tu rostro y estilo",
        duration: "45 min",
        image: "/hair-style-consultation.jpg",
      },
      {
        title: "Plan de Mantenimiento",
        description: "Rutina personalizada para mantener tu cabello saludable",
        duration: "20 min",
        image: "/hair-care-plan.jpg",
      },
      {
        title: "Consulta de Color",
        description: "Asesoría especializada en coloración y mechas",
        duration: "30 min",
        image: "/hair-color-consultation.jpg",
      },
    ],
  },
]

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <section id="servicios" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#D4AF37] mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Descubre nuestra amplia gama de servicios profesionales diseñados para realzar tu belleza natural
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-center cursor-pointer hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group border border-gray-700 hover:border-[#D4AF37]/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  <IconComponent className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-playfair text-xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#D4AF37] text-sm font-medium">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Ver detalles
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 border-[#D4AF37]">
            {selectedService && (
              <>
                <DialogHeader className="border-b border-gray-700 pb-4">
                  <DialogTitle className="flex items-center gap-3 text-3xl font-playfair text-[#D4AF37]">
                    <selectedService.icon className="w-8 h-8" />
                    <span className="text-2xl">{selectedService.emoji}</span>
                    {selectedService.title}
                  </DialogTitle>
                  <p className="text-gray-300 mt-2">{selectedService.description}</p>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {selectedService.works.map((work, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors"
                    >
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="font-playfair text-xl font-semibold text-white mb-2">{work.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{work.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#D4AF37] text-sm font-medium">⏱️ {work.duration}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black bg-transparent"
                            onClick={() =>
                              window.open(
                                `https://wa.me/56949206057?text=Hola! 📱✨ Me interesa el servicio de ${work.title} 💇‍♀️💫`,
                                "_blank",
                              )
                            }
                          >
                            📱 Reservar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center border-t border-gray-700 pt-6">
                  <Button
                    size="lg"
                    className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold px-8 py-3"
                    onClick={() =>
                      window.open(
                        `https://wa.me/56949206057?text=Hola! 📱✨ Me interesa conocer más sobre los servicios de ${selectedService.title} 💇‍♀️💫`,
                        "_blank",
                      )
                    }
                  >
                    📱✨ Consultar por WhatsApp 💇‍♀️
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
