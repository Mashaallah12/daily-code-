import React, { useContext } from 'react'
import { GlobalData } from './Parents001'

const Child001 = () => {
    let val = useContext(GlobalData)
    console.log(val);
    
  return (
    <div>
        <h1>child</h1>
    </div>
  )
}

export default Child001
