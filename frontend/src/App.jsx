// 📄 src/App.jsx

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Diferenciais from './components/Diferenciais'
import Empreendimentos from './components/Empreendimentos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsappIcon from './components/WhatsappIcon'

// 🏠 Páginas de imóveis
import ListaImoveis from './pages/imoveis/ListaImoveis'
import DetalheImovel from './pages/imoveis/DetalheImovel'
import CadastroImovel from './pages/imoveis/CadastroImovel'

function App() {
  return (
    <Router>
      <div>
        {/* ✅ Texto temporário para teste de renderização no Vercel */}
        <div className="text-center text-2xl font-bold text-blue-600 mt-10">
          Waleska Imóveis — Teste de Renderização
        </div>

        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Sobre />
              <Diferenciais />
              <Empreendimentos />
              <Contato />
            </>
          } />
          <Route path="/imoveis" element={<ListaImoveis />} />
          <Route path="/imoveis/:id" element={<DetalheImovel />} />
          <Route path="/admin/novo-imovel" element={<CadastroImovel />} />
        </Routes>
        <Footer />
        <WhatsappIcon />
      </div>
    </Router>
  )
}

export default App
