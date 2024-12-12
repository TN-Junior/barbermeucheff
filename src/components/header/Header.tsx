import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">MeuCheff Barbearia</h1>
        <nav className="header-nav">
          <a href="/">Início</a>
          <a href="/services">Serviços</a>
          <a href="/appointments">Agendamentos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;