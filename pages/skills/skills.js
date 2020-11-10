import React from 'react'
import style from './skills.module.scss'
import Title from '../components/title/title'
import data from './data'

export default function Skills() {
  return (
    <section className={style.skills}>
      <Title md>SKILLS</Title>

      <ul className={style.skills__list}>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </section>
  )
}