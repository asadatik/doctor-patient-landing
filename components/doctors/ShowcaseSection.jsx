'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import DoctorCard from './DoctorCard'
import { DOCTORS, TABS } from '../../data/doctorsData'

const TRUST_STATS = [
  { value: '3K+',  label: 'Verified Doctors'  },
  { value: '50K+', label: 'Active Patients'   },
  { value: '4.9',  label: 'Average Rating'    },
  { value: '120+', label: 'Specialities'      },
]

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All'
      ? DOCTORS
      : DOCTORS.filter(d => d.specialty === activeTab)

  return (
    <section
      id="doctors"
      className="relative z-10"
      style={{ background: '#060E1F', padding: '7rem 0' }}
    >
      <div className="max-w-[1300px] mx-auto px-6">

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
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
              Our Specialists
            </span>
            <h2
              className="font-serif font-light leading-[1.1] text-white"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)' }}
            >
              Meet the experts
              <br />
              <strong className="font-semibold">powering better care.</strong>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: '#3DD8D8' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 text-[0.85rem] font-semibold px-6 py-3 rounded-full border-none cursor-pointer shrink-0 self-start md:self-auto"
            style={{
              background:  '#1ECECA',
              color:       '#060E1F',
              boxShadow:   '0 0 24px rgba(30,206,202,0.2)',
            }}
          >
            View All Doctors <ArrowRight size={15} />
          </motion.button>
        </motion.div>


        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-14 rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {TRUST_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-5 px-4 gap-1"
              style={{ background: '#0D1B35' }}
            >
              <span
                className="font-serif font-semibold leading-none"
                style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#1ECECA' }}
              >
                {value}
              </span>
              <span
                className="text-[0.72rem] uppercase tracking-[0.1em]"
                style={{ color: '#8899BB' }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

  
        <motion.div
          className="flex gap-2 flex-wrap mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          {TABS.map(tab => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.12 }}
              className="text-[0.8rem] font-medium px-4 py-2 rounded-full border-none cursor-pointer"
              style={
                activeTab === tab
                  ? { background: '#1ECECA', color: '#060E1F' }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      border:     '1px solid rgba(255,255,255,0.1)',
                      color:      '#8899BB',
                    }
              }
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

 {/*Doctor cards grid*/}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {filtered.map((doctor, i) => (
              <DoctorCard key={doctor.name} doctor={doctor} index={i} />
            ))}
          </motion.div>
 </AnimatePresence>

      
        <motion.div
          className="mt-14 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border:     '1px solid rgba(255,255,255,0.07)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="font-serif text-[1.25rem] font-light text-white">
              Are you a healthcare professional?
            </p>
            <p className="text-[0.82rem] mt-0.5" style={{ color: '#8899BB' }}>
              Join our growing network and reach thousands of patients.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale:       1.04,
              borderColor: 'rgba(30,206,202,0.5)',
              color:       '#1ECECA',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold px-6 py-3 rounded-full cursor-pointer shrink-0"
            style={{
              background: 'transparent',
              border:     '1px solid rgba(255,255,255,0.15)',
              color:      '#ffffff',
            }}
          >
            Join as a Doctor <ArrowRight size={16} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}