import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import likeCircle from "../../public/like-circle.svg";
import supportCircle from "../../public/support-circle.svg";
import Image from "next/image";
import Cookies from 'js-cookie'
import ideaCircle from "../../public/idea-circle.svg";
import like from "../../public/like.svg";
import support from "../../public/support.svg";
import insightful from "../../public/idea.svg";
import inquire from "../../public/inquire.svg";
import clap from "../../public/clap.svg";
import { Avatar } from "@mui/material";
import Reply from "./Reply";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";
import FlagIcon from "@mui/icons-material/Flag";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Comment = ({ postId, commentInfo,myComment }) => {
  const [interactions, setInteractions] = useState("hidden");
  const [commentOptions, setCommentOptions] = useState(false); // copy this state
  const reactions = [
    { src: like, alt: "like" },
    { src: clap, alt: "clap" },
    { src: support, alt: "support" },
    { src: insightful, alt: "insightful" },
    { src: inquire, alt: "inquire" },
  ];
  const ReactionDiv = (reaction) => {
    return (
      <Image
        width="55"
        src={reaction.src}
        alt={reaction.alt}
        key={reaction.alt}
        className="py-2 px-2"
      />
    );
  };
  function showInteractions() {
    setTimeout(() => {
      setInteractions("block");
    }, 300);
  }
  function hideInteractions() {
    setTimeout(() => {
      setInteractions("hidden");
    }, 300);
  }
  document.body.addEventListener('click',()=>{setCommentOptions(false)})  // copy this line
  // copy this function
  const commentOptionsDropdownList = () => { 
    return (
      <>
        {myComment  ? (
          <div
            className={`bg-white shadow-lg border w-52  z-20 flex  flex-col absolute top-5 right-0`}
            onClick={() => setCommentOptions(false)}
          >
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <EditIcon
                fontSize="small"
                // style={{ transform: "rotate(90deg)" }}
              />
              <p>Edit</p>
            </button>
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <LinkIcon
                fontSize="small"
                style={{ transform: "rotate(90deg)" }}
              />
              <p>Copy link to post</p>
            </button>
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <DeleteIcon fontSize="small" />
              <p>Delete</p>
            </button>

          </div>
        ) : (
          <div
            className={`bg-white shadow-lg border w-52  z-20 flex  flex-col absolute top-5 right-0`}
            onClick={() => setOptions(false)}
          >
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <LinkIcon
                fontSize="small"
                style={{ transform: "rotate(90deg)" }}
              />
              <p>Copy link to post</p>
            </button>
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <FlagIcon fontSize="small" />
              <p>Report post</p>
            </button>
          </div>
        )}
      </>
    );
  };
 

  return (
    <>
      <div className="flex gap-1 w-full p-2 p-3" key={commentInfo._id}>
        <Avatar
          src={commentInfo.commenterId?.profilePicture}
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
                <Link
                  href="#"
                  className="font-semibold text-sm text-gray-600 hover:text-blue-600"
                >
                  {/* Essam Konafa */}
                  {commentInfo.commenterId?.name}
                </Link>
                <p className="text-xs text-gray-500">
                  {commentInfo.commenterId?.jobTitle}
                </p>
              </div>
              <div className="flex text-gray-600 items-center gap-1 text-xs relative">
                <p>1d</p>
                {/* copy this function in onclick event */}
                <MoreHorizIcon
                  className="hover:bg-gray-200 rounded-full cursor-pointer options"
                  onClick={(e) => {setCommentOptions(!commentOptions)
                    e.stopPropagation()}}  
                />
                    {/* copy this function in onclick event */}

                {commentOptions && commentOptionsDropdownList()}
              </div>
            </div>
            {/* Comment Content */}
            <div>
              <p className="text-sm pt-2" dir="rtl">
                {commentInfo.text}
              </p>
            </div>
          </div>
          {/* Comment Actions */}
          <div className="flex gap-1 text-xs text-gray-500 p-1 items-center relative">
            <div
              className={`absolute bg-white rounded-lg custom_animation bottom-5 left-1  ${interactions} flex items-center justify-center `}
              onMouseEnter={() => {
                showInteractions();
              }}
              onMouseLeave={() => {
                hideInteractions();
              }}
            >
              {reactions.map((reaction) => ReactionDiv(reaction))}
            </div>
            <p
              className="hover:bg-gray-200 cursor-pointer rounded px-1"
              onMouseOver={() => showInteractions()}
              onMouseOut={() => hideInteractions()}
            >
              Like
            </p>
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
              <p className=" cursor-pointer rounded px-1">
                {commentInfo.reactions?.length}
              </p>
            </div>
            <p className=" cursor-pointer rounded ">|</p>
            <p className="hover:bg-gray-200 cursor-pointer rounded px-1">
              Reply
            </p>
            <p>-</p>
            <p className=" cursor-pointer rounded px-1">
              {commentInfo.replies?.length} Reply
            </p>
          </div>
          <Reply postId={postId} />
        </div>
      </div>
    </>
  );
};

export default Comment;
