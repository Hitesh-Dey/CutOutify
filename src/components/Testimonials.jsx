import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="py-14 px-3 sm:px-4">
      {/* title */}
      <h1 className="text-center font-extrabold text-4xl sm:text-5xl tracking-tight p-6
        bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]
        bg-clip-text text-transparent">
        Customer Testimonials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto mt-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 sm:p-8 overflow-hidden bg-white/50
            backdrop-blur-md transition-all duration-700 hover:-translate-y-2
            hover:shadow-xl"
          >
            {/* animated gradient border */}
            <div className="absolute inset-0 border-[3px] rounded-2xl border-gradient-to-r
            from-[#1a1aff] via-[#8400ff] to-[#ff005e]"></div>

            {/* faint quote icon in bg */}
            <p className="absolute text-[120px] sm:text-[150px] opacity-5 -top-6 -right-1 select-none">“</p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed relative z-10">{item.text}</p>

            <div className="flex items-center gap-3 mt-5 relative z-10">
              <img className="rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg" src={item.image} alt="" />
              <div>
                <p className="font-semibold text-sm sm:text-base">{item.author}</p>
                <p className="text-xs sm:text-sm text-gray-600">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
