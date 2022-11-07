import { useEffect, useState } from 'react'
import Post from '../post/Post'
import HttpService from '../../services/httpService'
import './posts.css'

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
    <div className='posts'>
      {posts &&
        posts?.map((post) => {
          return <Post post={post} />
        })}
    </div>
  )
}
