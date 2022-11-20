import React, { useContext, useEffect } from 'react'
import { globalContext } from '../../context'

const Child1 = (props) => {
  const parentContext = useContext(globalContext)

  useEffect(() => {
    parentContext.setCbs(props.childId, () => {
      const num =
        Math.floor(
          (crypto.getRandomValues(new Uint8Array(1)) / (0xff + 1)) * 2
        ) + 1

      parentContext.setStatus(num)

      parentContext.setAfterQuery({ name: num })
    })
  }, [props.childId])

  console.log('Child1渲染了')

  return (
    <div>
      <div>Child1</div>
      <div>{parentContext.status}</div>
      <div>{parentContext.afterQuery.name}</div>
    </div>
  )
}

export default Child1
