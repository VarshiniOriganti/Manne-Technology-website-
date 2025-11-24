"use client"

import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaveDivider } from "@/components/wave-divider"

export default function WhatWeDo() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Transform your digital presence with stunning, high-performance websites that captivate your audience and drive measurable results.",
      features: [
        "Responsive design across all devices",
        "Modern frameworks (Next.js, React)",
        "Performance optimization & SEO",
        "Custom CMS integration",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android platforms.",
      features: [
        "Native iOS & Android development",
        "Cross-platform solutions (React Native, Flutter)",
        "App Store optimization",
        "Push notifications & analytics",
        "Offline functionality"
      ]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create intuitive, engaging digital experiences.",
      features: [
        "User research & persona development",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Usability testing",
        "Design system creation"
      ]
    },
    {
      title: "E-commerce Solutions",
      description: "Build powerful online stores with seamless checkout experiences that convert visitors into loyal customers.",
      features: [
        "Custom e-commerce platforms",
        "Payment gateway integration",
        "Inventory management systems",
        "Shopping cart optimization",
        "Multi-currency & multi-language support"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that amplify your brand, engage your audience, and accelerate growth.",
      features: [
        "Social media marketing",
        "Content marketing strategy",
        "Email marketing campaigns",
        "PPC advertising (Google Ads, Facebook Ads)",
        "Conversion rate optimization"
      ]
    },
    {
      title: "SEO & Analytics",
      description: "Data-driven strategies to improve search rankings, drive organic traffic, and provide actionable insights for growth.",
      features: [
        "Technical SEO audits",
        "Keyword research & strategy",
        "On-page & off-page optimization",
        "Google Analytics setup & reporting",
        "Performance tracking & insights"
      ]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competitive landscape to create a tailored strategy.",
      icon: "🎯"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates wireframes, mockups, and prototypes to visualize the solution before development begins.",
      icon: "✏️"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies, with rigorous testing to ensure quality and performance.",
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support, maintenance, and optimization to ensure continued success.",
      icon: "🚀"
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Figma", category: "Design" },
    { name: "Git", category: "Version Control" }
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-orange-100/40 to-yellow-100/30">
          {/* Floating Orbs */}
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl" style={{ animation: 'float 9s ease-in-out infinite' }}></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl" style={{ animation: 'float 11s ease-in-out infinite', animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-300/25 to-yellow-300/25 rounded-full blur-3xl" style={{ animation: 'float 13s ease-in-out infinite', animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What <span className="text-accent">We Do</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Comprehensive digital solutions designed to transform your business and accelerate growth in the digital age
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

      <div className="relative z-30">
        <WaveDivider />
      </div>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
                  Our Expertise
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-accent">Services</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end digital solutions tailored to your unique business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className="group relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Animated accent border */}
                  <div className="absolute top-0 left-0 w-2 h-0 bg-gradient-to-b from-accent via-orange-500 to-accent/70 transition-all duration-500 group-hover:h-full rounded-tl-xl"></div>

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-orange-500/0 to-accent/0 group-hover:from-accent/10 group-hover:via-orange-500/5 group-hover:to-accent/10 transition-all duration-500 rounded-xl"></div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>

                  {/* Floating decorative element */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent/20 to-orange-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Number badge */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-accent to-orange-500 rounded-lg mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-white font-bold text-base">{String(index + 1).padStart(2, '0')}</span>
                    </div>

                    {/* Title with gradient on hover */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-3 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-accent"></span>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs text-gray-600 group-hover:translate-x-2 transition-all duration-300"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center mr-2 mt-0.5 group-hover:bg-accent/20 transition-all duration-300">
                              <span className="text-accent text-xs font-bold">✓</span>
                            </span>
                            <span className="group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn more link */}
                    <div className="mt-4 pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="text-accent font-semibold text-xs flex items-center gap-2 hover:gap-3 transition-all duration-300">
                        Learn More
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Custom animations */}
          <style jsx>{`
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes pulse-glow {
              0%, 100% {
                box-shadow: 0 0 20px rgba(251, 146, 60, 0.3);
              }
              50% {
                box-shadow: 0 0 40px rgba(251, 146, 60, 0.5);
              }
            }
            
            .animate-fade-in-up {
              animation: fade-in-up 0.8s ease-out forwards;
              opacity: 0;
            }
          `}</style>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/5 via-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
                  Our Tools
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Technology <span className="text-accent">Stack</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We leverage cutting-edge technologies to build robust, scalable solutions
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-white px-8 py-4 rounded-2xl shadow-md border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fade-in-scale 0.5s ease-out forwards'
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  </div>

                  <div className="relative z-10 flex items-center gap-3">
                    <span className="font-bold text-lg text-gray-900 group-hover:text-accent transition-colors duration-300">
                      {tech.name}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                      {tech.category}
                    </span>
                  </div>

                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Additional styling for fade-in animation */}
          <style jsx>{`
            @keyframes fade-in-scale {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      </section>

    </>
  )
}
