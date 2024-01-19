import Container from "@/app/ui/Container";
import UserCircle from "@/app/ui/UserCircle";
import React from "react";
import FollowBtn from "../Home/FollowBtn";

const People = () => {
  return (
    <Container className='p-4 flex flex-col gap-5 sticky top-20'>
      <div>
        <h3 className="font-semibold text-gray-600 text-sm">People you may know</h3>
        <p className="text-xs text-gray-500">from your industry</p>
      </div>
      <div className="flex justify-between items-center">
        <UserCircle name='Ahmed Elemam' title='Frontend Developer' img='https://th.bing.com/th/id/OIP.l0_vGW8Ac31fO32a_o2hJgHaHa?rs=1&pid=ImgDetMain' />
        <FollowBtn connect={true}/>
      </div>
      <div className="flex justify-between items-center">
        <UserCircle name='David jack' title='Flutter Developer' img='https://sdpretail.com/wp-content/uploads/2020/08/DavidMalin-8577Crop2-1369x2048.jpg' />
        <FollowBtn connect={true}/>
      </div>
      <div className="flex justify-between items-center">
        <UserCircle name='mark zuckerberg' title='Meta founder' img='https://th.bing.com/th/id/OIP.6uHXXB9BMFJFi9LViiuFGgHaFj?rs=1&pid=ImgDetMain' />
        <FollowBtn connect={true}/>
      </div>
      <div className="flex justify-between items-center">
        <UserCircle name='Bill Gates' title='Microsoft founder' img='https://th.bing.com/th/id/R.81c9320106f3c17c506814960bf6bc9d?rik=vBui7Kxfpqxm5Q&pid=ImgRaw&r=0' />
        <FollowBtn connect={true}/>
      </div>
    </Container>
  );
};

export default People;
