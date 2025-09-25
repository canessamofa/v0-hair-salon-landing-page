import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-balance leading-tight">
                Transform your look with
                <span className="text-primary"> luxury hair artistry</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                Experience premium hair services and exclusive products at our award-winning salon. Where elegance meets
                expertise.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Your Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">5.0 (200+ reviews)</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <img
                src="/luxury-hair-salon-interior-with-elegant-styling-ch.jpg"
                alt="Luxury hair salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
