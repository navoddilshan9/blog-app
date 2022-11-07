import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HttpService from '../../services/httpService'
import './singlePost.css'

export default function SinglePost() {
  const [post, setPost] = useState(null)
  let { id } = useParams()
  useEffect(() => {
    console.log(id)
    HttpService.post('/v1/blogs/findbyid', {
      _id: id,
    })
      .then((res) => {
        console.log(res)
        setPost(JSON.parse(res.data.body).message)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post ? (
          <>
            {/* <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> */}
            <h1 className='singlePostTitle'>
              {post.title}
              <div className='singlePostEdit'>
                <i className='singlePostIcon far fa-edit'></i>
                <i className='singlePostIcon far fa-trash-alt'></i>
              </div>
            </h1>
            <div className='singlePostInfo'>
              <span>
                Author:
                <b className='singlePostAuthor'>
                  <Link className='link' to='/posts?username=Safak'>
                    Safak
                  </Link>
                </b>
              </span>
              <span>1 day ago</span>
            </div>
            <p className='singlePostDesc'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
              ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
              voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
              eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
              beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Iste error quibusdam ipsa quis
              quidem doloribus eos, dolore ea iusto impedit! Voluptatum
              necessitatibus eum beatae, adipisci voluptas a odit modi eos!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
              ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
              voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
              eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
              beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
              amet consectetur.
            </p>
          </>
        ) : (
          <>Not Found</>
        )}
      </div>
    </div>
  )
}
