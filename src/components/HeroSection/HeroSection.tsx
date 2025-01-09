"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "../../pages/_app"

const Home: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("https://wa.me/5581983061861");
  };

  // Animação para o texto
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('images/Reimundo Barbearia.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-60 text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={textAnimation}
          >
            BARBEARIA MEU CHEFF
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            variants={textAnimation}
          >
            Somos apaixonados no cuidado do seu bem-estar
          </motion.p>
          <motion.button
            onClick={handleRedirect}
            className="bg-orange-500 px-6 py-3 text-lg font-semibold rounded hover:bg-orange-600 transition"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
            variants={textAnimation}
          >
            AGENDAR UM HORÁRIO
          </motion.button>
          <motion.p
            className="mt-4 text-sm"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            variants={textAnimation}
          >
            Consulte Disponibilidade
          </motion.p>
        </div>

        {/* Quebradinha invertida */}
        <div
          className="absolute bottom-0 w-full h-16 bg-white"
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          }}
        ></div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={textAnimation}
        >
          AQUI VOCÊ ENCONTRA
        </motion.h2>
        <div className="flex justify-center gap-16">
          {[
            { label: "Corte", icon: "/images/maquina-de-cortar-cabelo.png" },
            { label: "Barba", icon: "/images/tesouras.png" },
            { label: "Corte + Barba", icon: "/images/navalha.png" },
          ].map((service, index) => (
            <motion.div
              className="text-center"
              key={index}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: index * 0.5 }}
              variants={textAnimation}
            >
              <img
                src={service.icon}
                alt={service.label}
                className="w-20 mx-auto mb-4"
              />
              <p className="text-xl font-medium">{service.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={handleRedirect}
          className="mt-8 bg-orange-500 px-6 py-3 text-lg font-semibold rounded hover:bg-orange-600 transition"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          variants={textAnimation}
        >
          QUERO AGENDAR HORÁRIO
        </motion.button>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8 relative">
        {/* Quebradinha invertida na parte superior */}
        <div
          className="absolute top-0 w-full h-16 bg-black"
          style={{
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
          }}
        ></div>

        {/* Logo no canto direito */}
        <img
          src="images/homem.png" // Atualize para o caminho correto do logo
          alt="Logo BMB Barbearia"
          className="w-28 absolute top-4 right-4"
        />

        <div className="relative text-center">
          <h3 className="text-2xl font-bold mb-2">BARBEARIA MEUCHEFF</h3>

          {/* Endereço */}
          <p className="text-lg mb-4">
            Estamos localizados em:
            <br />
            Rua ..., Nº – Alto do Sol Nascente, Olinda – PE, 02046-010
          </p>

          {/* Telefone */}
          <p className="text-lg font-semibold flex justify-center items-center gap-2">
            <img
              src="/images/ce22435d-c760-4f4c-8305-e48d2402f2a0.jpg" // Atualize para o caminho correto do ícone de telefone
              alt="Telefone"
              className="w-6"
            />
            (11) 98996-8178
          </p>

          {/* Redes sociais */}
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/55aa2de9-15f8-4a91-ab85-34a9528f47c7.jpg" // Atualize para o caminho correto do ícone do Facebook
                alt="Facebook"
                className="w-8"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/instagram.png" // Atualize para o caminho correto do ícone do Instagram
                alt="Instagram"
                className="w-8"
              />
            </a>
          </div>

          {/* Direitos reservados */}
          <p className="mt-4 text-sm">
            2025 MeuCheff Barbearia © — Todos os Direitos Reservados
          </p>
          <p className="text-sm">Desenvolvido por Tary Nascimento</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
