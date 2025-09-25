import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { LocationSection } from "@/components/location-section"
import { ServicesGrid } from "@/components/services-grid"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section id="home">
        <HeroCarousel />
      </section>

      <LocationSection />

      <section id="services">
        <ServicesGrid />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="products">
        <ProductsSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <div className="h-24"></div>
    </main>
  )
}
