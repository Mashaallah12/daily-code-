import React, { createContext } from 'react'
export let GlobalData = createContext();
const Parents001 = ({children}) => {
    let Data = "hello everyone";

  return (
    
      <GlobalData.Provider value={Data}>
        <h1>Parents</h1>
        {children}
      </GlobalData.Provider>
    
  )
}

export default Parents001
