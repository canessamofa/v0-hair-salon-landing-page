"use client"

import { useState } from "react"
import { Home, Scissors, User, Package, MessageSquare, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
  }

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/56949206057?text=Hola! 📱✨ Me gustaría reservar una cita en Peluquería Gianinna Canessa 💇‍♀️💫",
      "_blank",
    )
  }

  const navItems = [
    { id: "home", icon: Home, label: "Inicio" },
    { id: "location", icon: MapPin, label: "Ubicación" },
    { id: "services", icon: Scissors, label: "Servicios" },
    { id: "about", icon: User, label: "Nosotros" },
    { id: "products", icon: Package, label: "Productos" },
    { id: "testimonials", icon: MessageSquare, label: "Testimonios" },
  ]

  return (
    <>
      {/* Floating Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-[#D4AF37] text-black"
                    : "text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
                }`}
                title={item.label}
              >
                <IconComponent className="w-5 h-5" />
              </button>
            )
          })}

          {/* WhatsApp Button */}
          <Button
            onClick={openWhatsApp}
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold rounded-full px-4 py-2 ml-2"
            size="sm"
          >
            📱✨ Reservar
          </Button>
        </div>
      </nav>

      {/* Mobile WhatsApp Floating Button */}
      <div className="md:hidden fixed bottom-20 right-4 z-40">
        <Button
          onClick={openWhatsApp}
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold rounded-full w-14 h-14 shadow-lg"
          size="sm"
        >
          💬
        </Button>
      </div>
    </>
  )
}
