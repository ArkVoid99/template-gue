'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 max-w-7xl mx-auto text-center overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-8xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-8xl" />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        New templates available
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[0.95] max-w-4xl mx-auto">
        Build stunning products with{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          premium templates
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        Beautifully crafted Next.js & Tailwind templates for modern developers, startups, and creators.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://kazuharate.gumroad.com/l/nexfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(124,58,237,0.35)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
        >
          Get Nexfolio Now
        </a>
        <a
          href="#preview"
          className="px-8 py-3.5 rounded-full bg-[#111] border border-[#222] hover:border-purple-500/50 text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:scale-105"
        >
          Live Preview
        </a>
      </div>

      {/* Stats + Trust */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold text-lg">50+</span>
          <span>Components</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold text-lg">6</span>
          <span>Templates</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold text-lg">∞</span>
          <span>Updates</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-green-400 font-bold text-lg">✓</span>
          <span>Trusted by 500+ developers</span>
        </div>
      </div>
    </section>
  )
}