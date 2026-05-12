import React, {createContext, useState } from 'react'
export const ThemeContext = createContext()


export default function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(false)

  return (
    <ThemeContext value={{darkTheme, setDarkTheme}}>

        {children}

    </ThemeContext>
  )
}
