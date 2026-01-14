import Link from "next/link"
import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#specialties", label: "Specialties" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  const services = [
    "Medical Billing",
    "Credentialing",
    "Accounts Receivable",
    "Denial Management",
    "Practice Management",
    "Eligibility Verification",
  ]

  return (
    <footer style={{ backgroundColor: "#0F3556" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                BlueGuard<span style={{ color: "#2989B0" }}>Billing</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Professional medical billing services trusted by healthcare providers across the United States. HIPAA
              compliant, affordable, and results-driven.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              100% HIPAA Compliant
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:+18005551234"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (800) 555-1234
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@blueguardbilling.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@blueguardbilling.com
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>123 Healthcare Blvd, Suite 100, Medical City, TX 75001</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} BlueGuardBilling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
