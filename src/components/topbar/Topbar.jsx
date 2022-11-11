import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../utills/AuthContext'
import './topbar.css'

export default function Topbar() {
  const [status, setStatus] = useState()
  const { getSession, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    getSession().then((session) => {
      console.log('Session' + session)
      setStatus(true)
    })
  }, [])
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            {' '}
            <Link className='link' to='/aboutus'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/cotactus'>
              CONTACT
            </Link>
          </li>

          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {status ? (
          <>
            <Link className='link' to='/settings'>
              <img
                className='topImg'
                src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt=''
              />
            </Link>
            <Link
              className='link'
              to='/'
              onClick={() => {
                logout()
              }}
            >
              LOGOUT
            </Link>
          </>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            {/* <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li> */}
          </ul>
        )}
      </div>
    </div>
  )
}
