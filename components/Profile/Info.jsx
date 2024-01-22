import Container from '@/app/ui/Container';
import React from 'react';
import { Avatar } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import useFetchUser from "../useHooks/useFetchUser";

const Info = () => {
  const userDetails = useFetchUser();
  // console.log(userDetails.user?.name);

  return (
    <Container className='relative'>
    
          {userDetails.user?.profileCover && (
            <img className='object-cover h-48 rounded-t-md w-full' src={userDetails.user?.profileCover} alt="" />
          )}

          <div className='relative'>
            <Avatar
              src={userDetails.user?.profilePicture}
              sx={{
                width: "160px",
                height: "155px",
                marginTop: "-6rem",
                marginLeft: '2rem',
                border: "4px solid white",
              }}
            />
            <PhotoCameraIcon className='absolute top-4 right-4 text-blue-500 text-3xl cursor-pointer hover:text-blue-600 p-1.5 shadow bg-white rounded-full' />
            <EditIcon className='absolute top-4 right-14 text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer' />
          </div>

          <div className='px-7 py-3 flex flex-col'>
            <div className='flex justify-between'>
              <h2 className='text-gray-700 font-semibold text-xl'>{userDetails.user?.name}</h2>
              <EditIcon className='text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer' />
            </div>
            <p className='text-gray-600'>{userDetails.user?.jobTitle}</p>
            <p className='text-gray-400 text-sm'>
              {userDetails.user?.location}
              <Link href='#' className='text-blue-600 font-semibold hover:underline'>Contact info</Link>
            </p>
            <Link href='#' className='text-blue-600 font-semibold hover:underline text-sm pt-1'>{userDetails.user?.connections}</Link>

            <div className='flex gap-2 py-3'>
              <button className='bg-blue-600 text-white rounded-full py-1 font-semibold px-4 hover:bg-blue-800'>Open to</button>
              <button className='outline outline-1 outline-blue-600 text-gray-600 rounded-full py-1 font-semibold px-4 hover:outline-blue-800 hover:outline-2 hover:bg-blue-100'>Add profile section</button>
              <button className='outline outline-1 outline-gray-600 text-gray-600 rounded-full py-1 font-semibold px-4 hover:outline-gray-800 hover:outline-2 hover:bg-gray-200'>More</button>
            </div>
          </div>
        
    </Container>
  );
};

export default Info;
