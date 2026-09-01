import React, { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContatoForm = ({ t }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá Waleska! Meu nome é ${nome}.\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const waUrl = `https://wa.me/5583987708002?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Info Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Fale Comigo
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900">
              {t.contatoForm.titulo}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.contatoForm.subtitulo}
            </p>
          </div>

          <div className="space-y-4 pt-2 text-sm text-slate-700 font-semibold">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center text-lg shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Atuação</p>
                <p className="text-slate-900">João Pessoa - PB (Cabo Branco, Jardim Oceania, Altiplano, Bessa)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-lg shrink-0">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">WhatsApp Direto</p>
                <a href="https://wa.me/5583987708002" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-mono">
                  (83) 98770-8002
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center text-lg shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">E-mail</p>
                <p className="text-slate-900">contato@waleska.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {t.contatoForm.nome}
              </label>
              <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Roberto Albuquerque"
                className="w-full bg-white text-slate-900 text-sm rounded-xl p-3 border border-slate-200 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {t.contatoForm.email}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="roberto@email.com"
                  className="w-full bg-white text-slate-900 text-sm rounded-xl p-3 border border-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {t.contatoForm.telefone}
                </label>
                <input
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(83) 99999-9999"
                  className="w-full bg-white text-slate-900 text-sm rounded-xl p-3 border border-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {t.contatoForm.mensagem}
              </label>
              <textarea
                rows={4}
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva sua mensagem aqui..."
                className="w-full bg-white text-slate-900 text-sm rounded-xl p-3 border border-slate-200 focus:border-amber-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow transition"
            >
              <FaWhatsapp className="text-base" />
              {t.contatoForm.enviar}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContatoForm;
