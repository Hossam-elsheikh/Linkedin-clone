import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const ShowAll = ({title}) => {
  return (
    <div className="text-center flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 hover:bg-gray-200 py-3 cursor-pointer">
        <p>Show all {title}</p>
        <ArrowRightAltIcon className='text-2xl'/>
      </div>
  )
}

export default ShowAll