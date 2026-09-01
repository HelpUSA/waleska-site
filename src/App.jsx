import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Anuncios from './components/Anuncios';
import Diferenciais from './components/Diferenciais';
import ServicosGrid from './components/ServicosGrid';
import InstagramCTA from './components/InstagramCTA';
import ContatoForm from './components/ContatoForm';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
import AdminModal from './components/AdminModal';

import { translations, imoveisData } from './content/waleska.js';

function App() {
  const [lang, setLang] = useState('pt');
  const t = translations[lang] || translations.pt;

  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem('waleska_properties');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return imoveisData;
  });

  const [user, setUser] = useState(null);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white text-slate-800">
        <Header lang={lang} setLang={setLang} t={t} />
        <main className="flex-1">
          <Hero t={t} />
          <Anuncios t={t} properties={properties} />
          <Diferenciais t={t} />
          <ServicosGrid t={t} />
          <InstagramCTA t={t} />
          <ContatoForm t={t} />
        </main>
        <Footer t={t} onOpenAdmin={() => setAdminModalOpen(true)} />
        <WhatsappIcon />

        {/* Realtor Dashboard & Login Modal */}
        <AdminModal
          isOpen={adminModalOpen}
          onClose={() => setAdminModalOpen(false)}
          properties={properties}
          setProperties={setProperties}
          user={user}
          setUser={setUser}
        />
      </div>
    </Router>
  );
}

export default App;
