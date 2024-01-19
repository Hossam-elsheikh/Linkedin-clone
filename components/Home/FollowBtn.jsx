import React from 'react'
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const FollowBtn = ({connect}) => {
  return (
    <div className='flex items-center text-blue-800 gap-2 text-xs font-semibold border border-blue-800 py-1 px-2 rounded-full hover:bg-blue-800 hover:text-white cursor-pointer h-fit'>
        {connect 
        ? 
        <>
        <PersonAddIcon style={{fontSize:'1.1rem'}}/>
        <p>Connect</p>
        </>
        :
        <>
        <PersonAddIcon style={{fontSize:'1.1rem'}}/>
        <p>Follow</p>
        </>
        }
    </div>
  )
}

export default FollowBtn