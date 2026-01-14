import Link from "next/link"
import { Phone, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="pt-24 lg:pt-32 pb-16 lg:pb-24"
      style={{ background: "linear-gradient(135deg, #0F3556 0%, #0a2540 50%, #0F3556 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">HIPAA Compliant Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              We Handle Your <span style={{ color: "#2989B0" }}>Revenue Collection</span> While You Focus on Patient
              Care
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Professional medical billing services starting as low as <strong className="text-white">2.95%</strong> of
              monthly collections. Maximize your revenue with our expert RCM solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="text-white text-lg shadow-lg hover:opacity-90"
                style={{ backgroundColor: "#2989B0" }}
              >
                <Link href="#contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Link href="tel:+18005551234">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img src="/medical-professional-doctor-healthcare.jpg" alt="Medical Professional" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: "#0F3556" }}>
                    99%
                  </p>
                  <p className="text-sm text-gray-500">Claim Acceptance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
