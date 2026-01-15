import { Check } from "lucide-react"

export function About() {
  const benefits = [
    "Less than 1% rejections",
    "99% claim acceptance rate",
    "100% HIPAA compliant",
    "Robust billing audits",
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/blue-guard-billing/medical-billing-team-office-professional.jpg" alt="Our Team" className="rounded-2xl shadow-xl" />
          </div>
          <div>
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "#2989B0" }}>
              About BlueGuardBilling
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6" style={{ color: "#0F3556" }}>
              Full-Service Medical Billing Company
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              BlueGuardBilling is a professional medical billing and revenue cycle management agency that offers
              cost-effective solutions for all RCM steps— From Eligibility Verification to Denial Management.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer affordable and flexible billing plans starting as low as 2.95% on Monthly Collections. Our
              medical billing and revenue cycle management solutions are trusted by medical practices across the United
              States.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(41, 137, 176, 0.1)" }}
                  >
                    <Check className="w-4 h-4" style={{ color: "#2989B0" }} />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
