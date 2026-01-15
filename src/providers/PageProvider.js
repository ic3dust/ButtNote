import { React, createContext, useContext,useState } from 'react'

export const PageContext = createContext();
  
export const PageProvider = ({children}) => {

  const [page, setPage] = useState("home");

  return (
    <div>
      <PageContext.Provider value={{ page, setPage }}>
        {children}
      </PageContext.Provider>
    </div>
  )
}

export const usePage = () => useContext(PageContext);

