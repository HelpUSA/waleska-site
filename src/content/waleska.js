// src/content/waleska.js
const data = {
  nomePublico: "Waleska Santos - Imóveis",
  registro: { creci: "", outro: "" },
  especialidades: ["Compra", "Venda", "Locação"],
  resumo:
    "Atendimento imobiliário completo com foco em transparência e resultado.",
  contato: {
    whatsapp: "+55 83 9962-9962", // coloquei o número visível
    whatsapp_link: "https://wa.me/558399629962",
    email: "contato@waleska.com.br",
    instagram: "https://www.instagram.com/imoveis.waleskasantos/"
  },
  servicos: [
    {
      id: "comprar",
      titulo: "Compra de Imóveis",
      descricao: "Assessoria completa para compra de casas, apartamentos e terrenos.",
      link: "/servicos/comprar"
    },
    {
      id: "vender",
      titulo: "Venda de Imóveis",
      descricao: "Divulgação e intermediação para vender seu imóvel com segurança.",
      link: "/servicos/vender"
    },
    {
      id: "alugar",
      titulo: "Locação de Imóveis",
      descricao: "Gestão e contratos para locação de imóveis residenciais e comerciais.",
      link: "/servicos/alugar"
    }
  ]
};

export default data;
