import React, { useContext } from 'react'
import { GlobalData } from './Context'

const Child1 = () => {
   let val = useContext(GlobalData);
   console.log(val);
   
  return (
    <div>
      <h3>child</h3>
    </div>
  )
}

export default Child1
