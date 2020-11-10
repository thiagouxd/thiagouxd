import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import React from 'react'
import style from './paragraphy.module.scss'

const Paragraphy = (props) => (
  <p className={style.paragraphy}>
    {props.children}
  </p>
)

export default Paragraphy;
