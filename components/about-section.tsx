export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-[#D4AF37] mb-8">Nuestra Historia</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-white space-y-4">
                <p>
                  Con más de 35 años de experiencia en el mundo de la peluquería, mi historia ha estado marcada por la
                  dedicación, el sacrificio y el amor por esta profesión. Fui dueña de cinco peluquerías, pero tras los
                  cambios que trajo el estallido social y la pandemia, decidí enfocarme en lo esencial y quedarme con
                  dos espacios: en Pichilemu y Rancagua.
                </p>
                <p>
                  Desde el año 2020 trabajo junto a mi hija Gilda, compañera inseparable de esta pasión por más de 15
                  años. Juntas hemos creado un modelo de atención más íntimo y personalizado, donde cada clienta recibe
                  tiempo exclusivo, sin apuros, con toda la dedicación y cariño que merece.
                </p>
                <p>
                  A lo largo de mi carrera, he trabajado con personas de distintas culturas y estilos, aprendiendo de
                  cada una. Pero hay más que nunca creo que cada mujer merece un espacio especial para sí misma.
                </p>
                <p className="text-[#D4AF37] font-medium text-lg italic">
                  Gracias por estar, confiar y acompañarme en este camino.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gray-800 rounded-lg overflow-hidden border-2 border-[#D4AF37]">
                <img
                  src="/professional-hair-stylist-working-on-client-in-lux.jpg"
                  alt="Gianinna Canessa trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-[#D4AF37] text-black p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">35+</div>
                  <div className="text-sm">Años de</div>
                  <div className="text-sm">Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
