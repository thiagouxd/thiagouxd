import React from 'react'
import style from './paragraphy.module.scss'

const Paragraphy = (props) => (
  <p {...classes(props)}>
    {props.children}
  </p>
)

const classes = (props) => {
  return {
    className: [
      style.paragraphy,
      size(props)
    ].join(' ')
  }
}

const size = (props) => {
  return (
    props.sm && style.paragraphy_sm ||
    props.md && style.paragraphy_md ||
    props.lg && style.paragraphy_lg
  )
}

export default Paragraphy;
