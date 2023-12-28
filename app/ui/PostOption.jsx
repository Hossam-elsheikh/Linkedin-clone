import React from 'react'
import { Tooltip } from 'react-tooltip'

const PostOption = ({Icon,tooltip}) => {
  return (
    <div className='p-3 rounded-full cursor-pointer bg-stone-100 hover:shadow-slate-300 hover:shadow-md ' data-tooltip-id={tooltip} data-tooltip-content={tooltip}>
        <Icon className='text-3xl text-gray-500'/>
        <Tooltip id={tooltip} />
    </div>
  )
}

export default PostOption