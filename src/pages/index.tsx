// pages/index.tsx
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
//import Header from "../components/header/Header";
import withAuth from "../utils/withAuth"; // Importa o HOC

function Home() {
  return (
    <>
      {/*<Header /> */}
      <HeroSection />

    </>
  );
}

export default withAuth(Home); 
