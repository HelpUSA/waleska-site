// src/App.jsx

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Diferenciais from './components/Diferenciais'
import Empreendimentos from './components/Empreendimentos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsappIcon from './components/WhatsappIcon' // ✅ Importa o ícone flutuante

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre />
      <Diferenciais />
      <Empreendimentos />
      <Contato />
      <Footer />
      <WhatsappIcon /> {/* ✅ Ícone flutuante aparece em todas as páginas */}
    </div>
  )
}

export default App
