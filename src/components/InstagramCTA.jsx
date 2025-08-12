// 📄 src/components/InstagramCTA.jsx
import React from "react";
import { FaInstagram } from "react-icons/fa";
import data from "../content/waleska";

export default function InstagramCTA() {
  const url = data?.redes?.instagram;
  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <div className="rounded-2xl border shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 bg-white">
        <FaInstagram className="text-4xl" />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Siga no Instagram</h2>
          <p className="text-slate-600">Acompanhe os imóveis mais recentes, vídeos e oportunidades.</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-black text-white px-5 py-3 rounded-xl hover:opacity-90"
        >
          Abrir @imoveis.waleskasantos
        </a>
      </div>
    </section>
  );
}
