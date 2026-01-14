"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you shortly.")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(800) 555-1234",
      href: "tel:+18005551234",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@blueguardbilling.com",
      href: "mailto:info@blueguardbilling.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Healthcare Blvd, Suite 100, Medical City, TX 75001",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "#2989B0" }}>
              Contact Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6" style={{ color: "#0F3556" }}>
              Get Your Free Consultation
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Ready to maximize your practice's revenue? Contact us today for a free, no-obligation consultation and see
              how we can help transform your revenue cycle.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="flex items-start gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ backgroundColor: "rgba(15, 53, 86, 0.1)" }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: "#0F3556" }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#0F3556" }}>
                      {item.title}
                    </p>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6" style={{ color: "#0F3556" }}>
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>
              <Select
                value={formData.specialty}
                onValueChange={(value) => setFormData({ ...formData, specialty: value })}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Your Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family-medicine">Family Medicine</SelectItem>
                  <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="other">Other Specialty</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Tell us about your practice and billing needs..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full text-white hover:opacity-90"
                style={{ backgroundColor: "#2989B0" }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
