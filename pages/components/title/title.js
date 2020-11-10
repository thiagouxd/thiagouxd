import React from 'react'
import style from './title.module.scss'

const title = (props) => {
  return (
    verifyTitle(props)
  )
}

const verifyTitle = (props) => {
  return (
    props.md ? <h2 {...classes(props)}>
      {props.children}
    </h2 >
      : props.lg ? <h1 {...classes(props)}>
        {props.children}
      </h1> : props.sm && <h3 {...classes(props)}>{props.children}</h3>
  )
}

const classes = (props) => {
  return {
    className: [style.title,
    props.md ? style.title_md : props.lg ? style.title_lg : props.sm && style.title_sm].join(' '),
  }
}

export default title;