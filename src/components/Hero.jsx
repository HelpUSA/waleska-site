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

    {/* Sobreposição escura */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

    {/* Conteúdo com imagem e texto */}
    <div className="relative z-20 flex flex-col md:flex-row items-center justify-center h-full px-6">
      {/* Imagem de Waleska */}
      <img
        src="/images/waleska-chaves.png"
        alt="Waleska segurando uma chave"
        className="max-h-[400px] md:max-h-[500px] w-auto object-contain drop-shadow-xl"
      />

      {/* Texto ao lado */}
      <div className="md:ml-10 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Waleska Santos - Imóveis</h1>
        <p className="text-lg md:text-xl">
          Excelência em atendimento e os melhores imóveis da região
        </p>
      </div>
    </div>
  </section>
)

export default Hero
