import Topbar from './components/topbar/Topbar'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aboutus from './pages/aboutus/AboutUs'
import Contactus from './pages/contactus/ContactUs'
import ForgetPassword from './pages/forgetpassword/ForgetPasssword'
import SignUp from './pages/signup/SignUp'

function App() {
  const currentUser = false
  return (
    <div style={{ width: '70%', margin: 'auto' }}>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route path='/posts' element={<Homepage />}></Route>

          <Route
            path='/login'
            element={currentUser ? <Homepage /> : <Login />}
          ></Route>
          <Route path='/post/:id' element={<Single />}></Route>
          <Route
            path='/write'
            element={currentUser ? <Write /> : <Login />}
          ></Route>
          <Route
            path='/settings'
            element={currentUser ? <Settings /> : <Login />}
          ></Route>
          <Route path='/aboutus' element={<Aboutus />}></Route>
          <Route path='/cotactus' element={<Contactus />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/forgetpassword' element={<ForgetPassword />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
