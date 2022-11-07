import { useEffect, useState } from 'react'
import Post from '../post/Post'
import HttpService from '../../services/httpService'
import './posts.css'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import HorizontalPost from '../post/HorizontalPost'
import Banner from '../Banner/Banner'
export default function Posts() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    HttpService.get('/v1//blogs')
      .then((res) => {
        setPosts(JSON.parse(res.data.body).message)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 4 }}
        columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
        sx={{
          height: '100%',
        }}
      >
        {posts &&
          posts.map((post, index) => {
            if (index == 2) {
              return (
                <Grid item xs={6}>
                  <HorizontalPost />
                </Grid>
              )
            } else if (index == 3) {
              return (
                <Grid item xs={12}>
                  <Banner />
                </Grid>
              )
            }

            return (
              <Grid item xs={3}>
                <Post post={post} />
              </Grid>
            )
          })}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top: 3vh;

  width: 100%;
`
