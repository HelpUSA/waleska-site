// 📄 src/components/Anuncios.jsx
import React from "react";

const anuncios = [
  {
    src: "/images/anuncio01.png",
    alt: "Última unidade - Residencial Rota do Sol",
  },
  {
    src: "/images/anuncio02.png",
    alt: "Casa com 3 quartos, Jardim Oceania",
  },
  {
    src: "/images/anuncio03.png",
    alt: "Apartamento 2 quartos, Cabo Branco",
  },
  {
    src: "/images/anuncio04.png",
    alt: "Apartamento 3 quartos, Jardim Oceania",
  },
];

export default function Anuncios() {
  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Imóveis em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {anuncios.map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border shadow hover:shadow-lg transition"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
