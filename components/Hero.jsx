'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const BENEFITS = [
  'Easy online appointment booking',
  'Secure patient medical records',
  'Instant doctor-patient messaging',
]

const STATS = [
  { value: '50K+', label: 'Active Patients'    },
  { value: '3K+',  label: 'Doctors Registered' },
  { value: '98%',  label: 'Satisfaction Rate'  },
]

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: '#060E1F' }}
      >
        {/* ── Grid lines ── */}
        <div className="hero-bg absolute inset-0 z-0" style={{
          background:
            'radial-gradient(ellipse 70% 60% at 75% 40%, rgba(30,206,202,.12) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 50% at 15% 80%, rgba(201,168,76,.06) 0%, transparent 55%)',
        }} />

        <div className="relative z-10 w-full container mx-auto px-6 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(30,206,202,.1)', border: '1px solid rgba(30,206,202,.25)', color: '#1ECECA' }}>
                <span className="pulse-dot relative w-2 h-2 rounded-full" style={{ background: '#1ECECA' }} />
                Healthcare Platform
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-3">
                <h1 className="font-serif font-light leading-[1.05] text-white"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
                  Streamline<br />
                  <em className="italic" style={{ color: '#1ECECA' }}>Doctor–Patient</em><br />
                  <strong className="font-semibold">Connections.</strong>
                </h1>
                <p className="text-[1.05rem] leading-[1.8] max-w-[440px]" style={{ color: '#8899BB' }}>
                  Manage appointments, secure medical records, and real-time
                  communication in one unified platform built for modern healthcare.
                </p>
              </div>

              {/* Benefits */}
              <ul className="flex flex-col gap-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[0.9rem]" style={{ color: '#8899BB' }}>
                    <CheckCircle size={16} style={{ color: '#1ECECA', flexShrink: 0 }} strokeWidth={2.2} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#3DD8D8' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2 text-[0.9rem] font-semibold px-7 py-[0.85rem] rounded-full"
                  style={{ background: '#1ECECA', color: '#060E1F', boxShadow: '0 0 28px rgba(30,206,202,.3)' }}
                >
                  Get Started Free <ArrowRight size={18} />
                </motion.button>

                <motion.button
                  whileHover={{ borderColor: 'rgba(30,206,202,.5)', color: '#1ECECA' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setDemoOpen(true)}
                  className="inline-flex items-center gap-2 text-[0.9rem] font-medium px-7 py-[0.85rem] rounded-full"
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.15)', color: '#ffffff' }}
                >
                  <Play size={16} fill="currentColor" /> Watch Demo
                </motion.button>
              </div>

              {/* Stats row */}
              <div className="flex gap-10 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: '1.5rem' }}>
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-serif font-semibold text-[2rem] leading-none">
                      <span className="text-white">{value.replace(/[K+%]/g, '')}</span>
                      <span style={{ color: '#1ECECA' }}>{value.match(/[K+%]+/)?.[0]}</span>
                    </div>
                    <div className="text-[0.72rem] tracking-widest uppercase mt-1" style={{ color: '#8899BB' }}>{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

       {/* ── RIGHT COLUMN — Dashboard mockup ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="dash-float hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden"
                style={{ background: '#0D1B35', border: '1px solid rgba(255,255,255,.09)',
                  boxShadow: '0 40px 80px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.04)' }}>

                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3"
                  style={{ background: '#162140', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                  <span className="ml-auto font-mono text-[0.62rem]" style={{ color: '#8899BB' }}>mediflow — dashboard</span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col gap-4">
                  {/* Stat chips */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: 'Appointments', v: '24', c: '#1ECECA' },
                      { l: 'New Patients', v: '7',  c: '#ffffff' },
                      { l: 'Revenue',      v: '$12.4K', c: '#C9A84C' },
                    ].map((s) => (
                      <div key={s.l} className="rounded-xl p-3"
                        style={{ background: '#162140', border: '1px solid rgba(255,255,255,.06)' }}>
                        <div className="text-[0.6rem] uppercase tracking-wider mb-1" style={{ color: '#8899BB' }}>{s.l}</div>
                        <div className="font-serif font-semibold text-[1.35rem]" style={{ color: s.c }}>{s.v}</div>
                        <div className="text-[0.6rem] mt-0.5" style={{ color: '#4ADE80' }}>↑ today</div>
                      </div>
                    ))}
                  </div>

                  {/* Appointment list */}
                  <div className="text-[0.68rem] uppercase tracking-widest font-semibold" style={{ color: '#8899BB' }}>
                    Upcoming Appointments
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { init: 'RJ', name: 'Rebecca Johnson', time: '09:00 AM · General',    badge: 'Confirmed', bc: 'rgba(74,222,128,.12)',  bt: '#4ADE80', bg: '#1a3060' },
                      { init: 'AL', name: 'Ahmad Leung',     time: '10:30 AM · Cardiology', badge: 'Pending',   bc: 'rgba(250,204,21,.12)', bt: '#FACC15', bg: '#1E3D2F' },
                      { init: 'SC', name: 'Sofia Castillo',  time: '11:45 AM · Telehealth', badge: 'Video',     bc: 'rgba(30,206,202,.12)', bt: '#1ECECA', bg: '#3D1E35' },
                    ].map((a) => (
                      <div key={a.name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                        style={{ background: '#162140', border: '1px solid rgba(255,255,255,.06)' }}>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[0.65rem] font-bold shrink-0"
                          style={{ background: a.bg, color: '#1ECECA' }}>{a.init}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[0.75rem] font-medium truncate" style={{ color: '#ffffff' }}>{a.name}</div>
                          <div className="text-[0.62rem] font-mono" style={{ color: '#8899BB' }}>{a.time}</div>
                        </div>
                        <span className="text-[0.58rem] px-2 py-0.5 rounded font-semibold shrink-0"
                          style={{ background: a.bc, color: a.bt }}>{a.badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Demo Modal ── */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(6,14,31,.85)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              className="rounded-2xl p-8 max-w-sm w-full text-center"
              style={{ background: '#0D1B35', border: '1px solid rgba(30,206,202,.2)' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1,   opacity: 1 }}
              exit={{ scale: 0.9,   opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[0.72rem] tracking-widest uppercase mb-3 font-semibold" style={{ color: '#1ECECA' }}>Book a Demo</div>
              <p className="font-serif text-[1.4rem] font-light mb-2 text-white">See MediFlow in action</p>
              <p className="text-[0.85rem] mb-6" style={{ color: '#8899BB' }}>
                Our team will walk you through a personalised live demo.
              </p>
              <motion.button
                whileHover={{ backgroundColor: '#3DD8D8' }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-full font-semibold text-[0.875rem]"
                style={{ background: '#1ECECA', color: '#060E1F' }}
                onClick={() => setDemoOpen(false)}
              >
                Request Demo →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}