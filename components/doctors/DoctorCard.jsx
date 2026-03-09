'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Clock, Star } from "lucide-react"

export default function DoctorCard({ doctor, index }) {

  return (
    <motion.div
      className="group rounded-2xl overflow-hidden bg-[#0D1B35] border border-white/10"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -6 }}
    >

      <div className="relative h-[200px] w-full">

        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={200}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

      </div>

      <div className="p-5 flex flex-col gap-3">

        <div>
          <h3 className="text-white text-lg font-semibold">
            {doctor.name}
          </h3>

          <p className="text-sm text-cyan-400">
            {doctor.specialty}
          </p>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">
          {doctor.bio}
        </p>

        <div className="flex justify-between text-sm text-slate-400 pt-2 border-t border-white/10">

          <span className="flex items-center gap-1">
            <Users size={14}/>
            {doctor.patients}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={14}/>
            {doctor.exp}
          </span>

          <span className="flex items-center gap-1 text-yellow-400">
            <Star size={14}/>
            {doctor.rating}
          </span>

        </div>

        <button
          className={`mt-2 py-2 rounded-lg text-sm font-semibold ${
            doctor.available
              ? "bg-cyan-400 text-black hover:bg-cyan-300"
              : "bg-white/10 text-gray-400 cursor-default"
          }`}
        >
          {doctor.available ? "Book Appointment" : "View Profile"}
        </button>

      </div>

    </motion.div>
  )
}