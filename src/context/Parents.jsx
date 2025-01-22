import React from 'react'
import Context from './Context'
import Child1 from './Child1'

const Parents = () => {
  return (
    <div>
      <h1>parents</h1>
      <Context>
        <Child1 />
      </Context>
    </div>
  )
}

export default Parents
