"use client";

import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 bg-cover bg-center text-gray-100"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/images/services-background.jpg')",
      }}
    >
      <h3 className="text-4xl font-extrabold text-center mb-12 text-white">
        Nossos Serviços
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Serviço 1 */}
        <div className="text-center max-w-xs bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-2">Corte de Cabelo</h4>
          <p className="mb-4 text-gray-300">Clássico, moderno e estiloso</p>
          <button
            className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300 shadow"
            onClick={() => alert("Mais informações sobre Corte de Cabelo")}
          >
            Ver Mais
          </button>
        </div>

        {/* Serviço 2 */}
        <div className="text-center max-w-xs bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-2">Barba Completa</h4>
          <p className="mb-4 text-gray-300">Barba desenhada e modelada</p>
          <button
            className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300 shadow"
            onClick={() => alert("Mais informações sobre Barba Completa")}
          >
            Ver Mais
          </button>
        </div>

        {/* Serviço 3 */}
        <div className="text-center max-w-xs bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-2">Tratamentos</h4>
          <p className="mb-4 text-gray-300">Cuidados especiais para seu cabelo</p>
          <button
            className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300 shadow"
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
