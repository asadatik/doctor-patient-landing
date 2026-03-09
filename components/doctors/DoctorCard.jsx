'use client'

import Image from 'next/image'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Users, Clock, Star, BadgeCheck, CalendarCheck, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

function getInitials(name) {
  return name
    .replace(/^Dr\.\s*/i, '')
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function DoctorCard({ doctor, index = 0 }) {
  const {
    name, specialty, image, bio,
    patients, exp, rating, reviews,
    available, badge,
  } = doctor

  const [imgError, setImgError]   = useState(false)
  const [hovered, setHovered]     = useState(false)
  const cardRef                   = useRef(null)
  const initials                  = getInitials(name)


  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 22 })
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 22 })


  const glareX = useTransform(sRotY, [-12, 12], ['0%',  '100%'])
  const glareY = useTransform(sRotX, [ 12, -12], ['0%', '100%'])

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    const cx   = rect.left + rect.width  / 2
    const cy   = rect.top  + rect.height / 2
    rotY.set(((e.clientX - cx) / (rect.width  / 2)) *  10)
    rotX.set(((e.clientY - cy) / (rect.height / 2)) * -10)
  }

  function handleMouseLeave() {
    rotX.set(0)
    rotY.set(0)
    setHovered(false)
  }

  return (
    <motion.article
      ref={cardRef}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-default"
      style={{
        background:   '#0D1B35',
        border:       '1px solid rgba(255,255,255,0.07)',
        rotateX:      sRotX,
        rotateY:      sRotY,
        transformStyle: 'preserve-3d',
        perspective:  800,
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ scale: 1.025, zIndex: 10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >


      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        animate={{
          boxShadow: hovered
            ? '0 0 0 1.5px rgba(30,206,202,0.45), 0 28px 55px rgba(0,0,0,0.55), 0 0 40px rgba(30,206,202,0.08) inset'
            : '0 0 0 1px rgba(255,255,255,0.07), 0 8px 20px rgba(0,0,0,0.2)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      />

      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-30"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.06) 0%, transparent 60%)`
          ),
          opacity: hovered ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.25 } }}
      />


      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{
          height:     200,
          background: 'linear-gradient(135deg, #0D1B35 0%, #162140 100%)',
        }}
      >

        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 120%, rgba(30,206,202,0.16) 0%, transparent 65%)',
          }}
        />

    
        {image && !imgError ? (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={image}
              alt={`Photo of ${name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top"
              onError={() => setImgError(true)}
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              className="w-[88px] h-[88px] rounded-full flex items-center justify-center font-bold"
              style={{
                fontSize:   '2rem',
                background: 'rgba(30,206,202,0.1)',
                border:     '2px solid rgba(30,206,202,0.3)',
                color:      '#1ECECA',
              }}
              animate={{ scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {initials}
            </motion.div>
          </div>
        )}

        {/* gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(13,27,53,0.92) 0%, rgba(13,27,53,0.1) 45%, transparent 100%)',
          }}
        />

    
        {badge && (
          <motion.div
            className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold"
            style={{
              background:     'rgba(6,14,31,0.82)',
              border:         '1px solid rgba(30,206,202,0.35)',
              color:          '#1ECECA',
              backdropFilter: 'blur(10px)',
            }}
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <BadgeCheck size={11} strokeWidth={2.5} />
            {badge}
          </motion.div>
        )}

        {/*  */}
        <motion.div
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold"
          style={{
            background:     'rgba(6,14,31,0.82)',
            border:         available
              ? '1px solid rgba(74,222,128,0.4)'
              : '1px solid rgba(255,255,255,0.1)',
            color:          available ? '#4ADE80' : '#8899BB',
            backdropFilter: 'blur(10px)',
          }}
          animate={{ y: hovered ? -2 : 0 }}
          transition={{ duration: 0.25, delay: 0.03 }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: available ? '#4ADE80' : '#8899BB' }}
            animate={{ scale: available && hovered ? [1, 1.5, 1] : 1 }}
            transition={{ duration: 0.6, repeat: hovered ? Infinity : 0, repeatDelay: 1.2 }}
          />
          {available ? 'Available' : 'Booked'}
        </motion.div>
      </div>

      {/*CARD BODY */}
      <div className="relative z-10 flex flex-col gap-3 p-5 flex-1">

      
        <div>
          <motion.h3
            className="font-serif text-[1.2rem] font-semibold leading-snug"
            style={{ color: '#ffffff' }}
            animate={{ x: hovered ? 2 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-[0.75rem] font-semibold uppercase tracking-[0.07em] mt-0.5"
            style={{ color: '#1ECECA' }}
            animate={{ x: hovered ? 2 : 0 }}
            transition={{ duration: 0.25, delay: 0.02 }}
          >
            {specialty}
          </motion.p>
        </div>

        
        <p
          className="text-[0.82rem] leading-[1.65] flex-1"
          style={{ color: '#8899BB' }}
        >
          {bio}
        </p>

        
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
          <div className="flex items-center gap-1">
            <Star size={12} fill="#FACC15" style={{ color: '#FACC15' }} />
            <span className="text-[0.8rem] font-semibold" style={{ color: '#ffffff' }}>{rating}</span>
            <span className="text-[0.72rem]" style={{ color: '#8899BB' }}>({reviews})</span>
          </div>
        </div>

     
        <motion.button
          disabled={!available}
          className="relative w-full py-2.5 rounded-xl text-[0.82rem] font-semibold border-none mt-1 overflow-hidden flex items-center justify-center gap-2"
          style={
            available
              ? { background: '#1ECECA', color: '#060E1F', cursor: 'pointer' }
              : {
                  background: 'rgba(255,255,255,0.05)',
                  color:      '#8899BB',
                  cursor:     'not-allowed',
                  border:     '1px solid rgba(255,255,255,0.08)',
                }
          }
          whileHover={available ? { scale: 1.03 } : {}}
          whileTap={available   ? { scale: 0.97 } : {}}
          transition={{ duration: 0.18 }}
          animate={available ? { backgroundColor: hovered ? '#3DD8D8' : '#1ECECA' } : {}}
        >
          {available ? (
            <>
              <CalendarCheck size={14} strokeWidth={2.2} />
              Book Appointment
              <motion.span
                animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={14} strokeWidth={2.5} />
              </motion.span>
            </>
          ) : (
            'View Profile'
          )}
        </motion.button>

      </div>
    </motion.article>
  )
}