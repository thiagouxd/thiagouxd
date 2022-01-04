import Header from "./components/header/header";
import SectionInitial from "./home/home";
import Projetos from "./projetos/projetos";
import React from "react";
import Skills from "./skills";
import Curriculo from "./curriculo/curriculo";
import Footer from "./components/footer/footer";
import Sobre from "./sobre";

export default function Home() {
  return (
    <div className="theme">
      <Header />
      <SectionInitial />
      {/* <Projetos /> */}
      <Sobre />
      <Skills />
      <Curriculo />
      <Footer />
    </div>
  );
}
