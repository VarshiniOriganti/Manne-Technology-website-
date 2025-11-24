"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaveDivider } from "@/components/wave-divider"

export default function WhatWeDid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Branding", "Graphic", "Mobile", "Web"]

  const projects = [
    {
      title: "Kennel World",
      category: "Web",
      description: "A friendly and caring environment for pet lovers",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop&q=80",
      tags: ["Web Design", "Responsive"],
    },
    {
      title: "JR Travels",
      category: "Graphic",
      description: "The debut film by Srinag Seethi",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
      tags: ["Branding", "Graphics"],
    },
    {
      title: "Event Management",
      category: "Branding",
      description: "Making memories for a lifetime",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80",
      tags: ["Branding", "Design"],
    },
    {
      title: "Mobile App Design",
      category: "Mobile",
      description: "Innovative mobile solutions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
      tags: ["UI/UX", "Mobile"],
    },
    {
      title: "E-Commerce Platform",
      category: "Web",
      description: "Modern online shopping experience",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      tags: ["Web Development", "E-commerce"],
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand transformation",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
      tags: ["Branding", "Strategy"],
    },
    {
      title: "Social Media Campaign",
      category: "Graphic",
      description: "Engaging visual content",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
      tags: ["Graphics", "Marketing"],
    },
    {
      title: "Corporate Website",
      category: "Web",
      description: "Professional business presence",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=80",
      tags: ["Web Design", "Corporate"],
    },
    {
      title: "Fitness App",
      category: "Mobile",
      description: "Health tracking application",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop&q=80",
      tags: ["Mobile", "Health"],
    },
  ]

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-orange-100/40 to-yellow-100/30">
          {/* Floating Orbs */}
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl" style={{ animation: 'float 9s ease-in-out infinite' }}></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl" style={{ animation: 'float 11s ease-in-out infinite', animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-orange-300/25 to-yellow-300/25 rounded-full blur-3xl" style={{ animation: 'float 13s ease-in-out infinite', animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Explore our portfolio of successful projects across various industries
            </p>
          </ScrollReveal>
        </div>

        {/* Add float animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-25px) scale(1.05);
            }
          }
        `}</style>
      </section>

      <WaveDivider />

      {/* Portfolio Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-orange-50/20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-yellow-200/15 to-amber-200/15 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite', animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === category
                    ? "bg-accent text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block text-accent font-semibold text-sm mb-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, j) => (
                            <span
                              key={j}
                              className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Category badge (visible by default) */}
                    <div className="absolute top-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="bg-white/95 backdrop-blur-sm text-accent font-semibold px-3 py-1.5 rounded-full text-xs shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info (visible by default, hidden on hover) */}
                  <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
