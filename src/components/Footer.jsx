import React from "react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaLock } from "react-icons/fa";

const Footer = ({ t, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Marca & Perfil */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400 bg-slate-800 shrink-0">
                <img src="/images/waleska-chaves.png" alt="Waleska Santos" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/images/waleska-logo.png"; }} />
              </div>
              <span className="font-serif font-extrabold text-white text-lg">Waleska Santos</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.creci}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento imobiliário de alto padrão com foco em transparência e segurança jurídica em João Pessoa.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition">{t.nav.inicio}</a></li>
              <li><a href="#sobre" className="hover:text-amber-400 transition">{t.nav.sobre}</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition">{t.nav.servicos}</a></li>
              <li><a href="#imoveis" className="hover:text-amber-400 transition">{t.nav.imoveis}</a></li>
              <li><a href="#contato" className="hover:text-amber-400 transition">{t.nav.contato}</a></li>
            </ul>
          </div>

          {/* Coluna 3: Instagram */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Rede Social</h4>
            <a
              href="https://www.instagram.com/imoveis.waleskasantos/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-bold text-xs"
            >
              <FaInstagram className="text-base" /> @imoveis.waleskasantos
            </a>
            <p className="text-xs text-slate-400">
              Acompanhe novidades diárias dos melhores imóveis na orla de João Pessoa.
            </p>
          </div>

          {/* Coluna 4: Contato */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Atendimento</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-slate-300">
                <FaMapMarkerAlt className="text-amber-400" /> Cabo Branco / Jardim Oceania - JP
              </p>
              <p className="flex items-center gap-2 text-emerald-400 font-bold">
                <FaWhatsapp /> (83) 9962-9962
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <FaEnvelope className="text-amber-400" /> contato@waleska.com.br
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé Bottom com Botão de Login do Corretor */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.direitos}</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 border border-slate-700 transition text-[11px] font-bold"
            >
              <FaLock className="text-amber-400" /> Área do Corretor / Login
            </button>
            <p className="flex items-center gap-1">
              Desenvolvido por <strong className="text-amber-400">HelpUS</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
