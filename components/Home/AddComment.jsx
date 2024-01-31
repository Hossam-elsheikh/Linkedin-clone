import React, { useState } from 'react'
import { Avatar } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import useComment from '../useHooks/useComment';
const AddComment = ({publisherId,type,postId}) => {
  const [comment,setComment]=useState('')
  const {handleComment} = useComment()

  const addComment = (key)=>{
    if(key==='Enter'){
      handleComment(postId,comment)
      setComment('')
    }
  }
  return (
    <div className="p-2 flex gap-2 w-full relative px-3">
        <Avatar
          src={publisherId?.profilePicture}
          sx={{
            width: "40px",
            height: "40px",
          }}
        />
        <input
          type="text"
          className="py-2 px-3 border w-full border-gray-400 placeholder:text-sm rounded-full"
          placeholder={type}
          value={comment}
          onChange={(e)=>{setComment(e.target.value)}}
          onKeyUp={(e)=> addComment(e.key)}
        />
        <div className='absolute flex gap-2 right-6 text-gray-500 top-4'>
          <SentimentSatisfiedAltIcon className='cursor-pointer hover:text-gray-700'/>
          <PhotoCameraBackIcon className='cursor-pointer hover:text-gray-700'/>
        </div>
      </div>
  )
}

export default AddComment