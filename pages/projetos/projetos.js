import React, { useState } from 'react'
import Title from '../components/title/title'
import Button from '../components/button/button'
import style from './projetos.module.scss'
import Dialog from '../components/dialog/dialog'
import data from './data'
import Tag from '../components/tag/tag'

const dialog = new Dialog();

const Projetos = () => {
  const [titleDialog, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <>
      <section className={style.projetos}>
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
        id="projetos"
        content={content}
        footer={footherDialog()}
        size="medium"
      />
    </>
  )

  function setDialog(item) {
    setTitle(item.title)
    setContent(contentDialog(item));
    dialog.show("projetos")
  }

  function contentDialog(item) {
    return (
      <>
        {tagsProjeto(item)}
        {item.content.map((description, index) => (<div key={index}>
          <h4 className="title">{description.title}</h4>
          <p className="paragraphy">{description.text}</p>
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