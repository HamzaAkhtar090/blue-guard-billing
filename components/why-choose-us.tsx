import { Clock, Users, Award, HeadphonesIcon } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support for all your billing queries and concerns.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Experienced billing specialists assigned exclusively to your practice.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "15+ years of experience in medical billing and revenue cycle management.",
    },
    {
      icon: HeadphonesIcon,
      title: "Personalized Service",
      description: "Customized solutions tailored to your specific specialty and needs.",
    },
  ]

  return (
    <section
      className="py-16 lg:py-24"
      style={{ background: "linear-gradient(135deg, #0F3556 0%, #0a2540 50%, #0F3556 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "#2989B0" }}>
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">Your Trusted Medical Billing Partner</h2>
          <p className="text-white/80 text-lg">
            We are committed to maximizing your revenue while you focus on delivering quality patient care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
