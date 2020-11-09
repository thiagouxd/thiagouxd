import { useEffect } from 'react'

export const setTheme = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const themeLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches

    if (theme === 'light' || !theme && themeLight) {
      changeThemeLight()
    }
  })
}

export const toggleTheme = () => {
  const theme = localStorage.getItem('theme');

  !theme || theme === 'dark' ?
    changeThemeLight()
    : theme === 'light' ? changeThemeDark() : ''
}

export const changeThemeLight = () => {
  localStorage.setItem('theme', 'light')
  document.body.classList.add('theme_light');
}

export const changeThemeDark = () => {
  localStorage.setItem('theme', 'dark')
  document.body.classList.remove('theme_light');
}
