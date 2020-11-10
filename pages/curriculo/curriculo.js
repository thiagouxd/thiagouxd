import React from 'react'
import Title from '../components/title/title'
import style from './curriculo.module.scss'

const Curriculo = () => {
  return (
    <section className={style.curriculo}>
      <Title md>CURRÍCULO</Title>
      <p>
        Thiago Menezes de Olivera, 27 anos <br />
        UI Designer, UX Design, Front-ender e Publicitário.
      </p>

      <Title>FORMAÇÃO</Title>
      <p>
        Bacharel em Publicidade e Propaganda, 2015 - Uniderp
      </p>

      <Title>EXPERIÊNCIA PROFISSIONAL</Title>
      <p>
        Digix - UX/UI Designer <br /> 2017 - atualmente
      </p>
      <p>
        Designer Gráfico - BTB Agência <br /> 2015 - 2017
      </p>
      <p>
        Designer Gráfico - Criatrix  <br /> 2013 - 2015
      </p>
    </section>
  )
}

export default Curriculo;