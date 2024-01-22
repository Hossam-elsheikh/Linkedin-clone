import React from 'react'
import { Avatar } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
const AddComment = ({publisherId,type}) => {
  return (
    <div className="p-2 flex gap-2 w-full relative px-3">
        <Avatar
          src={publisherId?.profileCover}
          sx={{
            width: "40px",
            height: "40px",
          }}
        />
        <input
          type="text"
          className="py-2 px-3 border w-full border-gray-400 placeholder:text-sm rounded-full"
          placeholder={type}
        />
        <div className='absolute flex gap-2 right-6 text-gray-500 top-4'>
          <SentimentSatisfiedAltIcon className='cursor-pointer hover:text-gray-700'/>
          <PhotoCameraBackIcon className='cursor-pointer hover:text-gray-700'/>
        </div>
      </div>
  )
}

export default AddComment