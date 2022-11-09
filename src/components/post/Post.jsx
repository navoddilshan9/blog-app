// import { Link } from 'react-router-dom'
import './post.css'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = ({ post }) => {
  const navigate = useNavigate()
  return (
    <div
      className='posts'
      onClick={() => {
        navigate(`/post/${post._id}`)
      }}
    >
      <article class='card'>
        <header class='card__thumb'>
          <a href='#'>
            <img src='https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb' />
          </a>
        </header>
        <div class='card__date'>
          <span class='card__date__day'>23</span>
          <span class='card__date__month'>Mai</span>
        </div>
        <div class='card__body'>
          <div class='card__category'>
            <a href='#'>Category</a>
          </div>
          <div class='card__title'>
            <a href='#'>{post?.title}</a>
          </div>
          <div class='card__subtitle'>Donec posuere vulputate</div>
          <p class='card__description'>{post?.story}</p>
        </div>
        <footer class='card__footer'>
          <span class='icon icon--time'>6 min</span>
          <span class='icon icon--comment'>
            <a href='#'>2 comments</a>
          </span>
        </footer>
      </article>
    </div>
  )
}

export default Post
