// ============================================================================
// arquivo: src/components/ServicosGrid.jsx
// ----------------------------------------------------------------------------
import React from 'react';
import data from '../content/katia.js'; // trocado de .json para .js

const ServicosGrid = () => (
  <section id="servicos" className="py-16 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Serviços</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.servicos.map((s, i) => (
        <div key={i} className="rounded-2xl shadow p-6 bg-white">
          <h3 className="text-xl font-semibold mb-2">{s.titulo}</h3>
          <p className="text-slate-600">{s.descricao}</p>
        </div>
      ))}
    </div>
  </section>
);
export default ServicosGrid;
