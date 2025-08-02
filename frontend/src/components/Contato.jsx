import React from 'react'

const Contato = () => (
  <section className="py-12 px-4 bg-white">
    <h2 className="text-3xl font-semibold text-center mb-8">Contato</h2>
    <form className="max-w-xl mx-auto grid gap-4">
      <input type="text" placeholder="Nome" className="border p-2 rounded" />
      <input type="email" placeholder="Email" className="border p-2 rounded" />
      <textarea placeholder="Mensagem" className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Enviar</button>
    </form>
  </section>
)

export default Contato