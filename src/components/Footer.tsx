export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Nexfolio
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Premium Next.js Templates
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-gray-400 text-sm">
          <a href="#templates" className="hover:text-white transition-colors">
            Templates
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#preview" className="hover:text-white transition-colors">
            Preview
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Nexfolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}