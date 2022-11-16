import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Userpool from '../../utills/Userpool'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { useNavigate } from 'react-router-dom'
import { Alert } from '@mui/material'
import HttpService from '../../services/httpService'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function SignUp() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [open, setOpen] = useState(false)
  const handleSubmit = (event) => {
    setOpen(true)
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const attributeList = []
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: data.get('email'),
      })
    )
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'custom:firstName',
        Value: data.get('firstName'),
      })
    )
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'custom:lastName',
        Value: data.get('lastName'),
      })
    )
    if (data.get('password') === data.get('repassword')) {
      Userpool.signUp(
        data.get('firstName'),
        data.get('password'),
        attributeList,
        null,
        (err, response) => {
          if (err) {
            console.log(err)
            setError(err)
          }
          console.log(response?.user?.pool.clientId)
          if (response?.user?.pool.clientId) {
            HttpService.post('/v1/users/create', {
              firstName: data.get('firstName'),
              lastName: data.get('lastName'),
              email: data.get('email'),
              clientId: response?.user?.pool.clientId,
            }).then(() => {
              setOpen(false)
              navigate('/login')
            })
          }
        }
      )
    } else {
      setOpen(false)
      setError('password are missed match')
    }
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {error ? (
              <>
                {' '}
                <Alert severity='info' sx={{ marginBottom: '10px' }}>
                  Registration failed !
                </Alert>
              </>
            ) : (
              <></>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='repassword'
                  label='Re-Password'
                  type='password'
                  id='repassword'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link
                  to={'/login'}
                  style={{ textDecoration: 'none' }}
                  variant='body2'
                >
                  Already have an account?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </ThemeProvider>
  )
}
