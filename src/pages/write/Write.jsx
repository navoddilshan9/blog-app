import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DropZone from '../../components/DropZone/DropZone'
import HttpService from '../../services/httpService'
import { AuthContext } from '../../utills/AuthContext'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import './write.css'

export default function Write() {
  const { getSession } = useContext(AuthContext)
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState(null)
  const [story, setStory] = useState(null)
  const [tags, setTags] = useState(null)
  const [writer, setWriter] = useState(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    getSession().then((session) => {
      setWriter(session?.accessToken.payload.client_id)
      console.log(session?.accessToken.payload.client_id)
    })
  }, [])
  const submit = (event) => {
    setOpen(true)
    event.preventDefault()
    if (title && story && image && tags) {
      HttpService.post('/v1/blogs/create', {
        title: title,
        story: story,
        image: image,
        tags: tags,
        writer: writer,
      })
        .then((res) => {
          console.log('res')
          setOpen(false)
          navigate('/')
        })
        .catch((err) => {
          setOpen(false)
          console.log(err)
        })
    } else {
      setOpen(false)
      alert('refresh and try again')
    }
  }

  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        alt=''
      />
      {!image ? <DropZone setImage={setImage} /> : <></>}

      <form className='writeForm' onSubmit={submit}>
        <div className='writeFormGroup'>
          <input
            className='writeInput'
            placeholder='Title'
            type='text'
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className='writeFormGroup'>
          <input
            className='writeInput'
            placeholder='Tags'
            type='text'
            autoFocus={true}
            style={{ fontSize: '20px' }}
            onChange={(e) => {
              setTags(e.target.value)
            }}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            className='writeInput writeText'
            placeholder='Tell your story...'
            type='text'
            autoFocus={true}
            onChange={(e) => {
              setStory(e.target.value)
            }}
          />
        </div>
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
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
