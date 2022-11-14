import { useState } from 'react'
import DropZone from '../../components/DropZone/DropZone'
import HttpService from '../../services/httpService'
import './write.css'

export default function Write() {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState(null)
  const [story, setStory] = useState(null)

  const submit = (event) => {
    event.preventDefault()
    console.log({
      title: title,
      description: story,
    })
    HttpService.post('/v1//blogs/create', {
      title: title,
      description: story,
    })
      .then((res) => {
        console.log('res')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        alt=''
      />
      <DropZone setImage={setImage} />
      <form className='writeForm' onSubmit={submit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input id='fileInput' type='file' style={{ display: 'none' }} />
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
