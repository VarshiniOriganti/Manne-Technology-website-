"use client"

import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaveDivider } from "@/components/wave-divider"

export default function WhatWeDid() {
  return (
    <>
      <Header />

      <section className="bg-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What <span className="text-accent">We Did</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Portfolio - Our latest projects and successful work
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider />

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {[
              {
                title: "Branding Projects",
                category: "Branding",
                description: "Complete brand identity development and rebranding initiatives",
                details: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
                icon: "🎭",
              },
              {
                title: "Graphics Design",
                category: "Design",
                description: "High-quality graphics and visual content creation",
                details: ["Marketing Materials", "Social Media Graphics", "Illustrations", "Print Design"],
                icon: "🎨",
              },
              {
                title: "Mobile Applications",
                category: "Mobile",
                description: "Custom mobile app development for iOS and Android",
                details: ["Native Apps", "Cross-platform Apps", "App Design", "App Deployment"],
                icon: "📱",
              },
              {
                title: "Web Development",
                category: "Web",
                description: "Dynamic websites and web applications",
                details: ["Responsive Websites", "Web Apps", "E-commerce Sites", "CMS Solutions"],
                icon: "🌐",
              },
              {
                title: "UI/UX Design",
                category: "Design",
                description: "User interface and experience design for digital products",
                details: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
                icon: "✨",
              },
              {
                title: "Digital Solutions",
                category: "Technology",
                description: "Comprehensive technology solutions and integrations",
                details: ["Custom Development", "API Integration", "System Architecture", "Cloud Solutions"],
                icon: "💻",
              },
            ].map((portfolio, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-accent transition-all">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded">
                          {portfolio.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{portfolio.title}</h3>
                      <p className="text-gray-600 mb-6">{portfolio.description}</p>

                      <div>
                        <p className="text-sm text-accent font-semibold mb-3">Included Services</p>
                        <div className="grid grid-cols-2 gap-3">
                          {portfolio.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                              <span className="text-accent">✓</span>
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-32 flex-shrink-0">
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 flex items-center justify-center h-32 border border-gray-200">
                        <div className="text-center">
                          <div className="text-3xl mb-2">{portfolio.icon}</div>
                          <p className="text-xs text-gray-600">Portfolio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
