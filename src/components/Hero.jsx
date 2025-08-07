// src/components/Hero.jsx

import React from 'react'

const Hero = () => (
  <section id="home" className="relative h-[70vh] text-white pt-24 overflow-hidden">
    {/* Vídeo de fundo */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo em HTML5.
    </video>

    {/* Texto central sobre o vídeo */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Waleska Santos - Imóveis</h1>
        <p className="text-xl">
          Excelência em atendimento e os melhores imóveis da região
        </p>
      </div>
    </div>

    {/* Imagem da Waleska posicionada sobre o vídeo */}
    <div className="absolute bottom-0 right-0 z-20 p-4 max-w-[180px] md:max-w-[250px]">
      <img
        src="/images/logo.png"
        alt="Waleska segurando chave"
        className="w-full object-contain drop-shadow-2xl"
      />
    </div>
  </section>
)

export default Hero
