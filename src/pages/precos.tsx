import React from "react";

const Precos = () => {
  const servicos = [
    { nome: "Pezinho do cabelo", preco: "R$ 7,00" },
    { nome: "Sobrancelha", preco: "R$ 5,00" },
    { nome: "Barba", preco: "R$ 10,00" },
    { nome: "Barba + pezinho", preco: "R$ 15,00" },
    { nome: "Pigmentação", preco: "R$ 10,00" },
    { nome: "Corte social", preco: "R$ 15,00" },
    { nome: "Corte degrade", preco: "R$ 20,00" },
    { nome: "Corte + pigmentação", preco: "R$ 30,00" },
    { nome: "Corte + freestyle", preco: "R$ 30,00" },
    { nome: "Luzes", preco: "R$ 30,00" },
    { nome: "Reflexo alinhado", preco: "R$ 50,00" },
    { nome: "Nevou", preco: "R$ 70,00" },
  ];

  return (
    <div>
      {/* Imagem de fundo no topo */}
      <div
        className="h-[700px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/handsome-man-cutting-beard-barber-shop-salon.jpg')", // Substitua pelo caminho correto da sua imagem
        }}
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-60 text-white">
          <h1 className="text-5xl font-bold">Tabela de Preços</h1>
        </div>
      </div>

      {/* Lista de serviços */}
      <div className="bg-[#f0ece7] min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 text-[#d17330] text-xl font-semibold"
            >
              <span className="flex-1">{servico.nome}</span>
              <span className="border-dotted border-t border-[#d17330] flex-grow mx-4"></span>
              <span>{servico.preco}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Precos;
