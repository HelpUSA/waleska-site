// src/components/WhatsappIcon.jsx

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/558388948383"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce transition"
      title="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsappIcon
