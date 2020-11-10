import { useEffect } from 'react'

export const setTheme = (setThemeDark) => {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const themeLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches

    if (theme === 'light' || !theme && themeLight) {
      changeThemeLight(setThemeDark);
    }
  }, [])
}

export const toggleTheme = (setThemeDark) => {
  const theme = localStorage.getItem('theme');

  if (!theme || theme === 'dark') {
    changeThemeLight(setThemeDark);
  } else if (theme === 'light') {
    changeThemeDark(setThemeDark)
  }
}

const changeThemeLight = (setThemeDark) => {
  localStorage.setItem('theme', 'light')
  setThemeDark(false)
  document.body.classList.add('theme_light');
}

const changeThemeDark = (setThemeDark) => {
  localStorage.setItem('theme', 'dark')
  setThemeDark(true)
  document.body.classList.remove('theme_light');
}
