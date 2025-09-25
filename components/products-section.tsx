"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    name: "Luxury Shampoo Collection",
    description: "Premium sulfate-free formulas for all hair types",
    image: "/luxury-hair-shampoo-bottles-with-gold-packaging.jpg",
  },
  {
    name: "Nourishing Hair Masks",
    description: "Deep conditioning treatments for damaged hair",
    image: "/luxury-hair-mask-jars-with-elegant-packaging.jpg",
  },
  {
    name: "Styling Essentials Kit",
    description: "Professional-grade styling products for home use",
    image: "/luxury-hair-styling-products-set-with-gold-accents.jpg",
  },
  {
    name: "Heat Protection Serum",
    description: "Advanced formula to protect against heat damage",
    image: "/luxury-hair-serum-bottle-with-dropper-and-gold-det.jpg",
  },
  {
    name: "Color-Safe Conditioner",
    description: "Extends color life while adding shine and softness",
    image: "/luxury-hair-conditioner-bottle-with-premium-packag.jpg",
  },
  {
    name: "Volumizing Mousse",
    description: "Lightweight formula for natural volume and texture",
    image: "/luxury-hair-mousse-bottle-with-elegant-design.jpg",
  },
  {
    name: "Argan Oil Treatment",
    description: "Pure argan oil for deep nourishment and shine",
    image: "/luxury-argan-oil-bottle-with-gold-cap.jpg",
  },
  {
    name: "Keratin Repair Complex",
    description: "Intensive treatment for damaged and brittle hair",
    image: "/luxury-keratin-treatment-bottle-elegant-design.jpg",
  },
]

export function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getCurrentProducts = () => {
    const startIndex = currentIndex * itemsPerPage
    return products.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-playfair)] text-balance text-[#D4AF37]">
            Productos Capilares Premium
          </h2>
          <p className="text-lg text-[#D4AF37]/80 max-w-2xl mx-auto text-pretty">
            Descubre nuestra colección curada de productos profesionales para el cuidado del cabello
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#D4AF37] border-[#D4AF37] text-black hover:bg-[#D4AF37]/80 -translate-x-4"
            onClick={prevSlide}
            disabled={products.length <= itemsPerPage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#D4AF37] border-[#D4AF37] text-black hover:bg-[#D4AF37]/80 translate-x-4"
            onClick={nextSlide}
            disabled={products.length <= itemsPerPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {getCurrentProducts().map((product, index) => (
              <Card
                key={currentIndex * itemsPerPage + index}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-gray-900/50 border-[#D4AF37]/20"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#D4AF37]">{product.name}</h3>
                    <p className="text-[#D4AF37]/80 text-sm">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#D4AF37] scale-110" : "bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
