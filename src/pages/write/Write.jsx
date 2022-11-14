import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropZone from '../../components/DropZone/DropZone'
import HttpService from '../../services/httpService'
import './write.css'

export default function Write() {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState(null)
  const [story, setStory] = useState(null)
  const [tags, setTags] = useState(null)

  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault()
    console.log({
      title: title,
      story: story,
      image: image,
      tags: tags,
    })
    if (title && story && image && tags) {
      HttpService.post('/v1//blogs/create', {
        title: title,
        story: story,
        image: image,
        tags: tags,
      })
        .then((res) => {
          console.log('res')
          navigate('/')
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
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
    </div>
  )
}
