// 📄 main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // ⬅️ extensão incluída
import './styles/index.css' // ⬅️ Tailwind e outros estilos

console.log('🔧 Aplicação iniciando...') // debug temporário

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
