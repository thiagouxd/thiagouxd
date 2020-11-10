import React from 'react'
import Title from '../components/title/title'
import style from './curriculo.module.scss'
import Paragraphy from '../components/paragraphy/paragraphy'

const Curriculo = () => {
  return (
    <section id="curriculo" className={style.curriculo}>
      <Title md>CURRÍCULO</Title>

      <Paragraphy lg>
        <strong>Thiago Menezes de Olivera, 27 anos</strong>
      </Paragraphy>

      <Paragraphy>
        UI Designer, UX Design, Front-ender e Publicitário.
      </Paragraphy>

      <Title sm>FORMAÇÃO</Title>

      <Paragraphy>
        Bacharel em Publicidade e Propaganda, 2015 - Uniderp
      </Paragraphy>

      <Title sm>EXPERIÊNCIA PROFISSIONAL</Title>

      <Paragraphy>
        Digix - UX/UI Designer <br /> 2017 - atualmente
      </Paragraphy>

      <Paragraphy>
        Designer Gráfico - BTB Agência <br /> 2015 - 2017
      </Paragraphy>

      <Paragraphy>
        Designer Gráfico - Criatrix  <br /> 2013 - 2015
      </Paragraphy>
    </section>
  )
}

export default Curriculo;