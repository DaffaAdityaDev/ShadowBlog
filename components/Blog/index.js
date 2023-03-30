import React from 'react'
import Post from '../Post'

function Blog({ posts }) {

  return (
    posts.map((post, index) => {
        return (
          <Post key={index} post={post}/>
        )
      })
  )
}

export default Blog