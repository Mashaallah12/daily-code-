import React from 'react'
import Context1 from './Context1'
import Child2 from './Child2'

const Parents1 = () => {
  return (
    <div>
        parents
      <Context1>
        <Child2 />
      </Context1>
    </div>
  )
}

export default Parents1
