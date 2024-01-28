import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import likeCircle from "../../public/like-circle.svg";
import supportCircle from "../../public/support-circle.svg"; 
import Image from "next/image";
import ideaCircle from "../../public/idea-circle.svg";
import like from "../../public/like.svg";
import support from "../../public/support.svg";
import insightful from "../../public/idea.svg";
import inquire from "../../public/inquire.svg";
import clap from "../../public/clap.svg";
import { Avatar } from "@mui/material";
import Reply from "./Reply";
import Link from "next/link";
const Comment = () => {
  const [interactions, setInteractions] = useState('hidden')
  const reactions = [
    {src:like,alt:'like'},
    {src:clap,alt:'clap'},
    {src:support,alt:'support'},
    {src:insightful,alt:'insightful'},
    {src:inquire,alt:'inquire'},
  ]
  const ReactionDiv =(reaction)=>{
    return(
      <Image
                  width='55'
                  src={reaction.src}
                  alt={reaction.alt}
                  key={reaction.alt}
                  className="py-2 px-2"
                />
    )
  }
  function showInteractions() {
    setTimeout(()=>{

      setInteractions('block')
    },300)
  }
  function hideInteractions() {
    setTimeout(()=>{
    setInteractions('hidden')
  },300)

  }
  return (
    <div className="flex gap-1 w-full p-2 p-3">
      <Avatar
        src="https://i.postimg.cc/NFsfnj23/image.jpg"
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
                Essam Konafa
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
            <p className="text-sm pt-2" dir="rtl">
              بس دي صورتي انا يستا :(
            </p>  
          </div>
        </div>
        {/* Comment Actions */}
        <div className="flex gap-1 text-xs text-gray-500 p-1 items-center relative">
        <div
              className={`absolute bg-white rounded-lg custom_animation bottom-5 left-1  ${interactions} flex items-center justify-center `}
              onMouseEnter={()=> {showInteractions()}}
              onMouseLeave={()=> {hideInteractions()}}
            >
              {reactions.map((reaction)=>ReactionDiv(reaction))}
            </div>
          <p className="hover:bg-gray-200 cursor-pointer rounded px-1" onMouseOver={() => showInteractions()}
              onMouseOut={()=> hideInteractions()}>Like</p>
          <p>-</p>
          <div className="flex items-center ">
            <div className="flex pl-1">
              <Image
                width="17"
                height="17"
                src={likeCircle}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
              <Image
                width="17"
                height="17"
                src={ideaCircle}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
              <Image
                width="17"
                height="17"
                src={supportCircle}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
            </div>
            <p className=" cursor-pointer rounded px-1">120</p>
          </div>
          <p className=" cursor-pointer rounded ">|</p>
          <p className="hover:bg-gray-200 cursor-pointer rounded px-1">Reply</p>
          <p>-</p>
          <p className=" cursor-pointer rounded px-1">1 Reply</p>
        </div>
      <Reply/>
      </div>
    </div>
  );
};

export default Comment;
