import React from 'react'
import style from './home.module.scss'
import Button from '../components/button/button'
import Icon from 'feather-icons-react'

export default function SectionInitial() {
  return (
    <>
      <section className={style.home}>
        <div className={style.home__container}>
          <h1 className={style.home__title}>THIAGO<span className={style.home__title_gray}>!</span></h1>
          <p className={style.home__description}>UX/UI DESIGNER</p>
        </div>
        <Button click={() => goToSection('projetos')} link='projetos' letterSpacing transparent style="margin: 0 auto">
          <Icon icon='chevrons-down' />
          <br />
          SCROLL
        </Button>
      </section>
    </>
  )
}

const goToSection = (link) => {
  document.location.hash = link;
}