import Header from './header'
import SectionInitial from './home'
import Projetos from './projetos'
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
