'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight text-balance">
                Streamline Doctor-Patient <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Connections</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Manage appointments, secure medical records, and real-time communication in one unified platform. Designed for modern healthcare.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">Easy online appointment booking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">Secure patient medical records</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">Instant doctor-patient messaging</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setDemoOpen(true)}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl opacity-50"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="space-y-6 w-full max-w-sm">
                {/* Mockup cards */}
                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-slate-200 rounded w-24"></div>
                      <div className="h-2 bg-slate-100 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-200 rounded"></div>
                    <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 ml-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-slate-200 rounded w-28"></div>
                      <div className="h-2 bg-slate-100 rounded w-36"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-200 rounded"></div>
                    <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
