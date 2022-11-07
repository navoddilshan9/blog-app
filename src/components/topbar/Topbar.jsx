import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './topbar.css'

export default function Topbar() {
  const user = true
  const navigate = useNavigate()
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
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          {user && (
            <li
              className='topListItem'
              // onClick={() => {
              //   na
              // }}
            >
              LOGOUT
            </li>
          )}
          {user && (
            <li className='topListItem'>
              <a href='https://testblogpost.auth.us-east-1.amazoncognito.com/login?client_id=5fjb4vc3520nruvibi96n2tc84&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/'>
                LOGIN
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link className='link' to='/settings'>
            <img
              className='topImg'
              src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  )
}
