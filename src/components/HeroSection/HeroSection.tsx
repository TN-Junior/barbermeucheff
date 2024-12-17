import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/barbearia-banner.jpg')" }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
        <h2 className="text-5xl font-bold mb-4">Transforme seu estilo</h2>
        <p className="text-lg mb-8">Agende seu corte com os melhores profissionais</p>
        <a href="#contact" className="bg-red-500 px-6 py-2 rounded hover:bg-red-700">Agende Agora</a>
      </div>
    </section>
  );
};

export default HeroSection;
