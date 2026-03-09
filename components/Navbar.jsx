'use client'


import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import useNav from '../hooks/useNav'


const NAV_LINKS = [
  { label: 'Features',     id: 'features'      },

  { label: 'Doctors',      id: 'doctors'       },
 
  
]

export default function Navbar() {
  const { scrolled, open, setOpen, scrollTo } = useNav()

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 left-0 right-0 z-100"
      style={{
        background:     scrolled ? 'rgba(6,14,31,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)'         : 'none',
        borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition:     'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-[70px] flex items-center justify-between">


        <button
          onClick={() => scrollTo('hero')}
          className="font-serif text-[1.55rem] font-semibold tracking-[0.01em] text-white cursor-pointer bg-transparent border-none"
        >
          Medi<span style={{ color: '#1ECECA' }}>Flow</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <NavLink key={id} label={label} onClick={() => scrollTo(id)} />
          ))}
        </nav>

      
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ color: '#1ECECA' }}
            transition={{ duration: 0.15 }}
            onClick={() => scrollTo('cta')}
            className="text-[0.85rem] font-medium bg-transparent border-none cursor-pointer"
            style={{ color: '#8899BB' }}
          >
            Sign In
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: '#3DD8D8' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            onClick={() => scrollTo('cta')}
            className="inline-flex items-center gap-2 text-[0.82rem] font-semibold px-5 py-[0.55rem] rounded-full border-none cursor-pointer"
            style={{
              background: '#1ECECA',
              color:      '#060E1F',
              boxShadow:  '0 0 20px rgba(30,206,202,0.2)',
            }}
          >
            Get Started <ArrowRight size={14} />
          </motion.button>
        </div>


        <motion.button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-transparent border-none cursor-pointer"
          style={{ color: '#ffffff' }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/*  Mobile*/}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -8  }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden flex flex-col px-6 pb-6 pt-2 gap-1"
            style={{
              background:    'rgba(6,14,31,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom:  '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {NAV_LINKS.map(({ label, id }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0   }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                onClick={() => scrollTo(id)}
                className="text-left text-[0.92rem] font-medium py-3 bg-transparent border-none cursor-pointer w-full rounded-lg px-3"
                style={{ color: '#8899BB' }}
                whileHover={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                {label}
              </motion.button>
            ))}

    
            <div className="my-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />

         
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="text-[0.9rem] font-medium py-3 bg-transparent border-none cursor-pointer text-left px-3 rounded-lg"
              style={{ color: '#8899BB' }}
              onClick={() => scrollTo('cta')}
            >
              Sign In
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              whileHover={{ backgroundColor: '#3DD8D8' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('cta')}
              className="mt-1 w-full inline-flex items-center justify-center gap-2 text-[0.9rem] font-semibold py-3 rounded-full border-none cursor-pointer"
              style={{ background: '#1ECECA', color: '#060E1F' }}
            >
              Get Started <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

//
function NavLink({ label, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="text-[0.875rem] font-medium bg-transparent border-none cursor-pointer relative"
      style={{ color: '#8899BB' }}
      whileHover={{ color: '#ffffff' }}
      transition={{ duration: 0.15 }}
    >
      {label}

    
      <motion.span
        className="absolute -bottom-0.5 left-0 h-[1.5px] w-full rounded-full"
        style={{ background: '#1ECECA', scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.22 }}
      />
    </motion.button>
  )
}