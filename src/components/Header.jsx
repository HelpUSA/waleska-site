import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaGlobe } from "react-icons/fa";

const Header = ({ lang, setLang, t }) => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const flags = {
    pt: "🇧🇷 PT",
    en: "🇺🇸 EN",
    es: "🇪🇸 ES",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo e Nome do Corretor */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-amber-500 overflow-hidden shadow group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/images/waleska-chaves.png"
              alt="Waleska Santos"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/waleska-logo.png";
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-extrabold text-slate-900 text-lg tracking-tight">Waleska Santos</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300 font-mono">
                CRECI 9962-F
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
              Imóveis de Alto Padrão • João Pessoa
            </p>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="#home" className="hover:text-emerald-600 transition-colors">
            {t.nav.inicio}
          </a>
          <a href="#sobre" className="hover:text-emerald-600 transition-colors">
            {t.nav.sobre}
          </a>
          <a href="#servicos" className="hover:text-emerald-600 transition-colors">
            {t.nav.servicos}
          </a>
          <a href="#imoveis" className="hover:text-emerald-600 transition-colors">
            {t.nav.imoveis}
          </a>
          <a href="#contato" className="hover:text-emerald-600 transition-colors">
            {t.nav.contato}
          </a>
          <a
            href="https://www.instagram.com/imoveis.waleskasantos/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-pink-600 hover:text-pink-700 transition"
          >
            <FaInstagram className="text-lg" />
            <span className="hidden lg:inline">@imoveis.waleskasantos</span>
          </a>

          {/* Selector de 3 Idiomas */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 transition text-xs font-bold"
            >
              <FaGlobe className="text-slate-600" />
              <span>{flags[lang]}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border border-slate-200 rounded-xl shadow-lg p-1 z-50">
                <button
                  onClick={() => { setLang("pt"); setLangOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-slate-100 ${lang === 'pt' ? 'bg-amber-50 text-amber-900 font-bold' : ''}`}
                >
                  🇧🇷 Português
                </button>
                <button
                  onClick={() => { setLang("en"); setLangOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-slate-100 ${lang === 'en' ? 'bg-amber-50 text-amber-900 font-bold' : ''}`}
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => { setLang("es"); setLangOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-slate-100 ${lang === 'es' ? 'bg-amber-50 text-amber-900 font-bold' : ''}`}
                >
                  🇪🇸 Español
                </button>
              </div>
            )}
          </div>

          {/* Botão WhatsApp Direct */}
          <a
            href="https://wa.me/5583987708002?text=Olá%20Waleska!%20Acessei%20seu%20site%20waleska.helpusbr.com."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl shadow-sm hover:shadow transition text-xs"
          >
            <FaWhatsapp className="text-base" />
            <span>(83) 98770-8002</span>
          </a>
        </nav>

        {/* Botão Hamburger (Mobile) */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : lang === 'en' ? 'es' : 'pt')}
            className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-bold border"
          >
            {flags[lang]}
          </button>
          <button
            className="p-2 text-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            <span className="block w-6 h-[2px] bg-slate-900 mb-1"></span>
            <span className="block w-6 h-[2px] bg-slate-900 mb-1"></span>
            <span className="block w-6 h-[2px] bg-slate-900"></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3 font-semibold text-slate-800">
          <a href="#home" onClick={() => setOpen(false)} className="block py-1">
            {t.nav.inicio}
          </a>
          <a href="#sobre" onClick={() => setOpen(false)} className="block py-1">
            {t.nav.sobre}
          </a>
          <a href="#servicos" onClick={() => setOpen(false)} className="block py-1">
            {t.nav.servicos}
          </a>
          <a href="#imoveis" onClick={() => setOpen(false)} className="block py-1">
            {t.nav.imoveis}
          </a>
          <a href="#contato" onClick={() => setOpen(false)} className="block py-1">
            {t.nav.contato}
          </a>
          <a
            href="https://www.instagram.com/imoveis.waleskasantos/"
            target="_blank"
            rel="noreferrer"
            className="py-2 flex items-center gap-2 text-pink-600"
            onClick={() => setOpen(false)}
          >
            <FaInstagram /> @imoveis.waleskasantos
          </a>
          <a
            href="https://wa.me/5583987708002?text=Olá%20Waleska!"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> {t.nav.falarWhatsapp}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
