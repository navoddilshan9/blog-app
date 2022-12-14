import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'
const HorizontalPost = ({ post }) => {
  return (
    <div>
      <div class='blog-card'>
        <div class='meta'>
          <div
            class='photo'
            style={{
              backgroundImage: `url(${post?.image})`,
            }}
          ></div>
          <ul class='details'>
            <li class='author'>
              <a href='#'>John Doe</a>
            </li>
            <li class='date'>Aug. 24, 2015</li>
            <li class='tags'>
              <ul>
                <li>
                  <a href='#'>Learn</a>
                </li>
                <li>
                  <a href='#'>Code</a>
                </li>
                <li>
                  <a href='#'>HTML</a>
                </li>
                <li>
                  <a href='#'>CSS</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class='description'>
          <h1>{post?.title}</h1>
          <h2>Opening a door to the future</h2>
          <p> {post?.story}</p>
          <p class='read-more'>
            <Link to={`/post/${post._id}`}>Read More</Link>
          </p>
        </div>
      </div>
      {/* <div class='blog-card alt'>
        <div class='meta'>
          <div
            class='photo'
            style={{
              backgroundImage:
                'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)',
            }}
          ></div>
          <ul class='details'>
            <li class='author'>
              <a href='#'>Jane Doe</a>
            </li>
            <li class='date'>July. 15, 2015</li>
            <li class='tags'>
              <ul>
                <li>
                  <a href='#'>Learn</a>
                </li>
                <li>
                  <a href='#'>Code</a>
                </li>
                <li>
                  <a href='#'>JavaScript</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class='description'>
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p class='read-more'>
            <a href='#'>Read More</a>
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default HorizontalPost
