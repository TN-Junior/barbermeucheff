import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Services from "../components/Services/Services";

import "../styles/_app";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </>
  );
}
