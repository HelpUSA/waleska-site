import React from 'react'

const Hero = () => (
  <section className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
    <div className="bg-black bg-opacity-50 p-8 rounded">
      <h1 className="text-4xl font-bold mb-4">Mar de Corais</h1>
      <p className="text-xl">O empreendimento dos seus sonhos à beira-mar</p>
    </div>
  </section>
)

export default Hero