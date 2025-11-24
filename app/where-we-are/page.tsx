"use client"

import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaveDivider } from "@/components/wave-divider"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function WhereWeAre() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Our Location",
      description: "123 Tech Park, HITEC City, Hyderabad, Telangana 500081, India"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Us",
      description: "info@manne.co.in"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Call Us",
      description: "+91 9666 966 132"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Working Hours",
      description: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM"
    }
  ]

  return (
    <>
      <Header />

      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-orange-100/40 to-yellow-100/30">
          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite' }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-300/25 to-yellow-300/25 rounded-full blur-3xl" style={{ animation: 'float 14s ease-in-out infinite', animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Where <span className="text-accent">We Are</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Get in touch with our team
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
              transform: translateY(-30px) scale(1.05);
            }
          }
        `}</style>
      </section>

      <div className="relative z-30">
        <WaveDivider />
      </div>

      <section className="relative py-20 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-orange-50/20">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" style={{ animation: 'float 11s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-yellow-200/15 to-amber-200/15 rounded-full blur-3xl" style={{ animation: 'float 13s ease-in-out infinite', animationDelay: '2.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Office</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Find Us on Map</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1893951972047!2d78.36787431487691!3d17.44772108803793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19630804d2d8a3a2!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
