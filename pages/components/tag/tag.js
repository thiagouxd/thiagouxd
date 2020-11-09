import React from 'react'
import style from './tag.module.scss'

const Tag = (props) => {
  return <span className={style.tag}>{props.children}</span>
}

export default Tag;