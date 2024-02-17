import React, { useEffect } from 'react'
import PostForm from './PostForm'
import Post from './Post'
import useGetPosts from "../useHooks/useGetPosts";
import { useDispatch, useSelector } from 'react-redux';
import { postsAction } from '@/redux/slice/postsSlice';

const Posts = () => {

  // const posts = useGetPosts();

  const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts.posts)
  const error = useSelector((state) => state.posts.error)
  
  useEffect(() => {
    dispatch(postsAction())
  }, [])

  if (error) {
    return <div>error{error}</div>
  }

  return (
    <div className='flex flex-col gap-2 '>

      <PostForm />
      {
        posts.map(post =>
          <Post key={post._id} post={post} myPost={() => post.publisherId === Cookies.get('userId')} />
        )
      }

    </div>
  )
}

export default Posts