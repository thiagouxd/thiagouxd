import React, { useState } from 'react'
import Title from '../components/title/title'
import Button from '../components/button/button'
import style from './projetos.module.scss'
import Dialog from '../components/dialog/dialog'
import data from '../../no-components/projetosData'
import Tag from '../components/tag/tag'
import Paragraphy from '../components/paragraphy/paragraphy'

const dialog = new Dialog();

const Projetos = () => {
  const [titleDialog, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <>
      <section id="projetos" className={style.projetos}>
        <Title md>PROJETOS</Title>
        <div className={style.projetos__containerButtons}>
          {data.map((item, index) => {
            return (
              <Button key={index} light click={() => setDialog(item)}>
                {item.title} <br />
                {tagsProjeto(item)}
              </Button>
            )
          })}
        </div>
      </section>

      <Dialog
        title={titleDialog}
        id="projeto"
        content={content}
        footer={footherDialog()}
        size="medium"
      />
    </>
  )

  function setDialog(item) {
    setTitle(item.title)
    setContent(contentDialog(item));
    dialog.show("projeto")
  }

  function contentDialog(item) {
    return (
      <>
        {tagsProjeto(item)}
        {item.content.map((description, index) => (<div key={index}>
          <Title sm>{description.title}</Title>
          <Paragraphy>{description.text}</Paragraphy>
        </div>))}
      </>
    )
  }

  function tagsProjeto(item) {
    return item.tags.map((tag, index) => {
      return <Tag key={index} className="tag">{tag}</Tag>
    })

  }
}

const footherDialog = () => {
  return (
    <Button light click={() => dialog.close()} >Fecha aí pra gente, patrão.</Button>
  )
}

export default Projetos;