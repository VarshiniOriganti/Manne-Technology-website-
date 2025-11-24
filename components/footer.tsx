'use client';

import { useState, useEffect } from 'react';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#3a2a1e] text-white">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="relative pt-20 pb-8">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {/* Facebook */}
          <a href="#" className="w-12 h-12 rounded-full border-2 border-[#d97706] flex items-center justify-center hover:bg-[#d97706] transition-all duration-300 group">
            <svg className="w-5 h-5 fill-[#d97706] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" className="w-12 h-12 rounded-full border-2 border-[#d97706] flex items-center justify-center hover:bg-[#d97706] transition-all duration-300 group">
            <svg className="w-5 h-5 fill-[#d97706] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="w-12 h-12 rounded-full border-2 border-[#d97706] flex items-center justify-center hover:bg-[#d97706] transition-all duration-300 group">
            <svg className="w-5 h-5 fill-[#d97706] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Google+ */}
          <a href="#" className="w-12 h-12 rounded-full border-2 border-[#d97706] flex items-center justify-center hover:bg-[#d97706] transition-all duration-300 group">
            <svg className="w-5 h-5 fill-[#d97706] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.335 3.295-2.512 0-4.57-2.082-4.57-4.655 0-2.573 2.058-4.655 4.57-4.655 1.431 0 2.387.609 2.936 1.133l2.07-1.995C10.967 5.027 9.455 4.5 7.635 4.5c-4.138 0-7.5 3.362-7.5 7.5s3.362 7.5 7.5 7.5c4.328 0 7.203-3.043 7.203-7.328 0-.492-.053-.867-.118-1.24H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.182v2.184h2.183v-2.184H24v-2.181z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="w-12 h-12 rounded-full border-2 border-[#d97706] flex items-center justify-center hover:bg-[#d97706] transition-all duration-300 group">
            <svg className="w-5 h-5 fill-[#d97706] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" className="w-12 h-12 rounded-full border-2 border-[#d97706] flex items-center justify-center hover:bg-[#d97706] transition-all duration-300 group">
            <svg className="w-5 h-5 fill-[#d97706] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Decorative Line */}
        <div className="max-w-4xl mx-auto mb-8 relative">
          <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d97706]/30 to-transparent"></div>
          <div className="absolute left-1/4 top-1/2 w-2 h-2 bg-[#d97706] rounded-full transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-[#d97706] rounded-full transform -translate-y-1/2"></div>
          <div className="absolute right-1/4 top-1/2 w-2 h-2 bg-[#d97706] rounded-full transform -translate-y-1/2"></div>
        </div>

        {/* Footer Text */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto px-6 text-sm">
          <p className="text-white/90 mb-4 md:mb-0">© 2011-2020 ALL RIGHTS RESERVED</p>
          <p className="text-white/90">
            MADE WITH <span className="text-red-500">❤</span> BY <span className="text-[#d97706] font-semibold">PRAVEEN MANNE</span>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-[#3a2a1e] transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  );
}
