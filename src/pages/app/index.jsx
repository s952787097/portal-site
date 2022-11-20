import './index.css'
import { Provider } from '../../context'
import Parent from '../parent'
import usseStatusManagement from '../../hooks/status-management'
import hi from './testFunc'

const App = () => {
  const statusManagement = usseStatusManagement()

  console.log('App渲染了')

  hi()

  return (
    <Provider value={{ ...statusManagement }}>
      <div className="App">
        <div>{statusManagement.afterQuery.name}</div>
        <div>{statusManagement.status}</div>
        <Parent />
      </div>
    </Provider>
  )
}

export default App
