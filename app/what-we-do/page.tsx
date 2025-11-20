"use client"

import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaveDivider } from "@/components/wave-divider"

export default function WhatWeDo() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom, responsive websites that deliver exceptional user experiences and drive conversions.",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and engagement.",
      icon: "🎨"
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores with seamless checkout experiences.",
      icon: "🛒"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      icon: "📈"
    },
    {
      title: "SEO & Analytics",
      description: "Data-driven strategies to improve search rankings and drive organic traffic.",
      icon: "🔍"
    }
  ]

  return (
    <>
      <Header />

      <section className="bg-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What <span className="text-accent">We Do</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Comprehensive digital solutions to grow your business
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative z-30">
        <WaveDivider />
      </div>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
