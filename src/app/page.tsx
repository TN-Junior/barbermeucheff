import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import Services from '../components/Services/Services';
import "../styles/_app";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Barbearia MeuCheff</title>
        <meta name="description" content="Homepage da Barbearia MeuCheff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <Services />

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Barbearia Estilo. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default Home;
