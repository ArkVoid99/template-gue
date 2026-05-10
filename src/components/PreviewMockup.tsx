import Image from 'next/image'

export default function PreviewMockup() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Stunning Visual Experience
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-14">
          See how Nexfolio looks in action. A sleek, dark-themed interface that your clients will love.
        </p>

        <div className="relative group max-w-4xl mx-auto">
          {/* Browser Frame */}
          <div className="flex items-center gap-2 bg-[#1A1A1A] p-3 rounded-t-xl border border-b-0 border-[#333]">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <div className="ml-3 bg-[#111] rounded-full px-4 py-1 text-xs text-gray-400 flex-1 max-w-xs">
              https://template-gue.vercel.app
            </div>
          </div>
          {/* Gambar Mockup */}
          <div className="border border-[#333] rounded-b-xl overflow-hidden shadow-2xl shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-500">
            <Image
              src="/images/mockup-preview.jpg"
              alt="Nexfolio Template Preview"
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-gray-400 text-sm">
          <span className="flex items-center gap-1">🖥️ Desktop Ready</span>
          <span className="flex items-center gap-1">📱 Mobile Optimized</span>
          <span className="flex items-center gap-1">✨ Smooth Animations</span>
        </div>
      </div>
    </section>
  )
}