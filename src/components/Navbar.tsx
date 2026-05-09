'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50 w-full bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Nexfolio
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#templates" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Templates
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="#preview" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Preview
            </Link>
            <Link href="#get-started" className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-all shadow-lg shadow-purple-500/20">
              Get Started
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#1F1F1F]">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link href="#templates" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Templates
            </Link>
            <Link href="#pricing" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="#preview" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Preview
            </Link>
            <Link href="#get-started" className="block px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium text-center transition-all">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}