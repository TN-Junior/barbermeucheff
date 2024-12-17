import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 text-gray-800">
      <h3 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h3>
      <div className="flex justify-around items-center">
        <div className="text-center">
          <h4 className="text-xl font-semibold">Corte de Cabelo</h4>
          <p className="mt-2">Clássico, moderno e estiloso</p>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-semibold">Barba Completa</h4>
          <p className="mt-2">Barba desenhada e modelada</p>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-semibold">Tratamentos</h4>
          <p className="mt-2">Cuidados especiais para seu cabelo</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
