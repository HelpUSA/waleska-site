import React, { useState } from 'react'

const CadastroImovel = () => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Imóvel cadastrado:\nNome: ${nome}\nDescrição: ${descricao}`)
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Imóvel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Nome do Imóvel</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Descrição</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows="4"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cadastrar Imóvel
        </button>
      </form>
    </div>
  )
}

export default CadastroImovel
