import React, { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    let [count, setCount] = useState(0)
    let [input, setInput] = useState(0)

    function expensiveTask(num){
        console.log("clicked");
        
        for(let i = 0; i<1000000000; i++){}
        return num*2

    }
    let doubleclicked =  useMemo(()=> expensiveTask(input), [input]);

  
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>
        increment
      </button>
      <div>
        Count:{count}
      </div>
      <div>
        double:{doubleclicked}
      </div>
      <input 
         type="number" 
         placeholder='enter number'
         onChange={(e)=>setInput(e.target.value)}
      />
    </div>
  )
}

export default UseMemo
