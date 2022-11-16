import axios from 'axios'
import React from 'react'
import Dropzone from 'react-dropzone'
import './styles.css'
import HttpService from '../../services/httpService'
const DropZone = ({ setImage }) => {
  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      let currentFile = acceptedFiles[0]
      console.log(currentFile)
      let formData = new FormData()
      formData.append('image', currentFile)
      console.log(formData)
      HttpService.post('/images', formData)
        .then((res) => {
          setImage(res.data.imagePath)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p style={{ color: '#0F100C' }}>
            Drag the image, or click to select image
          </p>
        </div>
      )}
    </Dropzone>
  )
}

export default DropZone
