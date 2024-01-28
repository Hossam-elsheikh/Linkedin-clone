import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import syncLogo from '../../public/sync-logo.svg'
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
        <div className='flex px-3 items-center gap-3'>
          <Image height='20' src={syncLogo} alt="Linkdin-logo" />
        <p className='text-xs text-gray-700'>Sync Corporation © 2023</p>
        </div>
    </div>
  )
}

export default Footer