// 📄 src/content/katia.js
const data = {
  nomePublico: "Dra. Kátia Xavier Duarte",
  registro: { crm: "CRM-PB 6548", rqe: "" },
  especialidades: [
    "Medicina de Urgência e Emergência",
    "Clínica Médica",
    "Telemedicina"
  ],
  resumo:
    "Médica com ampla experiência em urgência e emergência, atendimento humanizado e foco em desfechos clínicos. Consultas presenciais e por telemedicina.",
  
  // 🔹 Foto principal — substitui qualquer imagem antiga
  foto: "/images/katia-medica.png",

  contato: {
    whatsapp: "+55 83 98897-1068",
    whatsapp_alt: "+55 83 99988-0282",
    whatsapp_link:
      "https://wa.me/5583988971068?text=Ol%C3%A1%20Dra.%20K%C3%A1tia%2C%20gostaria%20de%20agendar%20uma%20consulta.",
    email: "katia-duarte@hotmail.com",
    instagram_principal: "https://www.instagram.com/katia_xavierduarte/",
    instagram_projeto: "https://www.instagram.com/viva_suacura/",
    endereco:
      "Rua Joaquim Mesquita Filho, 310 – Apto 102, Bairro dos Ipês – João Pessoa – PB – CEP 58037-205"
  },
  servicos: [
    {
      titulo: "Urgência e Emergência",
      descricao: "Avaliação rápida, estabilização e orientação especializada."
    },
    {
      titulo: "Clínica Médica",
      descricao:
        "Acompanhamento clínico, prevenção e manejo de doenças crônicas."
    },
    {
      titulo: "Telemedicina",
      descricao:
        "Consultas online com emissão de receitas e atestados eletrônicos."
    }
  ],
  educacao: [
    {
      instituicao: "Universidade Federal de Juiz de Fora (UFJF)",
      curso: "Medicina",
      inicio: "1994-08-08",
      conclusao: "2000-07-28",
      endereco:
        "Campus Universitário, Rua José Lourenço Kelmer, S/N – Bairro São Pedro – Juiz de Fora – MG – CEP 36036-900"
    }
  ],
  experiencia: [
    {
      instituicao: "Hospital de Trauma de João Pessoa",
      cargo: "Médica",
      inicio: "2015-08-01",
      fim: null,
      endereco:
        "R. Orestes Lisboa, SN – Pedro Gondim – João Pessoa – PB – CEP 58031-090",
      telefone: "(83) 3216-5700",
      duties_en:
        "Provide emergency medical care, perform clinical procedures, and coordinate trauma patient care."
    },
    {
      instituicao: "Fundação Manoel da Silva Almeida",
      cargo: "Chefe de plantão – Médico emergencista",
      inicio: "2011-12-01",
      fim: "2024-01-23",
      endereco:
        "Travessa Bancário Leopoldino Vieira de Melo Filho, S/N – Centro – Nazaré da Mata – PE – CEP 55800-000",
      telefone: "(81) 3633-4650",
      supervisor: "Romulo Pires",
      duties_en:
        "Urgent and emergency care, transportation of critically ill patients and advice for the multidisciplinary team and organization of the service."
    }
  ],
  empresa: {
    nome_fantasia: "Saúde Sistêmica",
    razao_social: "Katia Xavier Duarte LTDA",
    cnpj: "47.655.599/0001-65",
    abertura: "2022-08-22",
    capital_social: "R$ 50.000,00",
    situacao: "Ativa",
    endereco:
      "Rua Antônio Rabelo Júnior, 161 – Sala 1305 – Miramar – João Pessoa – PB – CEP 58032-090"
  },
  faq: [
    {
      pergunta: "Atende por telemedicina?",
      resposta:
        "Sim. O atendimento online inclui prescrição e atestados eletrônicos quando indicados."
    },
    {
      pergunta: "Quais convênios são aceitos?",
      resposta:
        "No momento, atendimento particular. Informe-se sobre recibo para reembolso."
    },
    {
      pergunta: "Como agendar?",
      resposta:
        "Clique no botão do WhatsApp ou envie mensagem para um dos números informados."
    }
  ],
  avisos: [
    "Em caso de emergência, ligue 192 (SAMU).",
    "As informações do site não substituem consulta médica."
  ]
};

export default data;
