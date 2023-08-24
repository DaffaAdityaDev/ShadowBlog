import React from 'react'
import Post from '../Post'

function Blog({ posts }) {

  return (
    posts.map((post, index) => {
        // if(index >= 4) return
        return (
          <Post key={index} post={post}/>
        )
      })
  )
}

export default Blog


