import React, { useState } from 'react'
import '../global.css'
import UseCallbackChild from './UseCallbackChild'
const UseCallback = () => {
    let [count, setCount] = useState(0)
    function onclickhandler(){
        setCount(count+1)
    }
  return (
    <div className='xyz'>
      <h4>Count:{count}</h4>
      <br />
      <button onClick={onclickhandler}>Increment</button>
      <br />
     
     <UseCallbackChild btndbao = {"clicked me"} onclickhandler = {onclickhandler} />
     
    </div>
  )
}

export default UseCallback
