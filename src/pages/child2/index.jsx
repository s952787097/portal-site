import React, { useContext, useEffect } from 'react'
import { globalContext } from '../../context'

const Child2 = (props) => {
  const parentContext = useContext(globalContext)

  const changeStatus = () => {
    parentContext.getCbs(props.childId)()
  }

  console.log('Child2渲染了')

  return (
    <div>
      <div>Child2</div>
      <div>{parentContext.status}</div>
      <button onClick={changeStatus}>获取随机值</button>
    </div>
  )
}

export default Child2
