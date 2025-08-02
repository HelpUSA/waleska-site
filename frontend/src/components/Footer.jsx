// src/components/Footer.jsx

import React from 'react'

const Footer = () => (
  <footer className="bg-[#083a35] text-white pt-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-white/20">
      {/* Coluna 1 - Horário e endereço */}
      <div>
        <h3 className="font-semibold mb-3 text-lg">Contato</h3>
        <p className="text-sm">Rua Exemplo, 123 – João Pessoa - PB</p>
        <p className="text-sm mt-1">Atendimento: Seg a Sáb – 07h às 16h</p>
        <p className="text-sm mt-2">📞 WhatsApp: (83) 8894-8383</p>
        <p className="text-sm">📧 contato@helpusa.com.br</p>
      </div>

      {/* Coluna 2 - Navegação */}
      <div>
        <h3 className="font-semibold mb-3 text-lg">Links rápidos</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#home" className="hover:text-teal-300">Home</a></li>
          <li><a href="#sobre" className="hover:text-teal-300">Sobre</a></li>
          <li><a href="#empreendimentos" className="hover:text-teal-300">Empreendimentos</a></li>
          <li><a href="#contato" className="hover:text-teal-300">Contato</a></li>
        </ul>
      </div>

      {/* Coluna 3 - Redes sociais ou vazio (reservado) */}
      <div className="hidden lg:block"></div>
    </div>

    {/* Linha inferior com logo e crédito */}
    <div className="text-center text-xs text-white/70 py-4 flex flex-col items-center">
      <img src="/images/helpus-logo.png" alt="HelpUS logo" className="h-10 mb-1" />
      <span>
        Desenvolvido por <a href="https://helpusa.com.br" className="underline hover:text-white">HelpUS</a> • Todos os direitos reservados
      </span>
    </div>
  </footer>
)

export default Footer
