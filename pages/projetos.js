import React from 'react'
import Title from './title'
import Button from './button'
import Dialog from './dialog'
import style from '../styles/projetos.module.scss'

export default function Projetos() {
  return (
    <section className={style.projetos}>
      <Title md>PROJETOS</Title>
      <div className={style.projetos__containerButtons}>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
        <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
      </div>

      <Dialog title="Dialogo" footer={footerDialog()} />
    </section>
  )
}

let footerDialog = () => {
  return (
    <>
      <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
      <Button light click={() => alert('teste')}>FLUXO - PAPEL ZERO</Button>
    </>
  )
}