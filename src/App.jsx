// 📄 src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';

const TITLES = {
  '/': 'Início',
  '/sobre': 'Sobre',
  '/servicos': 'Serviços',
  '/contato': 'Contato',
};

function TitleAndScroll() {
  const location = useLocation();

  useEffect(() => {
    const base = 'Dra. Kátia Xavier';
    const section = TITLES[location.pathname] || 'Início';
    document.title = `${section} • ${base}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleAndScroll />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
        <WhatsappIcon />
      </div>
    </Router>
  );
}

export default App;
