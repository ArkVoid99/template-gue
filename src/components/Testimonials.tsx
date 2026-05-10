export default function Testimonials() {
  const testimonials = [
    {
      quote: "This template saved me hours of work. Absolutely stunning design.",
      name: "Alex",
      role: "Frontend Developer",
    },
    {
      quote: "Nexfolio is incredibly easy to customize. The dark mode is gorgeous.",
      name: "Sarah",
      role: "Startup Founder",
    },
    {
      quote: "I was blown away by the animations. It makes my portfolio feel alive.",
      name: "Rio",
      role: "UI/UX Designer",
    },
  ]

  return (
    <section className="bg-[#0A0A0A] py-20 px-4 border-t border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Trusted by Developers
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-14">
          Join hundreds of developers, startups, and creators who are building faster with Nexfolio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111] border border-[#222] p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 relative"
            >
              <div className="text-purple-400 text-4xl mb-4">&ldquo;</div>
              <p className="text-gray-300 italic mb-6">{t.quote}</p>
              <div className="border-t border-[#222] pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}