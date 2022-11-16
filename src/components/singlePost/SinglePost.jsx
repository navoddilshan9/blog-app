import { Alert, TextareaAutosize, TextField } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { AuthContext } from '../../utills/AuthContext'
import HttpService from '../../services/httpService'
import './singlePost.css'
import ReactTimeAgo from 'react-time-ago'
import moment from 'moment'
export default function SinglePost() {
  let { id } = useParams()
  const { getSession } = useContext(AuthContext)
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [edit, setEdit] = useState(false)
  const [writer, setWriter] = useState(null)
  useEffect(() => {
    getPost()
    getSession().then((session) => {
      setWriter(session?.accessToken.payload.client_id)
      console.log(session?.accessToken.payload.client_id)
    })
  }, [])

  const getPost = () => {
    setOpen(true)
    HttpService.post('/v1/blogs/findbyid', {
      _id: id,
    })
      .then((res) => {
        setPost(JSON.parse(res.data.body).message)
        setEdit(false)
        setOpen(false)
      })
      .catch((err) => {
        console.log(err)
        setOpen(false)
      })
  }

  const updatePost = () => {
    setOpen(true)
    HttpService.put('/v1/blogs/update', {
      _id: id,
      title: post.title,
      story: post.story,
    })
      .then((res) => {
        console.log(res)
        getPost()
        setOpen(false)
      })
      .catch((err) => {
        console.log(err)
        setOpen(false)
      })
  }

  const deletePost = (id) => {
    setOpen(true)
    console.log(id)
    HttpService.post('/v1/blogs/delete', {
      _id: id,
    })
      .then((res) => {
        console.log(res)
        setOpen(false)
        navigate('/')
      })
      .catch((err) => {
        setOpen(false)
        console.log(err)
      })
  }
  const handleChange = (prop) => (event) => {
    setPost({ ...post, [prop]: event.target.value })
  }

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post ? (
          <>
            <img className='singlePostImg' src={post?.image} alt='' />
            <h1 className='singlePostTitle'>
              {edit ? (
                <>
                  <TextField
                    id='standard-basic'
                    variant='standard'
                    value={post.title}
                    onChange={handleChange('title')}
                  />
                </>
              ) : (
                post.title
              )}
              {writer == post?.writer ? (
                <>
                  <div className='singlePostEdit'>
                    <i
                      className='singlePostIcon far fa-edit'
                      onClick={() => {
                        setEdit(true)
                      }}
                    ></i>
                    <i
                      className='singlePostIcon far fa-trash-alt'
                      onClick={() => {
                        deletePost(post._id)
                      }}
                    ></i>
                  </div>
                </>
              ) : (
                <></>
              )}
            </h1>
            <div className='singlePostInfo'>
              <span>
                {/* <b className='singlePostAuthor'>
                  <Link className='link' to='/posts?username=Safak'>
                    Safak
                  </Link>
                </b> */}
              </span>
              <span>{moment(post?.createdAt).fromNow()}</span>
            </div>
            <p className='singlePostDesc'>
              {edit ? (
                <>
                  <TextareaAutosize
                    aria-label='minimum height'
                    minRows={50}
                    placeholder='Tell your story'
                    style={{ minWidth: '100%' }}
                    value={post.story}
                    onChange={handleChange('story')}
                  />
                </>
              ) : (
                post.story
              )}
            </p>
          </>
        ) : (
          <>
            <Alert severity='info'>Please be patient!</Alert>{' '}
          </>
        )}
      </div>

      {edit ? (
        <>
          <Grid
            container
            justifyContent='space-between'
            sx={{ marginLeft: '20px', marginRight: '30px', width: '100%' }}
          >
            <Grid item>
              <Button
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  getPost()
                }}
              >
                Discard changes
              </Button>
            </Grid>
            <Grid item>
              <Button
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  updatePost()
                }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  )
}
