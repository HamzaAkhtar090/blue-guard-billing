export function Stats() {
  const stats = [
    { value: "99%", label: "Claim Acceptance Rate" },
    { value: "50+", label: "Specialties Served" },
    { value: "200+", label: "Healthcare Providers" },
    { value: "50", label: "States Served" },
  ]

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{
                  background: "linear-gradient(135deg, #0F3556 0%, #2989B0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
