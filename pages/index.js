import Header from './components/header/header'
import SectionInitial from './home/home'
import Projetos from './projetos/projetos'
import React from 'react'
import Skills from './skills/skills'
import Curriculo from './curriculo/curriculo'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <>
      <Header />
      <SectionInitial />
      <Projetos />
      <Skills />
      <Curriculo />
      <Footer />
    </>
  )
}
