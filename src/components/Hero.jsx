// ============================================================================
// arquivo: src/components/Hero.jsx
// ----------------------------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import data from "../content/waleska.js";

const Hero = () => {
  // Link do WhatsApp: usa whatsapp_link; se não tiver, monta a partir do número
  const waLink =
    data?.contato?.whatsapp_link ||
    (data?.contato?.whatsapp
      ? `https://wa.me/${data.contato.whatsapp.replace(/\D/g, "")}`
      : "#");

  return (
    <section id="home" className="relative h-[65vh] md:h-[72vh] text-white pt-20 md:pt-24 overflow-hidden">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero.jpg"               // fallback enquanto o vídeo carrega
          className="w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Camada escura + gradiente + conteúdo */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-black/50 md:bg-black/60" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative text-center max-w-3xl">
          {/* Imagem em frente ao vídeo */}
          <img
            src="/images/waleska-chaves.png"
            alt="Waleska Santos"
            className="mx-auto w-44 md:w-60 lg:w-72 mb-4 drop-shadow-xl rounded-lg mt-6 md:mt-10 object-cover"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = "/images/waleska-logo.png"; // fallback
              e.currentTarget.classList.remove("rounded-lg");
              e.currentTarget.classList.add("h-20");
            }}
          />

          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {data?.nomePublico ?? "Waleska Santos - Imóveis"}
          </h1>

          {/* CRECI opcional */}
          {data?.registro?.creci && (
            <p className="opacity-90 mb-1">{data.registro.creci}</p>
          )}

          <p className="opacity-90 mb-6">
            {(data?.especialidades && data.especialidades.join(" • ")) ||
              "Compra • Venda • Locação"}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink}
              className="inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-2xl shadow hover:shadow-lg transition"
              target="_blank"
              rel="noreferrer"
            >
              Falar pelo WhatsApp
            </a>
            <Link
              to="/imoveis"
              className="inline-block bg-emerald-500/90 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:shadow-lg transition"
            >
              Ver imóveis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
