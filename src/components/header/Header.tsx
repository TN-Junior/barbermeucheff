import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 flex items-center">
          <span className="text-blue-600">MeuCheff</span>
          <span className="text-orange-500">barber</span>
        </div>

        {/* Navegação */}
        <nav className="flex space-x-6 text-gray-800">
          <a
            href="#"
            className="hover:text-blue-500 font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-500 font-medium transition-colors"
          >
            Sobre
          </a>
          <a
            href="#"
            className="hover:text-blue-500 font-medium transition-colors border px-2"
          >
            Barber
          </a>
          <a
            href="#"
            className="hover:text-blue-500 font-medium transition-colors"
          >
            Beleza
          </a>
          <a
            href="#"
            className="hover:text-blue-500 font-medium transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-blue-500 font-medium transition-colors"
          >
            Contato
          </a>
          <a
            href="#"
            className="hover:text-blue-500 font-medium transition-colors"
          >
            Acesse nosso sistema
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
