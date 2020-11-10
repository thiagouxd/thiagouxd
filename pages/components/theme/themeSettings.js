import { useEffect } from 'react'

export const setTheme = (themeDark) => {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const themeLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches

    if (theme === 'light' || !theme && themeLight) {
      changeThemeLight(themeDark)
    }
  }, [])
}

export const toggleTheme = (themeDark) => {
  const theme = localStorage.getItem('theme');

  if (!theme || theme === 'dark') {
    changeThemeLight(themeDark);
  } else if (theme === 'light') {
    changeThemeDark(themeDark)
  }
}

const changeThemeLight = (themeDark) => {
  themeDark.setThemeDark(false);
  localStorage.setItem('theme', 'light')
  document.body.classList.add('theme_light');
}

const changeThemeDark = (themeDark) => {
  themeDark.setThemeDark(true);
  localStorage.setItem('theme', 'dark')
  document.body.classList.remove('theme_light');
}
