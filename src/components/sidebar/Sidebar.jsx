import { Button, IconButton, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import './sidebar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <Button
          variant='contained'
          color='success'
          sx={{ bgcolor: '#0F100C' }}
          fullWidth
        >
          Get Premium
        </Button>
        <TextField
          fullWidth
          id='standard-bare'
          variant='outlined'
          sx={{ marginTop: '50px' }}
          defaultValue='How can we help'
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            ),
          }}
        />
        <p>
          <i>
            {' '}
            <b>
              {' '}
              “The more that you read, the more things you will know. The more
              that you learn, the more places you’ll go.”
            </b>
          </i>
          Dr. Seuss
        </p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
        </div>
      </div>
    </div>
  )
}
