// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#472524] bg-opacity-90 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Logo da Waleska Imóveis"
            className="max-h-20 w-auto object-contain"
          />
          <span className="text-xl font-semibold">Waleska Imóveis</span>
        </div>

        {/* Menu de navegação */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-teal-300 transition-colors duration-200">Início</a>
          <a href="#sobre" className="hover:text-teal-300 transition-colors duration-200">Sobre</a>
          <a href="#empreendimentos" className="hover:text-teal-300 transition-colors duration-200">Empreendimentos</a>
          <a href="#contato" className="hover:text-teal-300 transition-colors duration-200">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
