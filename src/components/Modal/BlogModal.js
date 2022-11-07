import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'

import { useState } from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'
import { TextareaAutosize } from '@mui/material'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BlogModal({ open, setOpen, handleOpen, handleClose }) {
  const [uploadedImage, setImage] = useState(null)
  const [step, setStep] = useState(1)
  const [product, setProduct] = useState(null)
  const [productName, setProductName] = useState(null)
  const [price, setPrice] = useState(null)
  const [description, setDescription] = useState(null)

  const navigate = useNavigate()

  const createProduct = async (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <>
            <Box component='form' onSubmit={createProduct}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Update the post
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label='Post Title'
                  id='fullWidth'
                  sx={{ mt: 2 }}
                  required={true}
                  name='product'
                  onChange={(event) => {
                    setProductName(event.target.value)
                  }}
                  value={productName}
                />

                <TextField
                  fullWidth
                  label='Price'
                  id='fullWidth'
                  type='number'
                  sx={{ mt: 2, mb: 2 }}
                  required={true}
                  name='price'
                  onChange={(event) => {
                    setPrice(event.target.value)
                  }}
                  value={price}
                />

                {/* <TextField
                    fullWidth
                    label='Description'
                    id='fullWidth'
                    sx={{ mt: 2 }}
                    rows={4}
                    required={true}
                    name='description'
                    onChange={(event) => {
                      setDescription(event.target.value)
                    }}
                    value={description}
                  /> */}
                <TextareaAutosize
                  fullWidth
                  aria-label='empty textarea'
                  placeholder='Description'
                  style={{ width: '100%' }}
                  id='fullWidth'
                  rows={4}
                  minRows={3}
                  required={true}
                  name='description'
                  onChange={(event) => {
                    setDescription(event.target.value)
                  }}
                  value={description}
                />
              </Typography>
              <BtnContainer>
                <Button
                  variant='contained'
                  style={{ marginRight: '10px', marginTop: '10px' }}
                  type='submit'
                  hidden={step != 1}
                >
                  Create
                </Button>
                <Button
                  variant='contained'
                  style={{ marginRight: '10px', marginTop: '10px' }}
                  onClick={() => {
                    setOpen(false)
                    setStep(1)
                  }}
                >
                  Cancel
                </Button>
              </BtnContainer>
            </Box>
          </>
        </Box>
      </Modal>
    </div>
  )
}

const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
const Error = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  text-align: left;
  margin-top: 0.25rem;
`
