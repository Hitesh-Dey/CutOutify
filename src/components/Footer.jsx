import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="hidden sm:block">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6
        bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-6 shadow-lg">

          {/* Logo */}
          <img src={assets.logo} alt="" className="w-32" />

          {/* Divider Line */}
          <div className="hidden sm:block h-8 w-[2px] bg-gradient-to-b from-[#1a1aff] via-[#8400ff] to-[#ff005e]"></div>

          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm text-gray-600 flex-1">
            © 2025 CutOutify.com — All rights reserved
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <img src={assets.facebook_icon} alt="facebook" className="w-8 cursor-pointer hover:scale-110 transition"/>
            <img src={assets.twitter_icon} alt="twitter" className="w-8 cursor-pointer hover:scale-110 transition"/>
            <img src={assets.google_plus_icon} alt="google" className="w-8 cursor-pointer hover:scale-110 transition"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
