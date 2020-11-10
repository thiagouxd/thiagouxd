import Header from './components/header/header'
import SectionInitial from './home/home'
import Projetos from './projetos/projetos'
import React from 'react'
import { ThemeStorage } from './components/theme/themeContext'
import Skills from './skills/skills'

export default function Home() {
  return (
    <>
      <ThemeStorage>
        <Header />
      </ThemeStorage>
      <SectionInitial />
      <Projetos />
      <Skills />
    </>
  )
}
