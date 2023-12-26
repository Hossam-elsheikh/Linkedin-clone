import Container from '@/app/ui/Container'
import React from 'react'

const Modal = () => {
  return (
    <div  className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-40'>
        <div className='opacity-60 bg-gray-800 w-full h-full absolute top-0'></div>
        <div className='bg-white rounded shadow-sm p-4 opacity-100 z-50'>
            <h3>trial</h3>
        </div>
    </div>
  )
}

export default Modal