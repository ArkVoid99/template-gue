export default function Pricing() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-4 border-t border-[#1F1F1F]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-14">
          Get lifetime access to Nexfolio and all future updates.
        </p>

        <div className="max-w-sm mx-auto bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-2">Lifetime License</h3>
          <p className="text-gray-400 text-sm mb-6">
            Perfect for developers, startups, and creators.
          </p>
          <div className="text-5xl font-extrabold text-white mb-4">
            $35<span className="text-lg text-gray-500 font-normal">/once</span>
          </div>
          <ul className="text-left text-gray-400 text-sm space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Full source code
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 6 ready-to-use sections
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Lifetime updates
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Commercial & personal use
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 24/7 support
            </li>
          </ul>
          <a
            href="https://kazuharate.gumroad.com/l/nexfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  )
}