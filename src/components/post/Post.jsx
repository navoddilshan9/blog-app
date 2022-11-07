import { Link } from 'react-router-dom'
import './post.css'

export default function Post({ post }) {
  return (
    <div className='post'>
      <img className='postImg' src={post?.image} alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>
            <Link className='link' to={'/posts'}>
              Music
            </Link>
          </span>
          <span className='postCat'>
            <Link className='link' to='/posts?cat=Music'>
              Life
            </Link>
          </span>
        </div>
        <span className='postTitle'>
          <Link to={`/post/${post._id}`} className='link'>
            {post?.title}
          </Link>
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>{post?.story}</p>
    </div>
  )
}

// import React from 'react'

// const Post = () => {
//   return (
//     <div className='post'>
//       <div class='blog-card spring-fever'>
//         <div class='title-content'>
//           <h3>SPRING FEVER</h3>
//           <hr />
//           <div class='intro'>
//             Yllamco laboris nisi ut aliquip ex ea commodo.
//           </div>
//         </div>
//         <div class='card-info'>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim.
//         </div>
//         <div class='utility-info'>
//           <ul class='utility-list'>
//             <li class='comments'>12</li>
//             <li class='date'>03.12.2015</li>
//           </ul>
//         </div>

//         <div class='gradient-overlay'></div>
//         <div class='color-overlay'></div>
//       </div>
//     </div>
//   )
// }

// export default Post
