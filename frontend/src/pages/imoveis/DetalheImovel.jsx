import React from 'react'
import { useParams } from 'react-router-dom'

const DetalheImovel = () => {
  const { id } = useParams()

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Detalhes do Imóvel</h1>
      <p className="text-gray-700 mb-2">ID do imóvel: {id}</p>
      <p className="mb-4">Mais informações e imagens virão aqui.</p>
    </div>
  )
}

export default DetalheImovel
