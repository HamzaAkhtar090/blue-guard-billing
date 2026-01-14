import { FileText, Shield, DollarSign, Building2, Ban, ClipboardCheck } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Medical Billing",
      description:
        "Complete medical billing services including charge entry, claim submission, and payment posting with maximum accuracy.",
      variant: "primary",
    },
    {
      icon: Shield,
      title: "Credentialing",
      description:
        "Expert provider credentialing and enrollment services to get you contracted with insurance payers quickly.",
      variant: "light",
    },
    {
      icon: DollarSign,
      title: "Accounts Receivable",
      description:
        "Aggressive AR follow-up and recovery services to minimize aging receivables and maximize collections.",
      variant: "primary",
    },
    {
      icon: Building2,
      title: "Practice Management",
      description: "Comprehensive practice management solutions to streamline operations and improve efficiency.",
      variant: "light",
    },
    {
      icon: Ban,
      title: "Denial Management",
      description: "Expert denial analysis and appeal services to recover lost revenue and prevent future denials.",
      variant: "primary",
    },
    {
      icon: ClipboardCheck,
      title: "Eligibility Verification",
      description: "Real-time insurance eligibility verification to reduce claim denials and improve collections.",
      variant: "light",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "#2989B0" }}>
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4" style={{ color: "#0F3556" }}>
            Comprehensive Revenue Cycle Management
          </h2>
          <p className="text-gray-600 text-lg">
            Our customized RCM services are highly cost-effective and provide the best value for medical providers
            across the United States.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: service.variant === "primary" ? "rgba(15, 53, 86, 0.1)" : "rgba(41, 137, 176, 0.1)",
                }}
              >
                <service.icon
                  className="w-7 h-7"
                  style={{ color: service.variant === "primary" ? "#0F3556" : "#2989B0" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#0F3556" }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
