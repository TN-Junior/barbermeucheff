"use client";

import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Título */}
      <div className="text-center mb-8">
        <p className="text-green-500 text-sm font-semibold">../contact</p>
        <h2 className="text-5xl font-extrabold">
          <span className="text-gray-600">Contact</span> <span className="text-green-500">Contato</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades de trabalho ou colaborando em alguns novos projetos incríveis.
          Basta preencher o formulário que retornarei{" "}
          <span role="img" aria-label="muscle">
            💪
          </span>
        </p>
      </div>

      {/* Informações de contato */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* WhatsApp */}
        <div className="bg-[#121212] px-6 py-4 rounded-lg shadow-md flex items-center gap-4 w-64 text-center">
          <span role="img" aria-label="WhatsApp" className="text-green-500 text-xl">
            💬
          </span>
          <div>
            <h4 className="font-bold">WhatsApp</h4>
            <p className="text-gray-400">+55 81 98441-7364</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#121212] px-6 py-4 rounded-lg shadow-md flex items-center gap-4 w-64 text-center">
          <span role="img" aria-label="Email" className="text-green-500 text-xl">
            📧
          </span>
          <div>
            <h4 className="font-bold">Email</h4>
            <p className="text-gray-400">tary.junior47@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Formulário */}
      <form className="flex flex-col gap-4 w-full max-w-md">
        <div>
          <input
            type="text"
            placeholder="Nome"
            className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <div>
          <textarea
            placeholder="Mensagem"
            rows={4}
            className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-green-500 outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition duration-300 flex items-center justify-center gap-2"
        >
          Enviar{" "}
          <span role="img" aria-label="Send">
            🚀
          </span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
