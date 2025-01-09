{/*
"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Ícone do Instagram
import Image from "next/image";
import "../../styles/_app";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
  
      <div className="text-center mb-8">
        <p className="text-red-500 text-sm font-semibold">../contact</p>
        <div className="flex flex-col items-center justify-center">
          <span className="text-red-500 text-6xl mb-2">📧</span>
          <h2 className="text-7xl font-extrabold relative">
            <span className="text-gray-600 absolute -z-10 top-2 left-1 opacity-30">
              Contact
            </span>
            <span className="text-red-500">Contato</span>
          </h2>
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-6 mb-12">

        <div className="bg-[#121212] px-6 py-4 rounded-lg shadow-md flex items-center gap-4 w-64 text-center">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-green-500 text-2xl"
          />
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

        <div className="bg-[#121212] px-6 py-4 rounded-lg shadow-md flex items-center gap-4 w-64 text-center">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-pink-500 text-2xl"
          />
          <div>
            <h4 className="font-bold">Instagram</h4>
            <a
              href="https://instagram.com/seu_usuario" // Substitua pelo seu link do Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              @seu_usuario
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/images/contact.png" // Caminho da imagem na pasta `public`
          alt="Barbeiro segurando tesouras"
          width={300}
          height={300}
          className="rounded-lg shadow-lg animate-rotate"
        />
      </div>


      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-rotate {
          animation: rotate 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
*/}