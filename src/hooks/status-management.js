import { useState } from 'react'

const usseStatusManagement = () => {
  const [status, setStatus] = useState(1)
  const [cbs, setCb] = useState(new Map())
  const getCbs = (key) => cbs.get(key)
  const setCbs = (key, func) => setCb(cbs.set(key, func))

  const [afterQuery, setAfterQuery] = useState({
    name: 1,
  })

  return {
    status,
    setStatus,
    getCbs,
    setCbs,
    afterQuery,
    setAfterQuery,
  }
}

export default usseStatusManagement
