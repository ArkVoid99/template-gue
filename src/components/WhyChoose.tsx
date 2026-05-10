export default function WhyChoose() {
  const features = [
    {
      icon: '⚡',
      title: 'Next.js 15 Ready',
      desc: 'Built with the latest App Router for optimal performance and SEO.',
    },
    {
      icon: '🎨',
      title: 'Fully Customizable',
      desc: 'Easily tweak colors, fonts, and content using Tailwind utility classes.',
    },
    {
      icon: '📱',
      title: '100% Responsive',
      desc: 'Looks pixel-perfect on mobile, tablet, and desktop screens.',
    },
    {
      icon: '🌙',
      title: 'Modern Dark UI',
      desc: 'A professionally designed dark theme that is easy on the eyes.',
    },
    {
      icon: '🚀',
      title: 'Optimized Performance',
      desc: 'Lighthouse score 95+. Fast load times for better user experience.',
    },
    {
      icon: '🔄',
      title: 'Lifetime Updates',
      desc: 'Buy once and get all future improvements for free.',
    },
  ]

  return (
    <section className="bg-[#0A0A0A] py-20 px-4 border-t border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Why Choose Nexfolio?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-14">
          More than just a template. A professional shortcut to launch your next big idea.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#111] border border-[#222] p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}