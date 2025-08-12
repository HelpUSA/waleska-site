// ============================================================================
// arquivo: src/pages/Servicos.jsx
// ----------------------------------------------------------------------------
import React from "react";
import { FaHome, FaFileSignature, FaKey, FaBalanceScale, FaWhatsapp } from "react-icons/fa";
import data from "../content/waleska.js";

const items = [
  {
    icon: FaHome,
    title: "Compra de imóveis",
    text:
      "Curadoria de opções, visitas, análise de preço e negociação. Verificação de matrícula e certidões; orientação sobre escritura e registro.",
  },
  {
    icon: FaKey,
    title: "Venda de imóveis",
    text:
      "Avaliação de mercado (CMA), fotos/vídeo, anúncios, visitas e negociação até a assinatura. Acompanhamento até o registro.",
  },
  {
    icon: FaFileSignature,
    title: "Locação residencial/comercial",
    text:
      "Preparação do imóvel, captação de inquilino, análise de perfil, contrato, vistorias e garantias.",
  },
  {
    icon: FaBalanceScale,
    title: "Análise documental",
    text:
      "Conferência de matrícula, ônus/averbações e certidões pessoais/do imóvel para segurança jurídica.",
  },
  {
    icon: FaFileSignature,
    title: "Escritura, ITBI e registro",
    text:
      "Checklist de documentos, guia de ITBI e protocolo no Cartório de Registro de Imóveis.",
  },
  {
    icon: FaHome,
    title: "Financiamento",
    text:
      "Pré‑análise de crédito, coleta de documentos e acompanhamento do processo junto ao banco.",
  },
];

const Card = ({ icon: Icon, title, text }) => (
  <div className="rounded-2xl border p-5 shadow-sm bg-white">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="text-xl" />
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
  </div>
);

export default function Servicos() {
  const wa =
    data?.contato?.whatsapp_link ||
    (data?.contato?.whatsapp ? `https://wa.me/${data.contato.whatsapp.replace(/\D/g, "")}` : "#");

  return (
    <main className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Serviços Imobiliários</h1>
        <p className="text-slate-600 mt-2">
          Assessoria completa em <strong>compra</strong>, <strong>venda</strong> e <strong>locação</strong>.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Card key={i} icon={it.icon} title={it.title} text={it.text} />
        ))}
      </section>

      <div className="mt-10 flex justify-center">
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl shadow"
        >
          <FaWhatsapp /> Falar pelo WhatsApp
        </a>
      </div>
    </main>
  );
}
