import { useEffect, useState } from 'react'
import Post from '../post/Post'
import HttpService from '../../services/httpService'
import './posts.css'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import HorizontalPost from '../post/HorizontalPost'
import Banner from '../Banner/Banner'
import Skeleton from '@mui/material/Skeleton'
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
        {posts ? (
          posts.map((post, index) => {
            if (index == 7 || index == 8) {
              return (
                <Grid item xs={6}>
                  <HorizontalPost post={post} />
                </Grid>
              )
            } else if (index == 5) {
              return (
                <Grid item xs={6}>
                  <Banner />
                </Grid>
              )
            }

            return (
              <Grid item xs={3}>
                <Post post={post} />
              </Grid>
            )
          })
        ) : (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              return (
                <Grid item xs={3}>
                  <Skeleton
                    variant='rounded'
                    width={'100%'}
                    height={150}
                    sx={{ marginBottom: '10px' }}
                  />
                  <Skeleton
                    variant='rectangular'
                    width={'90%'}
                    sx={{ marginBottom: '10px' }}
                  />
                  <Skeleton
                    variant='rectangular'
                    width={'90%'}
                    sx={{ marginBottom: '10px' }}
                  />
                  <Skeleton
                    variant='rectangular'
                    width={'90%'}
                    sx={{ marginBottom: '10px' }}
                  />
                </Grid>
              )
            })}
          </>
        )}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top: 3vh;

  width: 100%;
`
