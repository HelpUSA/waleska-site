// src/components/Header.jsx

import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#472524] bg-opacity-90 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Logo da Waleska Imóveis"
            className="h-16 w-auto object-contain"
          />
          <span className="text-xl font-semibold">Waleska Imóveis</span>
        </div>

        {/* Botão do menu para mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-teal-300">Início</a>
          <a href="#sobre" className="hover:text-teal-300">Sobre</a>
          <a href="#empreendimentos" className="hover:text-teal-300">Empreendimentos</a>
          <a href="#contato" className="hover:text-teal-300">Contato</a>
        </nav>
      </div>

      {/* Menu mobile (dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-[#472524] bg-opacity-95 text-white px-4 pb-4 space-y-2">
          <a href="#home" className="block hover:text-teal-300">Início</a>
          <a href="#sobre" className="block hover:text-teal-300">Sobre</a>
          <a href="#empreendimentos" className="block hover:text-teal-300">Empreendimentos</a>
          <a href="#contato" className="block hover:text-teal-300">Contato</a>
        </div>
      )}
    </header>
  )
}

export default Header
