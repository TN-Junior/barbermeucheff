"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../../styles/_app";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Título */}
      <div className="text-center mb-8">
        <p className="text-red-500 text-sm font-semibold">../contact</p>
        <div className="flex flex-col items-center justify-center">
          <span className="text-red-500 text-6xl mb-2">📧</span>
          <h2 className="text-7xl font-extrabold relative">
            <span className="text-gray-600 absolute -z-10 top-2 left-1 opacity-30">Contact</span>
            <span className="text-red-500">Contato</span>
          </h2>
        </div>
      </div>

      {/* Informações de contato */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* WhatsApp */}
        <div className="bg-[#121212] px-6 py-4 rounded-lg shadow-md flex items-center gap-4 w-64 text-center">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-2xl" /> {/* Ícone WhatsApp com cor verde */}
          <div>
            <h4 className="font-bold">WhatsApp</h4>
            <a
              href="https://wa.me/5581983061861"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              +55 81 98306-1861
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#121212] px-6 py-4 rounded-lg shadow-md flex items-center gap-4 w-64 text-center">
          <FontAwesomeIcon icon={faPaperPlane} className="text-blue-500 text-2xl" /> {/* Ícone Email com cor azul */}
          <div>
            <h4 className="font-bold">Email</h4>
            <a
              href="mailto:tary.junior47@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              tary.junior47@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Formulário */}
      <form className="flex flex-col gap-4 w-full max-w-md">
        <div>
          <input
            type="text"
            placeholder="Nome"
            className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>
        <div>
          <textarea
            placeholder="Mensagem"
            rows={4}
            className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 border border-gray-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-black transition duration-300 flex items-center justify-center gap-2"
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
