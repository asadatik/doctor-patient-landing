import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'MediFlow | Streamline Healthcare Connections',
  description: 'A modern healthcare platform connecting doctors and patients with secure appointments, medical records, and real-time communication.',
  keywords: 'healthcare, doctor, patient, appointments, medical records, telehealth',
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
