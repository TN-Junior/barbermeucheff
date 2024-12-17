import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Barbearia MeuCheff</h1>
        <nav>
          <a className="mx-2 hover:underline" href="#services">Serviços</a>
          <a className="mx-2 hover:underline" href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
