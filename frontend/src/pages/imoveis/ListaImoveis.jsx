import React from 'react'
import { Link } from 'react-router-dom'

const ListaImoveis = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Lista de Imóveis</h1>
      <p className="mb-4">Aqui você verá todos os imóveis disponíveis.</p>
      
      {/* Exemplo de item */}
      <div className="bg-white shadow rounded p-4 mb-4">
        <h2 className="text-xl font-semibold">Apartamento no Bessa</h2>
        <p className="text-gray-600">3 quartos, 2 banheiros, 1 vaga</p>
        <Link
          to="/imoveis/1"
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  )
}

export default ListaImoveis
