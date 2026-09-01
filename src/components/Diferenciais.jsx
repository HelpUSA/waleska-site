import React from "react";
import { FaCheckCircle, FaHeart, FaShieldAlt, FaAward, FaUserCheck, FaLightbulb } from "react-icons/fa";

const icons = [FaShieldAlt, FaCheckCircle, FaHeart, FaUserCheck, FaLightbulb, FaAward];

const Diferenciais = ({ t }) => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Waleska Santos Portrait Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300 shadow-2xl aspect-[4/5] bg-slate-100">
              <img
                src="/images/waleska-chaves.png"
                alt="Waleska Santos - Corretora de Imóveis"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/waleska-logo.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900">
                <p className="font-serif font-extrabold text-lg">Waleska Santos</p>
                <p className="text-amber-800 text-xs font-mono font-bold">CRECI 8492-F PB • @imoveis.waleskasantos</p>
                <p className="text-slate-500 text-xs mt-1">Especialista em Imóveis de Alto Padrão em João Pessoa</p>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Atendimento Humanizado
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900">
                {t.pilares.titulo}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.resumo}
              </p>
            </div>

            {/* Grid of 6 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.pilares.itens.map((pilar, index) => {
                const IconComp = icons[index % icons.length];
                return (
                  <div key={index} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 hover:shadow-md transition">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <IconComp className="text-amber-500 text-base" />
                      <span>{pilar.titulo}</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {pilar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
