import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
const UserCircle = ({isPost,name,title,img,profile}) => {
  return (
    <div className="flex gap-2 items-center">
    <Avatar
      src={img}
      sx={{
        width: "40px",
        height: "40px",
      }}
    />
    <div className="flex flex-col ">
      <Link href={profile || '#'} className="font-bold text-sm text-gray-700 hover:text-blue-600">{name}</Link>
      <p className="text-xs text-gray-500">{title}</p>
      {isPost && <div className="flex items-center gap-1 text-xs text-gray-500">
        <p>5h</p>
        <PublicIcon style={{ fontSize: ".8rem" }} />
      </div>}
    </div>
  </div>
  )
}

export default UserCircle