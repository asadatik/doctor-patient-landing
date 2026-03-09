'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Star, ArrowRight, BadgeCheck } from 'lucide-react'
import { useState } from 'react'

const TABS = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics']

const DOCTORS = [
  {
    initials:  'SK',
    name:      'Dr. Sarah Kimura',
    specialty: 'Cardiology',
    bio:       'Interventional cardiologist with a focus on minimally invasive procedures and preventive heart health.',
    patients:  '1,240+',
    exp:       '14 yrs',
    rating:    '4.9',
    reviews:   128,
    bg:        'linear-gradient(135deg,#0D1B35 0%,#1a3060 100%)',
    col:       '#4A9EFF',
    available: true,
    badge:     'Top Rated',
  },
  {
    initials:  'MR',
    name:      'Dr. Marcus Reid',
    specialty: 'Neurology',
    bio:       'Specialising in complex neurological disorders and cutting-edge brain stimulation therapies.',
    patients:  '980+',
    exp:       '11 yrs',
    rating:    '4.8',
    reviews:   94,
    bg:        'linear-gradient(135deg,#0D1B35 0%,#1E3D2F 100%)',
    col:       '#4ADE80',
    available: true,
    badge:     null,
  },
  {
    initials:  'AP',
    name:      'Dr. Aisha Patel',
    specialty: 'Pediatrics',
    bio:       'Award-winning paediatrician dedicated to child wellness, vaccinations, and developmental health.',
    patients:  '2,100+',
    exp:       '9 yrs',
    rating:    '5.0',
    reviews:   212,
    bg:        'linear-gradient(135deg,#0D1B35 0%,#3D1E35 100%)',
    col:       '#F472B6',
    available: false,
    badge:     'Top Rated',
  },
  {
    initials:  'TL',
    name:      'Dr. Thomas Lê',
    specialty: 'Orthopedics',
    bio:       'Sports medicine orthopaedic surgeon with expertise in joint reconstruction and rapid recovery.',
    patients:  '1,560+',
    exp:       '17 yrs',
    rating:    '4.9',
    reviews:   176,
    bg:        'linear-gradient(135deg,#0D1B35 0%,#2D2011 100%)',
    col:       '#C9A84C',
    available: true,
    badge:     null,
  },
  {
    initials:  'EN',
    name:      'Dr. Elena Novak',
    specialty: 'Neurology',
    bio:       'Cognitive neurologist focused on memory disorders, Parkinson`s disease and neuro-rehabilitation.',
    patients:  '860+',
    exp:       '12 yrs',
    rating:    '4.7',
    reviews:   83,
    bg:        'linear-gradient(135deg,#0D1B35 0%,#1E2D3D 100%)',
    col:       '#A78BFA',
    available: true,
    badge:     null,
  },
  {
    initials:  'JO',
    name:      'Dr. James Obi',
    specialty: 'Cardiology',
    bio:       'Heart failure and transplant cardiologist with a patient-first approach to advanced cardiac care.',
    patients:  '1,100+',
    exp:       '15 yrs',
    rating:    '4.9',
    reviews:   141,
    bg:        'linear-gradient(135deg,#0D1B35 0%,#1a3060 100%)',
    col:       '#1ECECA',
    available: false,
    badge:     'Featured',
  },
]

