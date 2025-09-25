"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/elegant-hair-salon-interior-with-gold-accents.jpg",
    alt: "Salón elegante",
  },
  {
    src: "/professional-hairstylist-working-on-client-hair.jpg",
    alt: "Estilista profesional",
  },
]

export function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentImage(index)
  }

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-lg">
        {/* Carousel Images */}
        <div className="relative h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Peluquería Gianinna Canessa
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Más de 35 años creando looks únicos y especiales para cada mujer
            </p>
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold px-8 py-4 text-lg"
              onClick={() =>
                window.open("https://wa.me/56949206057?text=Hola! 📱✨ Me gustaría reservar una cita 💇‍♀️💫", "_blank")
              }
            >
              📱✨ Reservar por WhatsApp 💇‍♀️
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentImage ? "bg-[#D4AF37]" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
