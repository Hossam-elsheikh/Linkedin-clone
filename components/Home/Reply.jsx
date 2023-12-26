import React from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import love from "../../public/love-circle.svg";
import like from "../../public/like-circle.svg";
import support from "../../public/support-circle.svg"; 
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@mui/material";
const Reply = () => {
  return (
    <div className="flex gap-1 w-full p-2">
      <Avatar
        src="https://i.postimg.cc/523pcPrD/new.png"
        sx={{
          width: "40px",
          height: "40px",
        }}
      />
      <div className="flex flex-col w-full">
        <div className="p-2 bg-stone-100 rounded rounded-tl-none w-full flex flex-col">
          {/* Commenter Details */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Link href='#' className="font-semibold text-sm text-gray-600 hover:text-blue-600">
                Hossam Mohamed
              </Link>
              <p className="text-xs text-gray-500">MERN stack web developer</p>
            </div>
            <div className="flex text-gray-600 items-center gap-1 text-xs">
              <p>1d</p>
              <MoreHorizIcon />
            </div>
          </div>
          {/* Comment Content */}
          <div>
            <p className="text-sm pt-2" dir='rtl'>
              انا وانت واحد يبولصوحاب :D

            </p>
          </div>
        </div>
        {/* Comment Actions */}
        <div className="flex gap-1 text-xs text-gray-500 p-1 items-center">
          <p className="hover:bg-gray-200 cursor-pointer rounded px-1">Like</p>
          <p>-</p>
          <div className="flex items-center ">
            <div className="flex pl-1">
              <Image
                width="17"
                height="17"
                src={like}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
              <Image
                width="17"
                height="17"
                src={love}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
              <Image
                width="17"
                height="17"
                src={support}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
            </div>
            <p className=" cursor-pointer rounded px-1">120</p>
          </div>
          <p className=" cursor-pointer rounded ">|</p>
          <p className="hover:bg-gray-200 cursor-pointer rounded px-1">Reply</p>
          
        </div>
      </div>
    </div>
  )
}

export default Reply