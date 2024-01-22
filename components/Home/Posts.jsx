import React from 'react'
import PostForm from './PostForm'
import Post from './Post'

const Posts = () => {

  return (
    <div className='flex flex-col gap-2 '>

      <PostForm />

      <Post/>

    </div>
  )
}

export default Posts