const TRUST_STATS = [
  { value: '3K+',  label: 'Verified Doctors'  },
  { value: '50K+', label: 'Active Patients'   },
  { value: '4.9',  label: 'Average Rating'    },
  { value: '120+', label: 'Specialities'      },
]

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? DOCTORS
    : DOCTORS.filter(d => d.specialty === activeTab)

  return (
    <section
      id="doctors"
      className="relative z-10"
      style={{ background: '#060E1F', padding: '7rem 0' }}
    >
      <div className="max-w-[1400px] mx-auto px-6">

        {/* ── Header ── */}
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
            style={{ background: '#1ECECA', color: '#060E1F', boxShadow: '0 0 24px rgba(30,206,202,0.2)' }}
          >
            View All Doctors <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        {/* ── Trust stats bar ── */}
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

        {/* ── Filter tabs ── */}
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
              className="text-[0.8rem] font-medium px-4 py-2 rounded-full border-none cursor-pointer transition-all duration-200"
              style={
                activeTab === tab
                  ? { background: '#1ECECA', color: '#060E1F' }
                  : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#8899BB' }
              }
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Doctor cards grid ── */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          {filtered.map((doc, i) => (
            <DoctorCard key={doc.name} doctor={doc} index={i} />
          ))}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          className="mt-14 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
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
            whileHover={{ scale: 1.04, borderColor: 'rgba(30,206,202,0.5)', color: '#1ECECA' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold px-6 py-3 rounded-full cursor-pointer shrink-0"
            style={{
              background:  'transparent',
              border:      '1px solid rgba(255,255,255,0.15)',
              color:       '#ffffff',
            }}
          >
            Join as a Doctor <ArrowRight size={16} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

/* ── Doctor Card ── */
function DoctorCard({ doctor, index }) {
  const { initials, name, specialty, bio, patients, exp, rating, reviews, bg, col, available, badge } = doctor

  return (
    <motion.div
      className="group rounded-2xl overflow-hidden cursor-default flex flex-col"
      style={{ background: '#0D1B35', border: '1px solid rgba(255,255,255,0.07)' }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.13)', boxShadow: '0 24px 50px rgba(0,0,0,0.4)' }}
    >
      {/* ── Image area ── */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 200, background: bg }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `radial-gradient(circle at 50% 130%, ${col}28 0%, transparent 65%)` }}
        />

        {/* Badge */}
        {badge && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold"
            style={{ background: 'rgba(6,14,31,0.75)', border: `1px solid ${col}50`, color: col, backdropFilter: 'blur(8px)' }}
          >
            <BadgeCheck size={11} strokeWidth={2.5} />
            {badge}
          </div>
        )}

        {/* Availability dot */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold"
          style={{
            background:   'rgba(6,14,31,0.75)',
            border:       available ? '1px solid rgba(74,222,128,0.4)' : '1px solid rgba(255,255,255,0.1)',
            color:        available ? '#4ADE80' : '#8899BB',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: available ? '#4ADE80' : '#8899BB' }}
          />
          {available ? 'Available' : 'Booked'}
        </div>

        {/* Avatar */}
        <motion.div
          className="relative z-10 w-[90px] h-[90px] rounded-full flex items-center justify-center font-bold text-[2rem]"
          style={{
            background: `${col}18`,
            color:       col,
            border:      `2px solid ${col}40`,
          }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.2 }}
        >
          {initials}
        </motion.div>
      </div>

      {/* ── Body ── */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Name + specialty */}
        <div>
          <h3 className="font-serif text-[1.2rem] font-semibold text-white leading-snug">{name}</h3>
          <p
            className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] mt-0.5"
            style={{ color: col }}
          >
            {specialty}
          </p>
        </div>

        {/* Bio */}
        <p className="text-[0.82rem] leading-[1.65] flex-1" style={{ color: '#8899BB' }}>{bio}</p>

        {/* Meta row */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex gap-3">
            <span className="flex items-center gap-1 text-[0.75rem]" style={{ color: '#8899BB' }}>
              <Users size={12} strokeWidth={1.8} style={{ color: '#1ECECA' }} />
              {patients}
            </span>
            <span className="flex items-center gap-1 text-[0.75rem]" style={{ color: '#8899BB' }}>
              <Clock size={12} strokeWidth={1.8} style={{ color: '#1ECECA' }} />
              {exp}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star size={12} fill="#FACC15" style={{ color: '#FACC15' }} />
            <span className="text-[0.8rem] font-semibold text-white">{rating}</span>
            <span className="text-[0.72rem]" style={{ color: '#8899BB' }}>({reviews})</span>
          </div>
        </div>

        {/* Book button */}
        <motion.button
          whileHover={available ? { backgroundColor: '#3DD8D8', scale: 1.02 } : {}}
          whileTap={available ? { scale: 0.97 } : {}}
          transition={{ duration: 0.15 }}
          className="w-full py-2.5 rounded-xl text-[0.82rem] font-semibold border-none cursor-pointer mt-1"
          style={
            available
              ? { background: '#1ECECA', color: '#060E1F' }
              : { background: 'rgba(255,255,255,0.05)', color: '#8899BB', cursor: 'default', border: '1px solid rgba(255,255,255,0.08)' }
          }
          disabled={!available}
        >
          {available ? 'Book Appointment' : 'View Profile'}
        </motion.button>
      </div>
    </motion.div>
  )
}