import React from "react";
import useLogout from "../../hooks/useLogout";

const Header: React.FC = () => {
  const logout = useLogout();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Barbearia MeuCheff</h1>
        <nav className="flex items-center space-x-4">
          <a className="hover:underline text-lg" href="#services">
            Serviços
          </a>
          <a className="hover:underline text-lg" href="/contact">
            Contato
          </a>
          {/* Botão de Logout estilizado */}
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 rounded-full text-white font-semibold hover:bg-red-700 transition transform hover:scale-105"
          >
            Sair
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
