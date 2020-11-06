import Header from './header'
import SectionInitial from './home'
import Projetos from './projetos'
import React from 'react'

export default function Home() {
  console.log(isDark)
  return (
    <>
      <Header />
      <SectionInitial />
      <Projetos />
    </>
  )
}
