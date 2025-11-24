"use client"

import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <PageLayout>
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Dynamic Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50/30">
            <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/25 to-yellow-300/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <style jsx global>{`
            @keyframes gradientShift {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0) scale(1);
              }
              50% {
                transform: translateY(-20px) scale(1.05);
              }
            }

            .animate-float {
              animation: float 8s ease-in-out infinite;
            }
            
            .bg-gradient-mesh {
              background: linear-gradient(
                135deg,
                rgba(217, 119, 6, 0.08) 0%,
                rgba(251, 146, 60, 0.08) 25%,
                rgba(245, 158, 11, 0.08) 50%,
                rgba(234, 179, 8, 0.08) 75%,
                rgba(217, 119, 6, 0.08) 100%
              );
              background-size: 400% 400%;
              animation: gradientShift 15s ease infinite;
            }
            
            @keyframes slide {
              0% {
                transform: translateX(0) scale(1);
              }
              50% {
                transform: translateX(20px) scale(1.05);
              }
              100% {
                transform: translateX(0) scale(1);
              }
            }

            @keyframes shimmer {
              0% {
                transform: translateX(-100%) rotate(45deg);
              }
              100% {
                transform: translateX(200%) rotate(45deg);
              }
            }

            @keyframes cardFloat {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes cardPulse {
              0%, 100% {
                box-shadow: 0 0 0 0 rgba(217, 119, 6, 0);
              }
              50% {
                box-shadow: 0 0 0 10px rgba(217, 119, 6, 0.1);
              }
            }

            .service-card {
              animation: cardFloat 6s ease-in-out infinite;
              position: relative;
              overflow: hidden;
            }

            .service-card:nth-child(1) {
              animation-delay: 0s;
            }

            .service-card:nth-child(2) {
              animation-delay: 0.5s;
            }

            .service-card:nth-child(3) {
              animation-delay: 1s;
            }

            .service-card::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(217, 119, 6, 0.1),
                transparent
              );
              transform: translateX(-100%) rotate(45deg);
            }

            .service-card:hover::before {
              animation: shimmer 1.5s ease-in-out;
            }

            .service-card:hover {
              animation: cardFloat 6s ease-in-out infinite, cardPulse 2s ease-in-out infinite;
            }
          `}</style>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-accent">Design That</span> Delivers Results
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We are a creative digital web design agency based in Hyderabad, India helping global clients grow their
                  online businesses through unique and economical designing solutions.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    With over a decade of experience in the industry, we specialize in creating beautiful, functional, and high-performance digital solutions tailored to your business needs.
                  </p>
                </div>
              </div>

              <div className="hidden md:block relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 ring-2 ring-accent/20 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=80"
                    alt="Creative Team Collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{
                      animation: 'slide 5s ease-in-out infinite',
                      borderRadius: '0.75rem',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: 'translateY(0)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>


        </section>
      </PageLayout>

      {/* Stats Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 via-white to-orange-50/20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
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
      <section className="relative py-20 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/40 to-orange-50/30">
          <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-tr from-yellow-200/15 to-amber-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              },
              {
                title: "Web Development",
                description: "Building responsive, high-performance websites and web applications",
              },
              {
                title: "UI/UX Design",
                description: "Crafting beautiful and user-friendly digital experiences",
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="service-card group h-full bg-white p-8 rounded-2xl border-2 border-accent/40 hover:border-accent/70 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-gray-50 hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-amber-50/40">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tr from-yellow-300/15 to-orange-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-amber-300/10 to-yellow-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Masterpieces</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our latest work where creativity meets technology.
              </p>

            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Web Design */}
            <ScrollReveal delay={100}>
              <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/project-web.png"
                  alt="Modern Web Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent font-semibold mb-2 block">Web Design</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Neon FinTech</h3>
                    <p className="text-gray-300 text-sm">Next.js • Tailwind • Framer Motion</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Mobile App */}
            <ScrollReveal delay={200}>
              <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/project-mobile.png"
                  alt="Mobile App Interface"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent font-semibold mb-2 block">Mobile App</span>
                    <h3 className="text-2xl font-bold text-white mb-2">FitTrack Pro</h3>
                    <p className="text-gray-300 text-sm">React Native • iOS • Android</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Digital Marketing */}
            <ScrollReveal delay={300}>
              <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/Digital image.jpeg"
                  alt="Digital Marketing Strategies"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent font-semibold mb-2 block">Digital Marketing</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Growth Engine</h3>
                    <p className="text-gray-300 text-sm">SEO • Social Media • Analytics</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
