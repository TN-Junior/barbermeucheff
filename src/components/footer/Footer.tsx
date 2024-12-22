import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MeuCheff. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
