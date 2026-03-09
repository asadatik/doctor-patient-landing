'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight, Mail, Phone, MapPin,
  Twitter, Linkedin, Facebook, Youtube,
  Heart
} from 'lucide-react'
import { useState } from 'react'

const LINKS = {
  Product:  ['Features', 'How It Works', 'Pricing', 'Changelog', 'API Docs'],
  Company:  ['About Us', 'Careers', 'Press Kit', 'Blog', 'Contact'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'HIPAA Policy', 'Security'],
}

const SOCIALS = [
  { Icon: Twitter,  href: '#', label: 'Twitter'  },
  { Icon: Linkedin, href: '#', label: 'LinkedIn'  },
  { Icon: Facebook, href: '#', label: 'Facebook'  },
  { Icon: Youtube,  href: '#', label: 'YouTube'   },
]

const CONTACT = [
  { Icon: Mail,    text: 'hello@mediflow.com'     },
  { Icon: Phone,   text: '+1 (800) 123-4567'      },
  { Icon: MapPin,  text: 'San Francisco, CA'      },
]

export default function Footer() {
  const [email, setEmail]   = useState('')
  const [sent, setSent]     = useState(false)

  const handleSubmit = () => {
    if (email.trim()) { setSent(true); setEmail('') }
  }

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#060E1F', borderTop: '1px solid rgba(255,255,255,0.07)' }}>

      {/*Newsletter */}
      <div style={{ background: 'rgba(30,206,202,0.05)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[1.5rem] font-light text-white leading-snug">
              Stay ahead in <em className="italic" style={{ color: '#1ECECA' }}>modern healthcare.</em>
            </p>
            <p className="text-[0.85rem] mt-1" style={{ color: '#8899BB' }}>
              Join 10,000+ healthcare professionals. No spam, ever.
            </p>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[0.875rem] font-medium px-6 py-3 rounded-full"
              style={{ background: 'rgba(30,206,202,0.1)', border: '1px solid rgba(30,206,202,0.25)', color: '#1ECECA' }}
            >
              ✓ You're subscribed!
            </motion.div>
          ) : (
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                className="flex-1 md:w-64 text-[0.875rem] px-5 py-3 rounded-full outline-none"
                style={{
                  background:  'rgba(255,255,255,0.06)',
                  border:      '1px solid rgba(255,255,255,0.12)',
                  color:       '#ffffff',
                }}
                onFocus={e  => (e.target.style.borderColor = 'rgba(30,206,202,0.5)')}
                onBlur={e   => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#3DD8D8' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 text-[0.85rem] font-semibold px-5 py-3 rounded-full border-none cursor-pointer shrink-0"
                style={{ background: '#1ECECA', color: '#060E1F', boxShadow: '0 0 20px rgba(30,206,202,0.2)' }}
              >
                Subscribe <ArrowRight size={15} />
              </motion.button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12">

          <div className="flex flex-col gap-6">
    
            <button
              onClick={() => scrollTo('hero')}
              className="font-serif text-[1.55rem] font-semibold text-white text-left bg-transparent border-none cursor-pointer w-fit"
            >
              Medi<span style={{ color: '#1ECECA' }}>Flow</span>
            </button>

            <p className="text-[0.875rem] leading-[1.8]" style={{ color: '#8899BB', maxWidth: 260 }}>
              The all-in-one platform connecting doctors and patients — built for
              modern healthcare teams worldwide.
            </p>

         
            <ul className="flex flex-col gap-3">
              {CONTACT.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[0.82rem]" style={{ color: '#8899BB' }}>
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
                    style={{ background: 'rgba(30,206,202,0.08)', border: '1px solid rgba(30,206,202,0.15)', color: '#1ECECA' }}>
                    <Icon size={13} strokeWidth={1.8} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, borderColor: 'rgba(30,206,202,0.4)', color: '#1ECECA', background: 'rgba(30,206,202,0.1)' }}
                  transition={{ duration: 0.18 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center no-underline"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#8899BB' }}
                >
                  <Icon size={15} strokeWidth={1.8} />
                </motion.a>
              ))}
            </div>
          </div>


          {Object.entries(LINKS).map(([heading, links], colIdx) => (
            <div key={heading}>
              <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] mb-5"
                style={{ color: '#1ECECA' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link, i) => (
                  <motion.li key={link}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIdx * 0.05 + i * 0.04, duration: 0.3 }}>
                    <a
                      href="#"
                      className="text-[0.875rem] no-underline transition-colors duration-200 flex items-center gap-1.5 group"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#1ECECA]">›</span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

   
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.78rem] flex items-center gap-1.5" style={{ color: '#8899BB' }}>
            © 2025 MediFlow Inc. Made with
           
            for better healthcare.
          </p>

          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies', 'HIPAA'].map(l => (
              <a key={l} href="#"
                className="text-[0.78rem] no-underline transition-colors duration-200"
                style={{ color: '#8899BB' }}
                onMouseEnter={e => (e.target.style.color = '#1ECECA')}
                onMouseLeave={e => (e.target.style.color = '#8899BB')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}