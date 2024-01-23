import Container from "@/app/ui/Container";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import loveCircle from "../../public/love-circle.svg";
import likeCircle from "../../public/like-circle.svg";
import supportCircle from "../../public/support-circle.svg";
import like from "../../public/like.svg";
import love from "../../public/love.svg";
import support from "../../public/support.svg";
import insightful from "../../public/insightful.svg";
import inquire from "../../public/inquire.svg";
import clap from "../../public/clap.svg";
import ShareIcon from "@mui/icons-material/Share";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Comment from "./Comment";
import AddComment from "./AddComment";
import UserCircle from "@/app/ui/UserCircle";
import axios from "axios";
import useGetPosts from "../useHooks/useGetPosts";

const Post = () => {
  const posts = useGetPosts();
  const [interactions, setInteractions] = useState('hidden')
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
    <>
      {posts.map((post) => (
        <Container className="px-0 py-2 " key={post._id}>
          <div className="flex justify-between px-3 py-2">
            <UserCircle
              name={post.publisherId.name}
              title={post.publisherId.jobTitle}
              isPost={true}
              img={post.publisherId.profilePhoto}
            />

            <div className="flex gap-2">
              <MoreHorizIcon className="hover:bg-gray-200 rounded-full text-gray-500 cursor-pointer" />
              <ClearIcon className="hover:bg-gray-200 rounded-full text-gray-500 cursor-pointer" />
            </div>
          </div>
          {/* Post Content */}
          <div className="">
            <p className="text-sm p-3" dir="rtl">
              {post.postContent.text}

              {/* ياريت كله يشاركنا صورته في الجيم يشبب عاوزين نبوظ لينكد ان */}
            </p>
            <div>
              {post.postContent.photo.length > 0 ? (
                <img
                  className="p-0"
                  // src={post.postContent.photo}
                />
              ) : null}
            </div>
          </div>
          {/* Post Interactions */}
          <div className="p-2 px-3 flex justify-between items center">
            <div className="flex items-center gap-1">
              <div className="flex">
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
                  src={loveCircle}
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
              <p className="text-xs text-gray-600 font-light">
                {post.reactions?.length}
                {/* Essam Konafa and 1.233 others */}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-light">
                {/* 23 comments - 14 reposts */}
                {post.comment?.length}
                comments,
                {post.repost?.length}
                reposts
              </p>
            </div>
          </div>
          <hr />
          {/* Post Actions */}
          <div className="flex p-1 pt-2 text-sm justify-between px-3 relative">
            <div
              className={`absolute bg-white rounded-lg custom_animation bottom-12 left-1 px-3 py-2  ${interactions} flex items-center justify-center gap-2`}
              onMouseEnter={()=> {showInteractions()}}
              onMouseLeave={()=> {hideInteractions()}}
            >
              <Image
                  width='28'
                  src={like}
                  alt="like"
                  
                />
              <Image
                  width='28'
                  src={clap}
                  alt="clap"
                  
                />
              <Image
                  width='28'
                  src={support}
                  alt="support"
                  
                />
              <Image
                  width='28'
                  src={love}
                  alt="love"
                  
                />
              <Image
                  width='28'
                  src={inquire}
                  alt="inquire"
                  
                />
              <Image
                  width='28'
                  src={insightful}
                  alt="insightful"
                  
                />
            </div>
            <div
              className="flex items-center text-gray-500 p-2 rounded cursor-pointer gap-1 hover:bg-gray-200"
              onMouseOver={() => showInteractions()}
              onMouseOut={()=> hideInteractions()}
            >
              <ThumbUpOffAltIcon
                className="text-xxl"
                style={{ transform: "scaleX(-1)" }}
              />
              <p>Like</p>
            </div>
            <div className="flex items-center text-gray-500 p-2 rounded cursor-pointer gap-1 hover:bg-gray-200">
              <ChatBubbleOutlineIcon
                className="text-xxl"
                style={{ transform: "scaleX(-1)" }}
              />
              <p>Comment</p>
            </div>
            <div className="flex items-center text-gray-500 p-2 rounded cursor-pointer gap-1 hover:bg-gray-200">
              <ShareIcon className="text-xxl" />
              <p>Repost</p>
            </div>
            <div className="flex items-center text-gray-500 p-2 rounded cursor-pointer gap-1 hover:bg-gray-200">
              <ReplyIcon
                className="text-xxl"
                style={{ transform: "scaleX(-1)" }}
              />
              <p>Send</p>
            </div>
          </div>
          {/* Add Comment */}
          <AddComment publisherId={posts.publisherId} type="Add a Comment..." />
          {/* Comments Filter */}
          <div className="flex gap-.5 px-3 font-semibold text-gray-500 text-xs cursor-pointer items-center p-2">
            <p>Most Relevant</p>
            <ArrowDropDownIcon />
          </div>
          {/* Comments */}
          <Comment />
          <p className="hover:bg-gray-200 cursor-pointer rounded py-1 mx-1 px-2 text-xs text-gray-500 font-semibold w-fit">
            Load More Comments
          </p>
        </Container>
      ))}
    </>
  );
};

export default Post;
