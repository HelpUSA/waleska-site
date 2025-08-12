// ============================================================================
// arquivo: src/components/Header.jsx (menu com 3 tracinhos mobile)
// ----------------------------------------------------------------------------
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import data from "../content/waleska.js";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo e nome */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/waleska-logo.png"
            alt="Logo Waleska Imóveis"
            className="h-8"
          />
          <span className="font-semibold">Waleska Santos - Imóveis</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Início
          </Link>
          <Link to="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link to="/servicos" className="hover:underline">
            Serviços
          </Link>
          <Link to="/contato" className="hover:underline">
            Contato
          </Link>
          <a
            href={data?.contato?.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-pink-600 transition"
          >
            <FaInstagram className="text-xl" />
            <span className="hidden lg:inline">Instagram</span>
          </a>
          {/* Link invisível apenas para manter o caminho do vídeo no build */}
          <a href="/videos/background.mp4" className="hidden">
            placeholder
          </a>
        </nav>

        {/* Botão hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-[2px] bg-slate-900 mb-1"></span>
          <span className="block w-6 h-[2px] bg-slate-900 mb-1"></span>
          <span className="block w-6 h-[2px] bg-slate-900"></span>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Início
            </Link>
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Sobre
            </Link>
            <Link
              to="/servicos"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Serviços
            </Link>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Contato
            </Link>
            <a
              href={data?.contato?.instagram}
              target="_blank"
              rel="noreferrer"
              className="py-2 flex items-center gap-2 hover:text-pink-600 transition"
              onClick={() => setOpen(false)}
            >
              <FaInstagram />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
