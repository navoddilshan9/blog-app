import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthContext } from '../../utills/AuthContext'
import { Alert } from '@mui/material'
function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit'>FIT19</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const { authenticate } = useContext(AuthContext)
  const handleSubmit = async (event) => {
    event.preventDefault()
    authenticate(email, password)
      .then((res) => {
        navigate('/')
        window.location.reload()
      })
      .catch((err) => {
        setError(err)
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#0F100C' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {error ? (
              <>
                <Alert severity='info'>Invalid user name or passowrd</Alert>
              </>
            ) : (
              <></>
            )}

            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value)
                setError()
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => {
                setPassword(e.target.value)
                setError()
              }}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2, bgcolor: '#0F100C' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  to={'/forgetpassword'}
                  style={{ textDecoration: 'none', color: '#0F100C' }}
                  variant='body2'
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to={'/signup'}
                  style={{ textDecoration: 'none', color: '#0F100C' }}
                  variant='body2'
                >
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
