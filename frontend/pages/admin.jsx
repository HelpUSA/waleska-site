
import { useEffect, useState } from 'react';

export default function Admin() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/imoveis`)
      .then(res => res.json())
      .then(data => setImoveis(data));
  }, []);

  return (
    <div>
      <h2>Imóveis Cadastrados</h2>
      <ul>
        {imoveis.map(imovel => (
          <li key={imovel.id}>
            <strong>{imovel.titulo}</strong> - {imovel.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
