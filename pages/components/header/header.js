import React from "react"
import style from './header.module.scss'
import Icon from 'feather-icons-react'
import { toggleTheme } from "../theme/themeSettings"

export default function header() {
  return (
    <header className={style.header}>
      {logo()}
      <nav className={style.header__nav}>
        <a href="#projetos" className={style.header__navLink}>Projetos</a>
        <a href="#skills" className={style.header__navLink}>Skills</a>
        <a href="#curriculum" className={style.header__navLink}>Curriculum</a>
        <button onClick={() => toggleTheme()} className={style.header__navLink}>
          <Icon icon="sun" />
        </button>
      </nav>
    </header>
  )
}

const logo = () => {
  const classGray = 'var(--gray)'
  const classLight = 'var(--light)'

  return (
    <svg width="61" height="36" viewBox="0 0 61 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5753 35.7168C10.9851 35.7168 8.96769 35.0112 7.52316 33.5998C6.09522 32.1885 5.38126 30.1877 5.38126 27.5975V17.9341H10.3126V27.4481C10.3126 30.2376 11.4168 31.6323 13.6251 31.6323C15.8168 31.6323 16.9126 30.2376 16.9126 27.4481V17.9341H21.7693V27.5975C21.7693 30.1877 21.047 32.1885 19.6025 33.5998C18.1745 35.0112 16.1655 35.7168 13.5753 35.7168Z" fill={classGray} />
      <path d="M35.8751 35.3682L32.2638 29.9636L28.7022 35.3682H23.0735L29.4245 26.5515L23.3475 17.9341H28.9015L32.3883 22.9651L35.8253 17.9341H41.1551L35.0781 26.3522L41.5536 35.3682H35.8751Z" fill={classGray} />
      <path d="M42.6948 17.9341H50.9387C52.8481 17.9341 54.5417 18.2911 56.0194 19.005C57.4972 19.719 58.6429 20.7318 59.4564 22.0435C60.27 23.3552 60.6768 24.8911 60.6768 26.6511C60.6768 28.4111 60.27 29.947 59.4564 31.2587C58.6429 32.5704 57.4972 33.5832 56.0194 34.2972C54.5417 35.0112 52.8481 35.3682 50.9387 35.3682H42.6948V17.9341ZM50.7394 31.433C52.2338 31.433 53.4292 31.0096 54.3258 30.1628C55.2391 29.316 55.6957 28.1455 55.6957 26.6511C55.6957 25.1568 55.2391 23.9862 54.3258 23.1394C53.4292 22.2926 52.2338 21.8692 50.7394 21.8692H47.6262V31.433H50.7394Z" fill={classGray} />
      <path d="M5.38832 4.41021H0.0335693V0.500002H15.6495V4.41021H10.3197V17.9341H5.38832V4.41021Z" fill={classLight} />
      <path d="M33.4383 0.500002V17.9341H28.5069V11.1348H21.7824V17.9341L16.9067 17.9341V0.5L21.7824 0.500002V7.05023H28.5069V0.500002H33.4383Z" fill={classLight} />
      <path d="M36.2176 0.500017H41.1489V17.9341H36.2176V0.500017Z" fill={classLight} />
    </svg>
  )
}
