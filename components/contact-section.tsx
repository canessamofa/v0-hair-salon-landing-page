import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Luxury Avenue", "Downtown District", "City, State 12345"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-4567", "Text appointments welcome"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9AM-8PM", "Sat: 8AM-6PM", "Sun: 10AM-5PM"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@luxehairstudio.com", "We respond within 24 hours"],
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-playfair)] text-balance">
            Book Your Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to experience luxury hair artistry? Contact us today to schedule your appointment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Ready to get started?</h3>
            <p className="text-muted-foreground">
              Book your appointment online or call us directly. We can't wait to create your perfect look.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Online Now
            </Button>
            <Button variant="outline" size="lg">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
