'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap, HeartPulse } from 'lucide-react'
import { useRef, useState } from 'react'

const TRUST_PILLS = [
  { icon: ShieldCheck, label: 'HIPAA Compliant'      },
  { icon: Zap,         label: 'Instant Booking'       },
  { icon: HeartPulse,  label: '98% Satisfaction Rate' },
]


function MagneticButton({ children, style, className, ...props }) {
  const ref  = useRef(null)
  const x    = useMotionValue(0)
  const y    = useMotionValue(0)
  const sx   = useSpring(x, { stiffness: 260, damping: 20 })
  const sy   = useSpring(y, { stiffness: 260, damping: 20 })

  function onMove(e) {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width  / 2)) * 0.35)
    y.set((e.clientY - (r.top  + r.height / 2)) * 0.35)
  }
  function onLeave() { x.set(0); y.set(0) }

  return (
    <motion.button
      ref={ref}
      style={{ ...style, x: sx, y: sy }}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default function CTASection() {
  const [email, setEmail]     = useState('')
  const [sent,  setSent]      = useState(false)
  const [focus, setFocus]     = useState(false)

  function handleSubmit() {
    if (!email.trim()) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="cta"
      className="relative z-10 overflow-hidden"
      style={{ background: '#060E1F', padding: '7rem 0' }}
    >

      {/*Background orbs*/}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width:        700,
          height:       700,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(30,206,202,0.07) 0%, transparent 70%)',
          top:  '50%',
          left: '50%',
          x:    '-50%',
          y:    '-50%',
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width:        340,
          height:       340,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(30,206,202,0.09) 0%, transparent 70%)',
          bottom: '10%',
          left:   '8%',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width:        260,
          height:       260,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(30,206,202,0.07) 0%, transparent 70%)',
          top:   '8%',
          right: '6%',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />


      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,206,202,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,206,202,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative max-w-[820px] mx-auto px-6 text-center">

        {/*Label*/}
        <motion.span
          className="inline-block text-[0.72rem] font-semibold tracking-[0.16em] uppercase mb-5"
          style={{ color: '#1ECECA' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Start Today — It's Free
        </motion.span>

        {/*  Headline */}
        <motion.h2
          className="font-serif font-light text-white leading-[1.08]"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
        >
          Healthcare that works
          <br />
          <strong className="font-semibold">
            as hard as{' '}
            <span style={{ color: '#1ECECA', fontStyle: 'italic' }}>you do.</span>
          </strong>
        </motion.h2>

        <motion.p
          className="text-[1.05rem] leading-[1.75] mt-6 mx-auto"
          style={{ color: '#8899BB', maxWidth: 520 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Join over 50,000 patients and 3,000 doctors who trust MediFlow for
          seamless, secure, and human-centred care.
        </motion.p>

        {/*  Email*/}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 mx-auto"
          style={{ maxWidth: 500 }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <div className="relative flex-1 w-full">
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: focus
                  ? '0 0 0 2px rgba(30,206,202,0.5)'
                  : '0 0 0 1px rgba(255,255,255,0.1)',
              }}
              transition={{ duration: 0.2 }}
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your email address"
              className="w-full px-5 py-3.5 rounded-xl text-[0.9rem] outline-none border-none"
              style={{
                background:  'rgba(255,255,255,0.05)',
                color:       '#ffffff',
                caretColor:  '#1ECECA',
              }}
            />
          </div>

          <MagneticButton
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[0.88rem] font-semibold border-none shrink-0 w-full sm:w-auto justify-center"
            style={{
              background:  '#1ECECA',
              color:       '#060E1F',
              cursor:      'pointer',
              boxShadow:   '0 0 28px rgba(30,206,202,0.25)',
            }}
          >
            {sent ? 'Check your inbox ✓' : <>Get Started Free <ArrowRight size={15} /></>}
          </MagneticButton>
        </motion.div>

        <motion.p
          className="text-[0.75rem] mt-3"
          style={{ color: '#8899BB' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          No credit card required · Cancel anytime
        </motion.p>

        {/*Trust pill */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {TRUST_PILLS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[0.78rem] font-medium"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border:     '1px solid rgba(255,255,255,0.09)',
                color:      '#8899BB',
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.07 }}
              whileHover={{
                borderColor: 'rgba(30,206,202,0.35)',
                color:       '#ffffff',
                y:           -2,
              }}
            >
              <Icon size={13} style={{ color: '#1ECECA' }} strokeWidth={2} />
              {label}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 mx-auto"
          style={{
            height:     1,
            background: 'linear-gradient(90deg, transparent 0%, rgba(30,206,202,0.25) 50%, transparent 100%)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

{/* bottom CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
       
          <MagneticButton
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[0.88rem] font-semibold border-none"
            style={{
              background: '#1ECECA',
              color:      '#060E1F',
              cursor:     'pointer',
              boxShadow:  '0 0 28px rgba(30,206,202,0.22)',
            }}
          >
            Book a Doctor Now <ArrowRight size={15} />
          </MagneticButton>

          
          <motion.button
            className="inline-flex items-center gap-2 text-[0.88rem] font-medium border-none bg-transparent cursor-pointer"
            style={{ color: '#8899BB' }}
            whileHover={{ color: '#ffffff', x: 3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            View pricing plans <ArrowRight size={14} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}