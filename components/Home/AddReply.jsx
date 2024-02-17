import React, { useState } from 'react'
import { Avatar } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import HandleAddReply from '../useHooks/useReply'
import useFetchUser from '../useHooks/useFetchUser';

const AddReply = ({ postId, commentId }) => {

    const loggedUser = useFetchUser()

    const defaultReply = {
        reply: '',
        image:''
    }
    const [addReply, setAddReply] = useState(defaultReply)

    const handleInputChange = (event) => {
        setAddReply({...addReply,reply:event.target.value})
    }

    const handlePostReply = () => {
        HandleAddReply(postId, commentId, addReply );
        setAddReply(defaultReply);
    };

    return (
        <div className="p-2 flex gap-2 w-full relative px-3">
            <Avatar
                src={loggedUser.user?.profilePicture}
                sx={{
                    width: "40px",
                    height: "40px",
                }}
            />
            <input
                type="text"
                className="py-2 px-3 border w-full border-gray-400 placeholder:text-sm rounded-full"
                onChange={handleInputChange}
                value={addReply.reply}
            />
            <div className='absolute flex gap-2 right-6 text-gray-500 top-4'>
                <SentimentSatisfiedAltIcon className='cursor-pointer hover:text-gray-700' />
                <PhotoCameraBackIcon className='cursor-pointer hover:text-gray-700' />
            </div>
            <p className='cursor-pointer hover:text-gray-700' onClick={handlePostReply}>post</p>
        </div>
    )
}

export default AddReply