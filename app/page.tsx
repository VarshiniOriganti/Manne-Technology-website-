"use client"

import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-32 overflow-hidden">
        <AnimatedBackground imageUrl="/abstract-bg.jpg" speed={0.5} />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-accent">Design That</span> Delivers Results
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a creative digital web design agency based in Hyderabad, India helping global clients grow their
                online businesses through unique and economical designing solutions.
              </p>
              <div className="flex gap-4">
                <Link href="/what-we-do">
                  <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 rounded-lg inline-flex items-center gap-2">
                    Explore Services <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link href="/where-we-are">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 px-8 py-6 bg-transparent"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative h-96 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg overflow-hidden border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-accent/30 mb-4">∞</div>
                    <p className="text-gray-500 text-lg">Digital Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Completed Projects" },
              { number: "9", label: "Partners" },
              { number: "150+", label: "Clients" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Core Services</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Comprehensive technology solutions for websites, mobile applications and software
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mobile App Development",
                description: "Creating innovative mobile applications for iOS and Android platforms",
                icon: "📱",
              },
              {
                title: "Web Development",
                description: "Building responsive, high-performance websites and web applications",
                icon: "🌐",
              },
              {
                title: "UI/UX Design",
                description: "Crafting beautiful and user-friendly digital experiences",
                icon: "🎨",
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-gray-50 p-8 rounded-lg hover:border-accent border border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's work together to unlock your organization's digital potential
            </p>
            <Link href="/where-we-are">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 rounded-lg">
                Contact Our Team
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
