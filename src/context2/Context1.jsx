import React from 'react'
import { createContext } from "react";
export let GlobalData = createContext();
const Context1 = ({children}) => {
    let usersinfo = [
        {
            name:"Arqam shams",
            id:1,
        },
        {
            name:"kaif",
            id:2,
            
        }
    ]
  return (
    <div>
      <GlobalData.Provider value={usersinfo}>
        {children}
      </GlobalData.Provider>
    </div>
  )
}

export default Context1
