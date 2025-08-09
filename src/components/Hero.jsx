// ============================================================================
// arquivo: src/components/Hero.jsx
// ----------------------------------------------------------------------------
import React from 'react';
import data from '../content/katia.js';

const Hero = () => (
  <section id="home" className="relative h-[70vh] text-white pt-24 overflow-hidden">
    {/* Vídeo de fundo */}
    <div className="absolute inset-0 z-0">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>

    {/* Camada escura + conteúdo */}
    <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        {/* ÚNICA imagem em frente ao vídeo - ajustada para não cortar a cabeça */}
        <img
          src="/images/katia-medica.png"
          alt="Dra. Kátia Xavier"
          className="mx-auto w-52 md:w-64 lg:w-72 mb-4 drop-shadow-xl rounded-lg mt-6 md:mt-12"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-3">{data.nomePublico}</h1>
        <p className="opacity-90 mb-1">{data.registro.crm}</p>
        <p className="opacity-90 mb-6">{data.especialidades.join(' • ')}</p>
        <a
          href={data.contato.whatsapp_link}
          className="inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-2xl shadow hover:shadow-lg transition"
          target="_blank"
          rel="noreferrer"
        >
          Agendar consulta por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
