import { Heart, Brain, Stethoscope, Baby, Eye, Bone, Activity, Pill } from "lucide-react"

export function Specialties() {
  const specialties = [
    { icon: Heart, name: "Cardiology" },
    { icon: Brain, name: "Neurology" },
    { icon: Stethoscope, name: "Internal Medicine" },
    { icon: Baby, name: "Pediatrics" },
    { icon: Eye, name: "Ophthalmology" },
    { icon: Bone, name: "Orthopedics" },
    { icon: Activity, name: "Radiology" },
    { icon: Pill, name: "Dermatology" },
  ]

  return (
    <section id="specialties" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "#2989B0" }}>
            Specialties We Serve
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4" style={{ color: "#0F3556" }}>
            Expert Billing for 50+ Medical Specialties
          </h2>
          <p className="text-gray-600 text-lg">
            Our certified coders and billers have expertise across all medical specialties, ensuring maximum
            reimbursement for your practice.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "rgba(15, 53, 86, 0.1)" }}
              >
                <specialty.icon className="w-6 h-6" style={{ color: "#0F3556" }} />
              </div>
              <h3 className="font-semibold" style={{ color: "#0F3556" }}>
                {specialty.name}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8">And many more specialties...</p>
      </div>
    </section>
  )
}
