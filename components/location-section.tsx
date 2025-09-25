"use client"

import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  const locations = [
    {
      city: "Rancagua",
      address: "Dirección en Rancagua",
      phone: "+56 9 4920 6057",
      hours: "Lun - Sáb: 9:00 - 19:00",
      mapUrl: "https://maps.google.com/?q=Rancagua+peluqueria",
    },
  ]

  const openWhatsApp = (city: string) => {
    window.open(
      `https://wa.me/56949206057?text=Hola! 📍✨ Me gustaría reservar una cita en la sucursal de ${city} 💇‍♀️💫`,
      "_blank",
    )
  }

  return (
    <section id="location" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#D4AF37] mb-16">
          Nuestra Ubicación
        </h2>

        <div className="flex justify-center">
          {locations.map((location, index) => (
            <div key={index} className="bg-black rounded-lg p-8 border border-[#D4AF37]/20 max-w-lg w-full">
              <h3 className="font-playfair text-2xl font-bold text-[#D4AF37] mb-6 text-center">{location.city}</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span>{location.address}</span>
                </div>

                <div className="flex items-center justify-center space-x-3 text-white">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <span>{location.phone}</span>
                </div>

                <div className="flex items-center justify-center space-x-3 text-white">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <span>{location.hours}</span>
                </div>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="bg-gray-800 rounded-lg h-48 mb-6 flex items-center justify-center border border-[#D4AF37]/20">
                <div className="text-center text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[#D4AF37]" />
                  <p>Mapa de {location.city}</p>
                  <p className="text-sm">Google Maps se integrará aquí</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => window.open(location.mapUrl, "_blank")}
                  variant="outline"
                  className="flex-1 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver en Maps
                </Button>

                <Button
                  onClick={() => openWhatsApp(location.city)}
                  className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  📱✨ Reservar en {location.city}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-4">¿Necesitas indicaciones para llegar?</p>
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/56949206057?text=Hola! 📍✨ Me gustaría saber cómo llegar a la peluquería 💇‍♀️💫",
                "_blank",
              )
            }
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold"
            size="lg"
          >
            📱✨ Consultar Ubicación por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
