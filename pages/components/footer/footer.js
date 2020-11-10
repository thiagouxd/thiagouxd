import React from 'react'
import Paragraphy from '../paragraphy/paragraphy'
import Icon from 'feather-icons-react'
import style from './footer.module.scss'

const Footer = () => (
  <footer className={style.footer}>
    <Icon icon='heart' />
    <Paragraphy>
      Feito por mim com carinho - Figma, criatividade, NextJS e Vercel - {anoAtual()}.
    </Paragraphy>
  </footer>
)

const anoAtual = () => {
  return new Date().getFullYear()
}

export default Footer;