import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Family Medicine, Texas",
      content:
        "BlueGuardBilling transformed our revenue cycle. Our collections increased by 35% within the first six months. Highly recommended!",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthopedic Surgery, California",
      content:
        "The team at BlueGuardBilling is exceptional. They handle all our billing needs professionally, allowing us to focus on patient care.",
      rating: 5,
    },
    {
      name: "Dr. Jennifer Adams",
      title: "Internal Medicine, New York",
      content:
        "Switching to BlueGuardBilling was the best decision for our practice. Their denial management saved us thousands in lost revenue.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "#2989B0" }}>
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4" style={{ color: "#0F3556" }}>
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by healthcare providers across the United States for our reliable and professional billing services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted rounded-xl p-6 lg:p-8 relative">
              <Quote className="w-10 h-10 absolute top-6 right-6" style={{ color: "rgba(41, 137, 176, 0.2)" }} />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold" style={{ color: "#0F3556" }}>
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
