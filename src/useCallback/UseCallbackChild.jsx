import React from 'react'
import { useMemo } from 'react';
import '../global.css'
const UseCallbackChild = React.memo(
    (prop) => {
        console.log("dekhte hai execute hota hai kya");
        
      return (
        <div>
          <button onClick={onclickhandler}>{prop.btndbao}</button>
        </div>
      )
    }
)

export default UseCallbackChild

//react.memo-> wrap -> component -> component re-rendernahi hoga  jab props change honge nahi toh re-render nhi hoga

//if you are sending a function , then react, memo wont be able to save  you from rerender