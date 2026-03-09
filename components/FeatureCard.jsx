'use client'

import { motion } from 'framer-motion'

export default function FeatureCard({ feature, index }) {
  const { Icon, title, desc, tag } = feature

  return (
    <motion.div
      className="group rounded-2xl p-6 flex flex-col gap-4 cursor-default relative overflow-hidden"
      style={{
        background: '#0D1B35',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ borderColor: 'rgba(30,206,202,0.25)', backgroundColor: '#0f2040' }}
    >

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(30,206,202,0.06), transparent 70%)' }}
      />

      <motion.div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: 'rgba(30,206,202,0.08)',
          border: '1px solid rgba(30,206,202,0.15)',
          color: '#1ECECA',
        }}
        whileHover={{ background: 'rgba(30,206,202,0.18)', scale: 1.08 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={20} strokeWidth={1.6} />
      </motion.div>

      <div className="flex flex-col gap-1.5 flex-1 relative z-10">
        <h3 className="font-serif text-[1.2rem] font-semibold text-white">{title}</h3>
        <p className="text-[0.83rem] leading-[1.7]" style={{ color: '#8899BB' }}>{desc}</p>
      </div>

      <span
        className="w-fit text-[0.65rem] font-mono font-medium px-2.5 py-1 rounded-md tracking-[0.04em] relative z-10"
        style={{
          background: 'rgba(30,206,202,0.08)',
          border: '1px solid rgba(30,206,202,0.15)',
          color: '#1ECECA',
        }}
      >
        {tag}
      </span>
    </motion.div>
  )
}