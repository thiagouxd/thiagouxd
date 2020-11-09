import Header from './components/header/header'
import SectionInitial from './home/home'
import Projetos from './projetos/projetos'
import React from 'react'
import { setTheme } from './themeSettings'

export default function Home() {
  setTheme();
  return (
    <>
      <Header />
      <SectionInitial />
      <Projetos />
    </>
  )
}
