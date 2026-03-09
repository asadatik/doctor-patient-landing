import {
  Calendar,
  FileText,
  Video,
  MessageSquare,
  BarChart3,
  ShieldCheck
} from 'lucide-react'

export const FEATURES = [
  {
    Icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'AI-powered booking that eliminates double-bookings. Automated reminders cut no-shows by 40%.',
    tag: 'appointments',
    color: '#1ECECA',
  },
  {
    Icon: FileText,
    title: 'Digital Health Records',
    desc: 'Unified patient history — labs, imaging, prescriptions — accessible in seconds. HIPAA-compliant.',
    tag: 'ehr / emr',
    color: '#1ECECA',
  },
  {
    Icon: Video,
    title: 'Telehealth Suite',
    desc: 'High-quality video consultations with integrated clinical tools. Serve patients from anywhere.',
    tag: 'telemedicine',
    color: '#1ECECA',
  },
  {
    Icon: MessageSquare,
    title: 'Secure Messaging',
    desc: 'End-to-end encrypted conversations between doctors, patients, and care teams.',
    tag: 'communication',
    color: '#1ECECA',
  },
  {
    Icon: BarChart3,
    title: 'Analytics & Insights',
    desc: 'Real-time dashboards on patient outcomes, revenue cycles, and operational efficiency.',
    tag: 'reporting',
    color: '#1ECECA',
  },
  {
    Icon: ShieldCheck,
    title: 'Compliance & Security',
    desc: 'Built-in HIPAA, GDPR, and HL7 FHIR compliance. Audit trails protect your practice.',
    tag: 'security',
    color: '#1ECECA',
  },
]

export const HIGHLIGHT = {
  stat: '40%',
  statSub: 'fewer no-shows',
  body: 'Clinics using MediFlow`s smart scheduling report a dramatic drop in missed appointments — freeing up hours of admin time every single week.',
  points: [
    'Automated SMS & email reminders',
    'One-click patient rescheduling',
    'Real-time calendar sync'
  ],
}