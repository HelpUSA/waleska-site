// 📄 frontend/src/App.jsx

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// 🔹 Componentes principais
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Diferenciais from './components/Diferenciais'
import Empreendimentos from './components/Empreendimentos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsappIcon from './components/WhatsappIcon'

// 🔹 Páginas de imóveis
import Listaimoveis from './pages/imoveis/Listaimoveis'
import Detalheimovel from './pages/imoveis/Detalheimovel'
import Cadastroimovel from './pages/imoveis/Cadastroimovel'

function App() {
  return (
    <Router>
      <div>
        {/* ✅ Renderização de teste no topo */}
        <div className="text-center text-2xl font-bold text-blue-600 mt-10">
          Waleska Imóveis — Teste de Renderização
        </div>

        <Header />

        <Routes>
          {/* Página inicial */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Sobre />
                <Diferenciais />
                <Empreendimentos />
                <Contato />
              </>
            }
          />

          {/* Rotas de imóveis */}
          <Route path="/imoveis" element={<Listaimoveis />} />
          <Route path="/imoveis/:id" element={<Detalheimovel />} />
          <Route path="/admin/novo-imovel" element={<Cadastroimovel />} />
        </Routes>

        <Footer />
        <WhatsappIcon />
      </div>
    </Router>
  )
}

export default App
