// pages/index.tsx
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Services from "../components/Services/Services";

import withAuth from "../utils/withAuth"; // Importa o HOC

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </>
  );
}

export default withAuth(Home); // Aplica o HOC
