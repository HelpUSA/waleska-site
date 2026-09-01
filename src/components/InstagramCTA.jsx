import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramCTA = ({ t }) => {
  return (
    <section className="py-14 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-3xl shadow-lg">
          <FaInstagram />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold">
            {t.instagram.titulo}
          </h2>
          <p className="text-white/90 text-sm max-w-xl mx-auto leading-relaxed">
            {t.instagram.desc}
          </p>
        </div>

        <div>
          <a
            href="https://www.instagram.com/imoveis.waleskasantos/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-extrabold px-8 py-3.5 rounded-2xl shadow-xl hover:bg-slate-100 transition text-sm"
          >
            <FaInstagram className="text-pink-600 text-lg" />
            {t.instagram.botao}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramCTA;
