// src/components/Contato.jsx

import React, { useState } from 'react'

const Contato = () => {
  const [mensagemStatus, setMensagemStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensagemStatus('') // limpa mensagens anteriores

    const formData = new FormData(e.target)

    try {
      const response = await fetch('http://localhost:8000/send-email', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setMensagemStatus('Mensagem enviada com sucesso! Verifique seu e-mail.')
        e.target.reset()
      } else {
        setMensagemStatus('Erro ao enviar a mensagem. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro:', error)
      setMensagemStatus('Erro ao conectar com o servidor.')
    }
  }

  return (
    <section id="contato" className="pt-24 pb-12 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Fale com a gente</h2>

      <form className="max-w-xl mx-auto grid gap-4" onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" className="border p-2 rounded" required />
        <input type="email" name="email" placeholder="Email" className="border p-2 rounded" required />
        <textarea name="mensagem" placeholder="Mensagem" className="border p-2 rounded" rows="4" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Enviar
        </button>
      </form>

      {mensagemStatus && (
        <p className="text-center text-green-600 mt-4">{mensagemStatus}</p>
      )}

      <p className="text-center mt-4">
        Ou chame no WhatsApp: <strong>(83) 8894-8383</strong>
      </p>
      <p className="text-center">
        Instagram: <strong>@imoveis.waleskasantos</strong>
      </p>
    </section>
  )
}

export default Contato
