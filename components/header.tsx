"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Search } from "lucide-react"
import { AnimatedBackground } from "./animated-background"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WHO WE ARE", href: "/who-we-are" },
    { label: "WHAT WE DO", href: "/what-we-do" },
    { label: "WHAT WE DID", href: "/what-we-did" },
    { label: "WHERE WE ARE", href: "/where-we-are" }
  ]

  return (
    <header className="sticky top-0 z-50 text-white relative overflow-hidden">
      <AnimatedBackground 
        imageUrl="/background%20image.jpg" 
        speed={0.5} 
      />
      {/* Top Bar */}
      <div className="bg-black/80 px-6 py-2 text-sm relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 text-white/90">
            <a href="tel:+919666966132" className="text-white/90 hover:text-white transition-colors">
              📞 +91-9666-966-132
            </a>
            <a href="mailto:info@manne.co.in" className="text-white/90 hover:text-white transition-colors">
              ✉️ info@manne.co.in
            </a>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity animate-fade-in">
            <img 
              src="/manne.logo.png"   
              className="h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href) ? "text-primary border-b-2 border-primary pb-1 font-semibold" : "text-white hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search Icon */}
          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
            <Search size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Wave Animation */}
    </header>
  )
}
