// ============================================================================
// arquivo: src/components/Footer.jsx
// ----------------------------------------------------------------------------
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import data from "../content/waleska.js";

const Footer = () => (
  <footer className="bg-[#083a35] text-white pt-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-white/20">
      {/* Coluna 1 - Contato */}
      <div>
        <h3 className="font-semibold mb-3 text-lg">Contato</h3>
        <p className="text-sm">Rua Exemplo, 123 – João Pessoa - PB</p>
        <p className="text-sm mt-1">Atendimento: Seg a Sáb – 07h às 16h</p>
        {data?.contato?.whatsapp && (
          <p className="text-sm mt-2 flex items-center gap-2">
            <FaWhatsapp className="text-lg" />
            <a
              href={
                data?.contato?.whatsapp_link ||
                `https://wa.me/${data.contato.whatsapp.replace(/\D/g, "")}`
              }
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300"
            >
              {data.contato.whatsapp}
            </a>
          </p>
        )}
        {data?.contato?.email && (
          <p className="text-sm flex items-center gap-2">
            📧{" "}
            <a
              href={`mailto:${data.contato.email}`}
              className="hover:text-teal-300"
            >
              {data.contato.email}
            </a>
          </p>
        )}
      </div>

      {/* Coluna 2 - Navegação */}
      <div>
        <h3 className="font-semibold mb-3 text-lg">Links rápidos</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#home" className="hover:text-teal-300">
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-teal-300">
              Sobre
            </a>
          </li>
          <li>
            <a href="#empreendimentos" className="hover:text-teal-300">
              Empreendimentos
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-teal-300">
              Contato
            </a>
          </li>
        </ul>
      </div>

      {/* Coluna 3 - Redes sociais */}
      <div>
        <h3 className="font-semibold mb-3 text-lg">Siga nas redes</h3>
        <div className="flex gap-4 mt-2">
          {data?.contato?.instagram && (
            <a
              href={data.contato.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-pink-400"
            >
              <FaInstagram className="text-xl" /> Instagram
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Linha inferior com logo e crédito */}
    <div className="text-center text-xs text-white/70 py-4 flex flex-col items-center">
      <img
        src="/images/waleska-logo.png"
        alt="Waleska Santos - Imóveis logo"
        className="h-10 mb-1"
      />
      <span>
        Desenvolvido por{" "}
        <a
          href="https://helpusa.com.br"
          className="underline hover:text-white"
        >
          HelpUS
        </a>{" "}
        • Todos os direitos reservados
      </span>
    </div>
  </footer>
);

export default Footer;
