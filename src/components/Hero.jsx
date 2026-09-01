import React from "react";
import { FaWhatsapp, FaBuilding } from "react-icons/fa";

const Hero = ({ t }) => {
  return (
    <section id="home" className="relative min-h-[75vh] md:min-h-[82vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white pt-24 md:pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Image / Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero.jpg"
          className="w-full h-full object-cover opacity-30 filter saturate-110"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        {/* CRECI & Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {t.hero.badge}
        </div>

        {/* Waleska Photo */}
        <div className="relative mx-auto w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-amber-400/90 shadow-2xl overflow-hidden group bg-slate-900">
          <img
            src="/images/waleska-chaves.png"
            alt="Waleska Santos - Corretora de Imóveis"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = "/images/waleska-logo.png";
            }}
          />
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {t.hero.titulo}
          </h1>

          <p className="text-slate-300 text-sm md:text-lg font-medium leading-relaxed">
            {t.hero.subtitulo}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-amber-300 pt-1">
          {t.hero.especialidades.map((esp, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
              ✦ {esp}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://wa.me/558399629962?text=Olá%20Waleska!%20Vim%20pelo%20site%20waleska.helpusbr.com."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all text-sm"
          >
            <FaWhatsapp className="text-lg" />
            {t.hero.ctaWhatsapp}
          </a>

          <a
            href="#imoveis"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-7 py-3.5 rounded-2xl shadow transition-all text-sm"
          >
            <FaBuilding className="text-amber-600" />
            {t.hero.ctaImoveis}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
