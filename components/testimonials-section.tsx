"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment:
      "Gianinna es increíble! Mi cabello nunca se había visto tan bien. Su técnica de corte es perfecta y siempre me siento renovada después de cada visita.",
    avatar: "/woman-with-beautiful-hair.jpg",
  },
  {
    id: 2,
    name: "Ana Rodríguez",
    rating: 5,
    comment:
      "El mejor salón de belleza de la ciudad. Los tratamientos son de primera calidad y el ambiente es muy relajante. Totalmente recomendado.",
    avatar: "/elegant-woman-portrait.jpg",
  },
  {
    id: 3,
    name: "Carmen López",
    rating: 5,
    comment:
      "Llevo años viniendo aquí y nunca me decepciona. Gianinna entiende perfectamente lo que quiero y siempre supera mis expectativas.",
    avatar: "/happy-woman-with-styled-hair.jpg",
  },
  {
    id: 4,
    name: "Isabella Torres",
    rating: 5,
    comment:
      "Profesionalismo y calidad en cada servicio. Mi cabello se ve saludable y hermoso gracias a los cuidados que recibo aquí.",
    avatar: "/woman-with-curly-hair.jpg",
  },
  {
    id: 5,
    name: "Sofía Martínez",
    rating: 5,
    comment:
      "Un lugar mágico donde mi cabello se transforma. Gianinna es una artista y su pasión por la belleza se nota en cada detalle.",
    avatar: "/woman-with-blonde-hair.jpg",
  },
  {
    id: 6,
    name: "Valentina Silva",
    rating: 5,
    comment:
      "Excelente atención y resultados espectaculares. Gianinna y Gilda forman un equipo perfecto. Mi cabello siempre queda hermoso y saludable.",
    avatar: "/woman-with-beautiful-hair.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Lo que dicen nuestras clientas</h2>
          <p className="text-gold/80 text-lg max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gold/10 border-gold/20 hover:bg-gold/15 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gold text-black">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gold/90 italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
