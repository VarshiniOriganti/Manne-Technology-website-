"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaveDivider } from "@/components/wave-divider"
import { AnimatedBackground } from "@/components/animated-background"

export default function WhoWeAre() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-orange-100/40 to-yellow-100/30">
          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite' }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-orange-300/25 to-yellow-300/25 rounded-full blur-3xl" style={{ animation: 'float 14s ease-in-out infinite', animationDelay: '4s' }}></div>
        </div>

        <AnimatedBackground
          imageUrl="/images/abstract-bg.svg"
          className="opacity-10"
        />
        <div className="relative z-10">
          <section className="pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <ScrollReveal>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Who <span className="text-accent">We Are</span>
                </h1>
                <p className="text-2xl text-gray-800 max-w-3xl leading-relaxed">
                  Design That Delivers Results - Creative Digital Web Design Agency
                </p>
              </ScrollReveal>
            </div>
          </section>
        </div>

        {/* Add float animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-30px) scale(1.05);
            }
          }
        `}</style>
      </div>

      <div className="relative z-30">
        <WaveDivider />
      </div>

      {/* About Section with Enhanced Styling */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/50" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">The Company</span>
                </h2>

                <div className="space-y-5">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are a <span className="font-semibold text-gray-900">creative digital web design agency</span> based out of Hyderabad, India who helps its global clients
                    to grow for online businesses through unique and economical designing solutions for mobile and web
                    platform.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We specialize in <span className="font-semibold text-gray-900">front-end design</span> and offering comprehensive designing solutions for websites, mobile
                    applications and software in <span className="text-amber-700 font-medium">UK, USA, India, New Zealand, Australia</span> and in many other European and
                    African regions.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our office is located in center of Hyderabad with quality resources, tools and technologies to provide
                    unmatched front-end web & mobile design and development services and solutions with <span className="font-semibold text-gray-900">time saving &
                      result oriented process</span>.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  {[
                    { value: "500+", label: "Projects" },
                    { value: "50+", label: "Clients" },
                    { value: "10+", label: "Years" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  x: {
                    duration: 1.2,
                    ease: [0.16, 0.77, 0.47, 0.99],
                    type: "spring",
                    stiffness: 50,
                    damping: 10
                  },
                  y: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="relative group"
              >
                {/* Image Container with Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/about.jpg"
                    alt="About our company"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Choose Us</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We bring together creativity, technology, and expertise to deliver exceptional results
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Global Reach",
                  description: "Serving clients across UK, USA, India, Australia, and beyond",
                  icon: "🌍",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Expert Team",
                  description: "Skilled designers and developers with years of experience",
                  icon: "👥",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Fast Delivery",
                  description: "Time-saving processes that deliver results quickly",
                  icon: "⚡",
                  color: "from-amber-500 to-orange-500"
                },
                {
                  title: "24/7 Support",
                  description: "Always available to help you succeed",
                  icon: "🛟",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Modern Tech",
                  description: "Latest tools and technologies for cutting-edge solutions",
                  icon: "💻",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Cost Effective",
                  description: "Economical solutions without compromising quality",
                  icon: "💰",
                  color: "from-rose-500 to-pink-500"
                },
                {
                  title: "Proven Results",
                  description: "Track record of successful projects and happy clients",
                  icon: "📈",
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored designs that match your unique vision",
                  icon: "🎨",
                  color: "from-orange-500 to-red-500"
                }
              ].map((feature, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="group relative"
                  >
                    {/* Animated Glow */}
                    <motion.div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />

                    {/* Card */}
                    <div className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 h-full">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} mb-4 text-2xl shadow-lg`}
                      >
                        {feature.icon}
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Animated Progress Bar */}
                      <motion.div
                        className={`mt-4 h-0.5 bg-gradient-to-r ${feature.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Premium Design */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Testimonials</span>
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-24 mx-auto mb-6" />
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                What our satisfied clients have to say about working with us
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

                  {/* Card Content */}
                  <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-6xl text-amber-200/40 leading-none">"</div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-40" />
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-[3px] border-white shadow-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg mb-6 relative z-10">
                      "{testimonial.testimonial}"
                    </p>

                    {/* Star Rating */}
                    <div className="flex gap-1 text-2xl">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="text-amber-500"
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
