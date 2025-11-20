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

      <section className="bg-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Where <span className="text-accent">We Are</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Get in touch with our team
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative z-30">
        <WaveDivider />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
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
