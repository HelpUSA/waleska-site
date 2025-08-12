// ============================================================================
// arquivo: src/pages/Home.jsx
// ----------------------------------------------------------------------------
import React from "react";
import Hero from "../components/Hero";
import Anuncios from "../components/Anuncios";
import InstagramCTA from "../components/InstagramCTA";
import ServicosGrid from "../components/ServicosGrid";
import ContatoForm from "../components/ContatoForm";
import data from "../content/waleska.js";

const Home = () => (
  <main>
    <Hero />

    {/* Imóveis em destaque */}
    <Anuncios />

    {/* CTA Instagram */}
    <InstagramCTA />

    {/* Resumo */}
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <p className="text-lg text-slate-700 text-center">
        {data?.resumo ??
          "Atendimento imobiliário completo com foco em transparência e resultado."}
      </p>
    </section>

    {/* Serviços */}
    <section className="py-8 px-6 max-w-6xl mx-auto">
      <ServicosGrid servicos={data?.servicos ?? []} />
    </section>

    {/* Contato */}
    <ContatoForm />
  </main>
);

export default Home;
