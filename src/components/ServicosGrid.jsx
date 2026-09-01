import React from "react";
import { FaHome, FaHandshake, FaKey, FaChartLine } from "react-icons/fa";

const ServicosGrid = ({ t }) => {
  const defaultServices = [
    {
      icon: FaHome,
      titulo: t.servicos.itens[0].titulo,
      desc: t.servicos.itens[0].desc,
    },
    {
      icon: FaHandshake,
      titulo: t.servicos.itens[1].titulo,
      desc: t.servicos.itens[1].desc,
    },
    {
      icon: FaKey,
      titulo: t.servicos.itens[2].titulo,
      desc: t.servicos.itens[2].desc,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Soluções Imobiliárias
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900">
            {t.servicos.titulo}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.servicos.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {defaultServices.map((serv, index) => {
            const IconComp = serv.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-amber-400 transition-all duration-300">
                  <IconComp />
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-xl">
                  {serv.titulo}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {serv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicosGrid;
