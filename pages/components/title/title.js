import React from 'react'
import style from './title.module.scss'

const title = (props) => {
  return (
    verifyTitle(props)
  )
}

const verifyTitle = (props) => {
  return (
    props.sm ? <h3 className={[style.title, style.title_sm].join(' ')} >{props.children}</h3> :
      props.md ? <h2 className={[style.title, style.title_md].join(' ')}>{props.children}</h2> :
        props.lg ? <h1 className={[style.title, style.title_lg].join(' ')}>{props.children}</h1> : ''
  )
}

export default title;