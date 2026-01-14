"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#specialties", label: "Specialties" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#0F3556" }}
            >
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: "#0F3556" }}>
              BlueGuard<span style={{ color: "#2989B0" }}>Billing</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 font-medium transition-colors hover:opacity-80"
                style={{ ["--hover-color" as string]: "#0F3556" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+18005551234"
              className="flex items-center gap-2 font-semibold"
              style={{ color: "#0F3556" }}
            >
              <Phone className="w-5 h-5" />
              (800) 555-1234
            </Link>
            <Button asChild className="text-white" style={{ backgroundColor: "#2989B0" }}>
              <Link href="#contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2"
            style={{ color: "#0F3556" }}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold" style={{ color: "#0F3556" }}>
              Menu
            </span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 font-medium py-2 border-b border-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="tel:+18005551234"
              className="flex items-center gap-2 font-semibold mb-4"
              style={{ color: "#0F3556" }}
            >
              <Phone className="w-5 h-5" />
              (800) 555-1234
            </Link>
            <Button asChild className="w-full text-white" style={{ backgroundColor: "#2989B0" }}>
              <Link href="#contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
