// src/components/ServicosGrid.jsx
import React from "react";

export default function ServicosGrid({ servicos = [] }) {
  if (!Array.isArray(servicos)) {
    console.warn("ServicosGrid: 'servicos' não é array:", servicos);
    servicos = [];
  }

  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {servicos.map((s, i) => (
        <article key={s.id ?? i} className="p-4 rounded-xl border">
          <h3 className="font-semibold">{s.titulo}</h3>
          {s.descricao && <p className="text-sm opacity-80">{s.descricao}</p>}
          {s.link && (
            <a className="text-blue-600 underline mt-2 inline-block" href={s.link}>
              Saiba mais
            </a>
          )}
        </article>
      ))}
    </section>
  );
}
