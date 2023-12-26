import Container from '@/app/ui/Container'
import UserCircle from '@/app/ui/UserCircle'
import React from 'react'
import FollowBtn from './FollowBtn'

const Recommendations = () => {
  return (
    <Container className='flex flex-col gap-5 p-2'>
        <div className='flex items-center justify-between'>
        <UserCircle img='https://i.postimg.cc/TwyZ3MMK/image.jpg' name='Islam Mahfouz' title='Founder @Codezilla.courses'/>
        <FollowBtn />
        </div>
        <div className='flex items-center justify-between'>
        <UserCircle img='https://i.postimg.cc/9fQ6swLt/image.jpg' name='W3Schools.com' title='Company - E-Learning'/>
        <FollowBtn />
        </div>
        <div className='flex items-center justify-between'>
        <UserCircle img='https://i.postimg.cc/g0tCpc59/image.jpg' name='Google' title='Company - Computer Software'/>
        <FollowBtn />
        </div>
        <p className="hover:bg-gray-200 cursor-pointer rounded py-1 px-2 text-xs text-gray-500 font-semibold w-fit">View All Recommendations</p>

    </Container>
  )
}

export default Recommendations