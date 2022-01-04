import React, { useState } from "react";
import Paragraphy from "../components/paragraphy/paragraphy";
import Title from "../components/title/title";
import style from "./style.module.scss";

const Sobre = () => {
  return (
    <>
      <section id="sobre" className={style.container}>
        <Title md>SOBRE</Title>

        <a href="https://www.linkedin.com/in/thiagouxd/" target="_blank">
          Linkedin: @thiagouxd
        </a>

        <Paragraphy lg>
          Tenho 5 anos de experiência no mercado de TI. <br />
          Meu principal foco é atender o usuário da forma mais simples possível
          e dar a melhor experiência para ele.
        </Paragraphy>

        <Paragraphy lg>
          Trabalhei 3 anos maio na Digix focado em ferramentas governamentais,
          principalmente com o{" "}
          <a target="_blank" href="https://papelzero.sed.ms.gov.br">
            papelzero.sed.ms.gov.br
          </a>{" "}
          e o Design System{" "}
          <a target="_blank" href="https://ui.digix.com.br">
            ui.digix.com.br.
          </a>{" "}
          <br />
        </Paragraphy>

        <Paragraphy lg>
          Hoje, estou há 1 ano trabalhando no GrupoSBF alocado no time que cuida
          do Marketplace da Centauro (O GrupoSBF é responsável pela operação da
          Nike no Brasil e donos da Centauro).
        </Paragraphy>

        <Paragraphy>
          Alguns trabalhos que fiz o design e desenvolvimento:
          <br />
          <a target="_blank" href="https://dralucielecristofari.com.br">
            dralucielecristofari.com.br
          </a>
          <br />
          <a target="_blank" href="https://drabrendaueti.com.br">
            drabrendaueti.com.br
          </a>
          <br />
          <a target="_blank" href="https://todescent.com">
            todescent.com/
          </a>
        </Paragraphy>
      </section>
    </>
  );
};

export default Sobre;
