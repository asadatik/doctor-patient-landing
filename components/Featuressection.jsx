'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FeatureCard from './FeatureCard'
import { FEATURES, HIGHLIGHT } from '../data/Feature'

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative z-10"
      style={{ background: '#060E1F', padding: '7rem 0' }}
    >
      <div className="max-w-350 mx-auto px-6">

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div>
            <span
              className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: '#1ECECA' }}
            >
              Platform Features
            </span>

            <h2
              className="font-serif font-light leading-[1.1] text-white"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)' }}
            >
              Everything your practice
              <br />
              <strong className="font-semibold">needs to thrive.</strong>
            </h2>
          </div>

          <p
            className="text-[0.95rem] leading-[1.8] md:max-w-[340px] md:text-right"
            style={{ color: '#8899BB' }}
          >
            Purpose-built tools that eliminate inefficiency and put patient care
            at the centre of every workflow.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

          <motion.div
            className="lg:col-span-1 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(30,206,202,0.12) 0%, rgba(30,206,202,0.04) 100%)',
              border: '1px solid rgba(30,206,202,0.2)',
              minHeight: 320,
            }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >

            <div
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'rgba(30,206,202,0.12)', filter: 'blur(40px)' }}
            />

            <div className="relative z-10">
              <div
                className="font-serif font-semibold leading-none mb-1"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)', color: '#1ECECA' }}
              >
                {HIGHLIGHT.stat}
              </div>

              <div
                className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] mb-5"
                style={{ color: '#8899BB' }}
              >
                {HIGHLIGHT.statSub}
              </div>

              <p className="text-[0.9rem] leading-[1.75] text-white mb-6">
                {HIGHLIGHT.body}
              </p>

              <ul className="flex flex-col gap-2">
                {HIGHLIGHT.points.map(p => (
                  <li key={p} className="flex items-center gap-2.5 text-[0.82rem]" style={{ color: '#8899BB' }}>
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(30,206,202,0.15)', color: '#1ECECA' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>


          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.slice(0, 2).map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.slice(2).map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i + 2} />
          ))}
        </div>


        <motion.div
          className="mt-12 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div>
            <p className="font-serif text-[1.25rem] font-light text-white">
              Ready to modernise your practice?
            </p>
            <p className="text-[0.82rem] mt-0.5" style={{ color: '#8899BB' }}>
              Join 3,000+ healthcare providers already using MediFlow.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: '#3DD8D8' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold px-6 py-3 rounded-full border-none cursor-pointer shrink-0"
            style={{
              background: '#1ECECA',
              color: '#060E1F',
              boxShadow: '0 0 24px rgba(30,206,202,0.25)',
            }}
          >
            Explore All Features <ArrowRight size={16} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}