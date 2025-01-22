import React, {createContext } from 'react'
export let GlobalData = createContext();
const Context = ({children}) => {
    // console.log(x)
    let users = [
        {
            username:"Arqam Shams",
            profile:"civil engineer",
            employeId: 1,
            salary: 10000,
            address: "xyz"
        },
        {
            username:"Rashad iqbal khan",
            profile:"civil engineer",
            employeId: 2,
            salary: 10000,
            address: "xbez"
        },
        {
            username:"Kaif khan",
            profile:"civil engineer",
            employeId: 3,
            salary: 10000,
            address: "xbjkz"
        },
    ];
  return (
    <div>
      <GlobalData.Provider value={users}>
        {children}
      </GlobalData.Provider>
    </div>
  )
}

export default Context
