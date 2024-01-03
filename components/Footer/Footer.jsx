import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex gap-3 p-4 items-center justify-center flex-col sticky top-16'>
        <div className='flex gap-x-4 gap-y-2 flex-wrap justify-center p-6'>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>About</Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>Accessibility</Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>Help Center</Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>Privacy & Terms</Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>Ad Choices</Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>Advertising</Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>Business Services </Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>Get the LinkedIn app</Link>
            <Link href='#' className='text-xs text-gray-500 hover:text-blue-800 hover:underline'>More</Link>
        </div>
        <div className='flex px-3 item-center gap-1'>
          <img style={{height:'15px'}} src="https://i.postimg.cc/nLqmXLC3/Linkedin-logo-png.png" alt="Linkdin-logo" />
        <p className='text-xs text-gray-700'>LinkedIn Corporation © 2023</p>
        </div>
    </div>
  )
}

export default Footer