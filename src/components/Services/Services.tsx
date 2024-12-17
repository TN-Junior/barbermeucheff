"use client"; // Adicione isso no topo do arquivo

import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 text-gray-800">
      <h3 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h3>
      <div className="flex justify-around items-center">
        {/* Serviço 1 */}
        <div className="text-center max-w-xs">
          <h4 className="text-xl font-semibold">Corte de Cabelo</h4>
          <p className="mt-2">Clássico, moderno e estiloso</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            onClick={() => alert("Mais informações sobre Corte de Cabelo")}
          >
            Ver Mais
          </button>
        </div>

        {/* Serviço 2 */}
        <div className="text-center max-w-xs">
          <h4 className="text-xl font-semibold">Barba Completa</h4>
          <p className="mt-2">Barba desenhada e modelada</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            onClick={() => alert("Mais informações sobre Barba Completa")}
          >
            Ver Mais
          </button>
        </div>

        {/* Serviço 3 */}
        <div className="text-center max-w-xs">
          <h4 className="text-xl font-semibold">Tratamentos</h4>
          <p className="mt-2">Cuidados especiais para seu cabelo</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            onClick={() => alert("Mais informações sobre Tratamentos")}
          >
            Ver Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
