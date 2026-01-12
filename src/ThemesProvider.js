import {React, createContext, useState} from 'react'

export const ThemesContext = createContext();

export const ThemesProvider = ({children}) => {

    const [theme, setTheme] = useState("light");

  return (
    <ThemesContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemesContext.Provider>
  )
}

export default ThemesProvider
