// 📄 frontend/src/main.jsx

// 🔹 Importações principais do React
import React from 'react'
import ReactDOM from 'react-dom/client'

// 🔹 Componente principal da aplicação
import App from './App.jsx' // ⬅️ Ponto de entrada principal

// 🔹 Estilos globais (Tailwind ou personalizados)
import './styles/index.css' // ⬅️ Arquivo de estilos global

// 🔧 Log de depuração (pode remover depois)
console.log('🔧 Aplicação iniciando...')

// 🔹 Renderização do App no elemento com id="root" (de index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
