// ============================================================================
// arquivo: src/components/ContatoForm.jsx
// ----------------------------------------------------------------------------
import React from 'react';
import data from '../content/waleska.js'; // trocado de .json para .js

const ContatoForm = () => (
  <section id="contato" className="py-16 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">Contato</h2>
    <div className="rounded-2xl shadow p-6 bg-white">
      <div className="space-y-2 mb-6">
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a
            className="underline"
            href={data.contato.whatsapp_link}
            target="_blank"
            rel="noreferrer"
          >
            {data.contato.whatsapp}
          </a>
        </p>
        {data.contato.whatsapp_alt && (
          <p>
            <strong>Telefone alternativo:</strong> {data.contato.whatsapp_alt}
          </p>
        )}
        <p>
          <strong>E-mail:</strong>{' '}
          <a
            className="underline"
            href={`mailto:${data.contato.email}`}
          >
            {data.contato.email}
          </a>
        </p>
        <p>
          <strong>Instagram:</strong>{' '}
          <a
            className="underline"
            href={data.contato.instagram_principal}
            target="_blank"
            rel="noreferrer"
          >
            @katia_xavierduarte
          </a>{' '}
          â€¢{' '}
          <a
            className="underline"
            href={data.contato.instagram_projeto}
            target="_blank"
            rel="noreferrer"
          >
            @viva_suacura
          </a>
        </p>
        <p>
          <strong>EndereÃ§o:</strong> {data.contato.endereco}
        </p>
      </div>
      <a
        href={data.contato.whatsapp_link}
        className="inline-block bg-slate-900 text-white font-semibold px-5 py-3 rounded-2xl"
      >
        Falar pelo WhatsApp
      </a>
    </div>
  </section>
);
export default ContatoForm;
