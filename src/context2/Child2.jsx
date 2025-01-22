import React, { useContext } from 'react'
import { GlobalData } from './Context1'

const Child2 = () => {
   let data = useContext(GlobalData)
   console.log(data);
   
  return (
    <div>
      child2
    </div>
  )
}

export default Child2
