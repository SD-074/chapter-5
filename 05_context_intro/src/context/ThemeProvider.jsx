import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({children}) {
    const [isDark, setisDark] = useState(false)


  return (
    <ThemeContext value={{isDark, setisDark}}>
        {children} 

    </ThemeContext>
  )
}
