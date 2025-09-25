import { Button } from "@/components/ui/button"
import { Menu, Phone, MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-foreground">
              Luxe Hair Studio
            </h1>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Downtown Location</span>
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Appointment</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
