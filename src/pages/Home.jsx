// ============================================================================
// arquivo: src/pages/Home.jsx
// ----------------------------------------------------------------------------
import React from 'react';
import Hero from '../components/Hero';
import ServicosGrid from '../components/ServicosGrid';
import ContatoForm from '../components/ContatoForm';
import data from '../content/katia.js'; // <-- coloque a extensão .js

const Home = () => (
  <main>
    <Hero />
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <p className="text-lg text-slate-700 text-center">{data.resumo}</p>
    </section>
    <ServicosGrid />
    <ContatoForm />
  </main>
);
export default Home;
