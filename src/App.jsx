import { BrowserRouter as Router } from 'react-router-dom'
import Topbar from './components/topbar/Topbar'

import { Context } from './utills/AuthContext'
import Status from './utills/Status'
function App() {
  return (
    <Context>
      <div style={{ width: '70%', margin: 'auto' }}>
        <Router>
          <Topbar />
          <Status />
        </Router>
      </div>
    </Context>
  )
}

export default App
