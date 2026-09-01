import React, { useState } from "react";
import { FaWhatsapp, FaBed, FaBath, FaCar, FaRulerCombined, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

const Anuncios = ({ t, properties = [] }) => {
  const [filter, setFilter] = useState("TODOS");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter((p) => {
    if (filter === "FLAT") return p.categoria?.includes("Flat") || p.categoria?.includes("Studio");
    if (filter === "BEACHFRONT") return p.categoria?.includes("Pé na Areia") || p.destaque?.includes("Mar");
    return true;
  });

  return (
    <section id="imoveis" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Vitrine Exclusiva
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900">
            {t.imoveis.titulo}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.imoveis.subtitulo}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter("TODOS")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              filter === "TODOS"
                ? "bg-slate-900 text-white shadow"
                : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            {t.imoveis.filtroTodos} ({properties.length})
          </button>
          <button
            onClick={() => setFilter("FLAT")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              filter === "FLAT"
                ? "bg-slate-900 text-white shadow"
                : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            {t.imoveis.filtroFlat}
          </button>
          <button
            onClick={() => setFilter("BEACHFRONT")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              filter === "BEACHFRONT"
                ? "bg-slate-900 text-white shadow"
                : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            {t.imoveis.filtroPeNaAreia}
          </button>
        </div>

        {/* Grid of Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.imagens?.[0] || "/images/anuncio01.png"}
                  alt={item.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow">
                  {item.destaque || "Destaque"}
                </span>
                <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg">
                  {item.categoria}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-emerald-700 font-extrabold text-xl font-mono">
                    {item.preco}
                  </p>
                  <h3 className="font-serif font-bold text-slate-900 text-base leading-snug line-clamp-2">
                    {item.titulo}
                  </h3>
                  <p className="text-slate-500 text-xs flex items-center gap-1 font-medium">
                    <FaMapMarkerAlt className="text-amber-500 shrink-0" />
                    {item.localizacao}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-100 text-center text-xs text-slate-600 font-medium">
                  <div>
                    <FaBed className="mx-auto mb-1 text-slate-400" />
                    <span>{item.quartos} Qts</span>
                  </div>
                  <div>
                    <FaBath className="mx-auto mb-1 text-slate-400" />
                    <span>{item.banheiros} Bnh</span>
                  </div>
                  <div>
                    <FaCar className="mx-auto mb-1 text-slate-400" />
                    <span>{item.vagas} Vg</span>
                  </div>
                  <div>
                    <FaRulerCombined className="mx-auto mb-1 text-slate-400" />
                    <span>{item.area}</span>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setSelectedProperty(item)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition shadow-sm"
                >
                  {t.imoveis.verDetalhes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 md:p-8 space-y-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                {selectedProperty.categoria}
              </span>
              <h3 className="text-2xl font-serif font-extrabold text-slate-900 mt-2">
                {selectedProperty.titulo}
              </h3>
              <p className="text-emerald-700 font-extrabold text-2xl font-mono mt-1">
                {selectedProperty.preco}
              </p>
              <p className="text-slate-500 text-xs flex items-center gap-1 font-medium mt-1">
                <FaMapMarkerAlt className="text-amber-500" />
                {selectedProperty.localizacao}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedProperty.imagens?.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={img} alt={`Foto ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Specs Bar */}
            <div className="grid grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center text-xs text-slate-700 font-semibold">
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold">Quartos</p>
                <p className="text-slate-900 text-sm font-extrabold">{selectedProperty.quartos}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold">Banheiros</p>
                <p className="text-slate-900 text-sm font-extrabold">{selectedProperty.banheiros}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold">Vagas</p>
                <p className="text-slate-900 text-sm font-extrabold">{selectedProperty.vagas}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold">Área</p>
                <p className="text-slate-900 text-sm font-extrabold">{selectedProperty.area}</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm uppercase">Descrição do Imóvel</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedProperty.descricao}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/5583987708002?text=Olá%20Waleska!%20Gostaria%20de%20mais%20informações%20sobre%20o%20imóvel:%20${encodeURIComponent(selectedProperty.titulo)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-2 shadow"
              >
                <FaWhatsapp className="text-base" />
                {t.imoveis.falarSobreImovel}
              </a>
              <button
                onClick={() => setSelectedProperty(null)}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs"
              >
                {t.imoveis.fechar}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Anuncios;
