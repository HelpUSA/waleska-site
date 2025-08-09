// ============================================================================
// arquivo: src/pages/Sobre.jsx
// ----------------------------------------------------------------------------
import React from 'react';
import data from '../content/katia.js'; // trocado de .json para .js

const Linha = ({ label, children }) => (
  <p className="mb-2">
    <span className="font-semibold">{label}: </span>
    {children}
  </p>
);

const Sobre = () => (
  <div className="max-w-3xl mx-auto px-6 py-16">
    <h1 className="text-3xl font-bold mb-4">Sobre</h1>
    <p className="mb-6">{data.resumo}</p>

    <h2 className="text-2xl font-semibold mt-8 mb-3">Formação</h2>
    {data.educacao?.map((e, i) => (
      <div key={i} className="mb-4">
        <Linha label="Instituição">{e.instituicao}</Linha>
        <Linha label="Curso">{e.curso}</Linha>
        <Linha label="Período">
          {new Date(e.inicio).toLocaleDateString()} –{' '}
          {new Date(e.conclusao).toLocaleDateString()}
        </Linha>
      </div>
    ))}

    <h2 className="text-2xl font-semibold mt-8 mb-3">Experiência</h2>
    {data.experiencia?.map((x, i) => (
      <div key={i} className="mb-4">
        <Linha label="Instituição">{x.instituicao}</Linha>
        <Linha label="Cargo">{x.cargo}</Linha>
        <Linha label="Período">
          {new Date(x.inicio).toLocaleDateString()} –{' '}
          {x.fim ? new Date(x.fim).toLocaleDateString() : 'Atual'}
        </Linha>
        <Linha label="Duties (EN)">{x.duties_en}</Linha>
      </div>
    ))}

    <h2 className="text-2xl font-semibold mt-8 mb-3">Empresa Própria</h2>
    <div className="mb-4">
      <Linha label="Nome Fantasia">{data.empresa.nome_fantasia}</Linha>
      <Linha label="Razão Social">{data.empresa.razao_social}</Linha>
      <Linha label="CNPJ">{data.empresa.cnpj}</Linha>
      <Linha label="Abertura">
        {new Date(data.empresa.abertura).toLocaleDateString()}
      </Linha>
      <Linha label="Situação">{data.empresa.situacao}</Linha>
      <Linha label="Endereço">{data.empresa.endereco}</Linha>
    </div>

    <p className="text-sm text-slate-500 mt-8">
      *Por privacidade, dados sensíveis não são exibidos publicamente sem
      consentimento explícito.
    </p>
  </div>
);

export default Sobre;
