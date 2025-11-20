"use client"

import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaveDivider } from "@/components/wave-divider"
import { AnimatedBackground } from "@/components/animated-background"

export default function WhoWeAre() {
  return (
    <>
      <Header />

      <section className="bg-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Who <span className="text-accent">We Are</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Design That Delivers Results - Creative Digital Web Design Agency
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative z-30">
        <WaveDivider />
      </div>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About The Company</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  We are a creative digital web design agency based out of Hyderabad, India who helps its global clients
                  to grow for online businesses through unique and economical designing solutions for mobile and web
                  platform.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  We specialize in front-end design and offering comprehensive designing solutions for websites, mobile
                  applications and software in UK, USA, India, New Zealand, Australia and in many other European and
                  African regions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our office is located in center of Hyderabad with quality resources, tools and technologies to provide
                  unmatched front-end web & mobile design and development services and solutions with time saving &
                  result oriented process.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Approach</h3>
                <p className="text-gray-600">
                  We combine creativity, technology, and strategic thinking to deliver solutions that not only look
                  great but also drive business results for our clients worldwide.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Expertise",
                description: "Deep technical knowledge in web design, mobile apps, and software development",
                icon: "🔬",
              },
              {
                title: "Innovation",
                description: "Creative and unique designing solutions for every project",
                icon: "💡",
              },
              {
                title: "Quality",
                description: "Unmatched quality with time-saving and result-oriented process",
                icon: "✨",
              },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Client Testimonials</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">What our satisfied clients have to say</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Mohan Reddy",
                company: "Tech Solutions Pvt Ltd",
                testimonial:
                  "Manne Technologies transformed our online presence completely. Their attention to detail and innovative approach to design is exceptional. We saw a 40% increase in customer engagement within the first month.",
                image: "/mohan-reddy-professional.jpg",
              },
              {
                name: "Sneha Reddy",
                company: "Fashion Retail Co",
                testimonial:
                  "Working with Manne was a delightful experience. Their team understood our brand vision perfectly and delivered a stunning website. The mobile app they developed has received amazing user feedback.",
                image: "/sneha-reddy-professional.jpg",
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-accent text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{testimonial.testimonial}"</p>
                  <div className="mt-4 flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
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
