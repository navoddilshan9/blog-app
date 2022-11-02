import React from 'react'
import './custom.css'
const PostCard = () => {
  return (
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
          <a href='#'>Vivamus elementum semper nisivi troscup</a>
        </div>
        <div class='card__subtitle'>Donec posuere vulputate</div>
        <p class='card__description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          sapiente doloremque recusandae, modi dolore velit, illum itaque minus
          inventore, omnis et nisi rem facere. Labore sapiente doloremque
          recusandae, modi dolore velit, illum itaque minus inventore, omnis et
          nisi rem facere.
        </p>
      </div>
      <footer class='card__footer'>
        <span class='icon icon--time'>6 min</span>
        <span class='icon icon--comment'>
          <a href='#'>2 comments</a>
        </span>
      </footer>
    </article>
  )
}

export default PostCard
