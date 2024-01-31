import React from 'react'
import PostForm from './PostForm'
import Post from './Post'
import useGetPosts from "../useHooks/useGetPosts";

const Posts = () => {
  const posts = useGetPosts();

  return (
    <div className='flex flex-col gap-2 '>

      <PostForm />
{
  posts.map(post => 
    <Post key={post._id} post={post} myPost={()=>post.publisherId === Cookies.get('userId')}/>
  )
}

    </div>
  )
}

export default Posts