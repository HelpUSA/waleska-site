// ============================================================================
// arquivo: src/pages/Sobre.jsx
// ----------------------------------------------------------------------------
import React from "react";
import data from "../content/waleska.js";

export default function Sobre() {
  const nome = data?.nomePublico ?? "Waleska Santos - Imóveis";
  const resumo =
    data?.resumo ??
    "Atendimento imobiliário completo com foco em transparência e resultado.";
  const creci = data?.registro?.creci || null;

  const whatsappDisplay = data?.contato?.whatsapp || null;
  const whatsappHref =
    data?.contato?.whatsapp_link ||
    (whatsappDisplay ? `https://wa.me/${whatsappDisplay.replace(/\D/g, "")}` : "#");
  const email = data?.contato?.email || null;
  const instagram = data?.contato?.instagram || null;

  return (
    <main id="sobre" className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{nome}</h1>
        {creci && <p className="text-slate-600 mt-1">{creci}</p>}
      </header>

      <section className="prose max-w-none">
        <p className="text-lg text-slate-800">{resumo}</p>

        {Array.isArray(data?.especialidades) && data.especialidades.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-8">Especialidades</h2>
            <ul className="list-disc pl-6">
              {data.especialidades.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </>
        )}

        <h2 className="text-2xl font-semibold mt-8">Contato</h2>
        <ul className="space-y-2">
          {whatsappDisplay && (
            <li>
              WhatsApp:{" "}
              <a className="text-emerald-700 underline" href={whatsappHref} target="_blank" rel="noreferrer">
                {whatsappDisplay}
              </a>
            </li>
          )}
          {email && (
            <li>
              E-mail:{" "}
              <a className="text-emerald-700 underline" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          )}
          {instagram && (
            <li>
              Instagram:{" "}
              <a className="text-emerald-700 underline" href={instagram} target="_blank" rel="noreferrer">
                {instagram}
              </a>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}
