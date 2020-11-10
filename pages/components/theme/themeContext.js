import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export const ThemeStorage = ({ children }) => {
  const [themeDark, setThemeDark] = useState(true)
  return <ThemeContext.Provider value={{ themeDark, setThemeDark }}>{children}</ThemeContext.Provider>
}