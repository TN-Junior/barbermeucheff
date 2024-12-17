"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/calendario"); // Nome da rota que você configurou
  };

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/barbearia-banner.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
        <h2 className="text-5xl font-bold mb-4">Transforme seu estilo</h2>
        <p className="text-lg mb-8">
          Agende seu corte com os melhores profissionais
        </p>
        <button
          onClick={handleRedirect}
          className="bg-red-500 px-6 py-2 rounded hover:bg-red-700"
        >
          Agende Agora
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
