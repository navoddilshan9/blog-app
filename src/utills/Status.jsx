import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import Homepage from '../pages/homepage/Homepage'
import Login from '../pages/login/Login'
import Settings from '../pages/settings/Settings'
import Single from '../pages/single/Single'
import Write from '../pages/write/Write'
import Aboutus from '../pages/aboutus/AboutUs'
import Contactus from '../pages/contactus/ContactUs'
import ForgetPassword from '../pages/forgetpassword/ForgetPasssword'
import SignUp from '../pages/signup/SignUp'

const Status = () => {
  const [status, setStatus] = useState()

  const { getSession } = useContext(AuthContext)

  useEffect(() => {
    getSession().then((session) => {
      console.log('Session' + session)
      setStatus(true)
    })
  }, [])
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route path='/posts' element={<Homepage />}></Route>
        <Route path='/post/:id' element={<Single />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/cotactus' element={<Contactus />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword />}></Route>

        <Route
          path='/login'
          element={status ? <Homepage /> : <Login />}
        ></Route>
        <Route path='/write' element={status ? <Write /> : <Login />}></Route>
        <Route
          path='/settings'
          element={status ? <Settings /> : <Login />}
        ></Route>
      </Routes>
    </div>
  )
}

export default Status
