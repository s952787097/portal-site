import React, { useContext } from 'react'
import { globalContext } from '../../context'
import Child1 from '../child1'
import Child2 from '../child2'

const Parent = () => {
  const parentContext = useContext(globalContext)

  console.log('Parent渲染了')

  return (
    <div>
      <div>Parent</div>
      <div>{parentContext.status}</div>
      <div>{parentContext.afterQuery.name}</div>
      <Child2 childId={parentContext.status} />
      <Child1 childId={1} />
      <Child1 childId={2} />
    </div>
  )
}

export default Parent
