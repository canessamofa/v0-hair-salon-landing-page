import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)]">Luxe Hair Studio</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Where luxury meets artistry. Transform your look with our premium hair services and exclusive products.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-primary hover:text-primary/80 cursor-pointer" />
              <Facebook className="h-5 w-5 text-primary hover:text-primary/80 cursor-pointer" />
              <Twitter className="h-5 w-5 text-primary hover:text-primary/80 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Precision Cuts</li>
              <li>Color Artistry</li>
              <li>Luxury Treatments</li>
              <li>Special Occasions</li>
              <li>Bridal Packages</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Products</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Shampoo & Conditioner</li>
              <li>Styling Products</li>
              <li>Hair Treatments</li>
              <li>Color Care</li>
              <li>Gift Sets</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Luxury Avenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@luxehairstudio.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2025 Luxe Hair Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
