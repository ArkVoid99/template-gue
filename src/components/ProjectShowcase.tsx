'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  longDescription?: string
  image: string
  tech: string[]
  category: string
  githubLink?: string | null
  liveLink?: string | null
}

const projectsData: Project[] = [
  {
    title: 'AI Analytics Dashboard',
    description: 'Modern analytics dashboard for AI SaaS platforms.',
    longDescription:
      'A sleek dashboard interface designed for artificial intelligence products with real-time charts, statistics, and fully responsive layouts.',
    image: '/images/ai-dashboard.jpg',
    tech: ['Next.js', 'Tailwind', 'TypeScript', 'Prisma'],
    category: 'AI',
    githubLink: null,
    liveLink: 'https://demo-ai-dashboard.vercel.app',
  },
  {
    title: 'Crypto Portfolio Tracker',
    description: 'Track your crypto assets with a beautiful UI.',
    longDescription:
      'A cross-platform crypto portfolio tracker featuring real-time pricing, interactive charts, and dark/light mode support.',
    image: '/images/crypto-app.jpg',
    tech: ['React', 'Node.js', 'WebSocket', 'Chart.js'],
    category: 'Finance',
    githubLink: 'https://github.com/username/crypto-tracker',
    liveLink: 'https://crypto-demo.vercel.app',
  },
  {
    title: 'SaaS Landing Page',
    description: 'High-converting landing page for SaaS startups.',
    longDescription:
      'A modern, SEO-optimized landing page designed to maximize conversion rates. Includes animations, smooth scrolling, and modular components.',
    image: '/images/saas-landing.jpg',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    category: 'SaaS',
    githubLink: null,
    liveLink: 'https://saas-landing-demo.vercel.app',
  },
  {
    title: 'Anime Streaming UI',
    description: 'Netflix-style anime streaming platform UI.',
    longDescription:
      'A visually stunning, responsive anime streaming user interface with dynamic carousels, hover animations, and immersive dark theme.',
    image: '/images/anime-ui.jpg',
    tech: ['React', 'Tailwind', 'Swiper.js', 'TMDB API'],
    category: 'UI Kit',
    githubLink: 'https://github.com/username/anime-ui',
    liveLink: 'https://anime-ui-demo.vercel.app',
  },
  {
    title: 'Developer Portfolio Template',
    description: 'Clean, minimal portfolio for modern developers.',
    longDescription:
      'A complete portfolio template with project showcase, blog, and contact form. Optimized for performance and accessibility.',
    image: '/images/dev-portfolio.jpg',
    tech: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    category: 'Portfolio',
    githubLink: 'https://github.com/username/dev-portfolio',
    liveLink: 'https://dev-portfolio-demo.vercel.app',
  },
  {
    title: 'Finance Mobile App UI',
    description: 'Beautiful banking & finance app interface.',
    longDescription:
      'A clean, minimal finance mobile application UI kit designed for banking and personal finance tracking.',
    image: '/images/finance-mobile.jpg',
    tech: ['React Native', 'Expo', 'NativeWind'],
    category: 'Mobile',
    githubLink: null,
    liveLink: 'https://dribbble.com/shots/finance-app',
  },
]

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['Semua', ...new Set(projectsData.map((p) => p.category))]

  const filteredProjects =
    selectedCategory === 'Semua'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory)

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto bg-[#0A0A0A] min-h-screen">
      {/* Glow Background Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-5xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-5xl" />
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Premium Next.js Templates
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Beautifully crafted interfaces for modern products. Built for developers, startups, and creators.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              selectedCategory === category
                ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/20'
                : 'bg-[#111] text-gray-300 border-[#222] hover:border-purple-400 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-[#111] border border-[#222] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(124,58,237,0.25)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gelap untuk konsistensi */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/80 transition-colors"
                    title="Lihat kode"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-3.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/80 transition-colors"
                  title="Detail project"
                >
                  <FaExternalLinkAlt size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <FaTimes size={18} />
              </button>

              <div className="relative h-56 sm:h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-500">
                    Tech:
                  </span>
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}