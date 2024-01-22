import Container from '@/app/ui/Container'
import React from 'react'
import { Avatar } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import  { ModalContext } from '@/context/ModalContext';
import { useContext } from 'react';
import useFetchUser from '../useHooks/useFetchUser';

function PostForm() {
  
  const {showModal, setModal}=useContext(ModalContext)
  const userDetails = useFetchUser()

  return (
    <Container className='p-4'>
        <div className='p-2 flex gap-3 items-center'>

        <Avatar src={userDetails.user?.profilePicture}
          sx={{
              width: "50px",
              height: "50px",
              
            }}/>
          <button className='border text-sm border-gray-300 p-3 rounded-full text-left text-gray-600 w-full hover:bg-gray-300' onClick={()=> {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setModal(true)}}>Start a post</button>
            </div>
            <div className='py-1 flex justify-around'>
                <div className='flex items-center gap-1 hover:bg-gray-200 cursor-pointer p-2 rounded'>
                    <ImageIcon className='text-blue-500'/>
                    <p className='text-gray-500 text-sm font-semibold '>Media</p>
                </div>
                <div className='flex items-center gap-1 hover:bg-gray-200 cursor-pointer p-2 rounded'>
                    <CalendarMonthIcon className='text-yellow-800 '/>
                    <p className='text-gray-500 text-sm font-semibold '>Event</p>
                </div>
                <div className='flex items-center gap-1 hover:bg-gray-200 cursor-pointer p-2 rounded'>
                    <ArticleIcon className='text-orange-500'/>
                    <p className='text-gray-500 text-sm font-semibold '>Write article</p>
                </div>
            </div>
    </Container>
  )
}

export default PostForm