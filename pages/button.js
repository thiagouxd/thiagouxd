import React from 'react'
import style from '../styles/button.module.scss'

const button = (props) => {
  return (
    <button {...classes(props)} onClick={props.click}>
      {props.children}
    </button>
  )
}

const classes = (props) => {
  return {
    className: [
      style.button,
      props.light && style.button_light,
      props.transparent && style.button_transparent,
      props.letterSpacing && style.button_letterSpacing
    ].join(' ')
  }
}

export default button