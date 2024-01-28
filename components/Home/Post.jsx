import Container from "@/app/ui/Container";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import useGetLikes from "../useHooks/useGetLikes";
import useDeletePost from "../useHooks/useDeletePost";
import useLike from "../useHooks/useLike";
import Likes from "./likes";
import Portal from "../Modal/Overlay";
import { ModalContext } from "@/context/ModalContext";
import { useLikesContext } from "@/context/LikesContext";
import { useDispatch } from "react-redux";
import { selectPost } from "@/redux/slice/postIdSlice";

const Post = () => {
  const posts = useGetPosts();

  const { showModal, setModal } = useContext(ModalContext)

  const [interactions, setInteractions] = useState('hidden')
  const reactions = [
    { src: like, alt: 'like' },
    { src: clap, alt: 'clap' },
    { src: support, alt: 'support' },
    { src: love, alt: 'love' },
    { src: insightful, alt: 'insightful' },
    { src: inquire, alt: 'inquire' },
  ]
  const ReactionDiv = (reaction, postId) => {
    return (
      <Image
        width='45'
        src={reaction.src}
        alt={reaction.alt}
        key={reaction.alt}
        className="py-2 px-2"
        onClick={() => handleLikePost(postId, reaction.alt)}
      />
    )
  }
  function showInteractions() {
    setTimeout(() => {

      setInteractions('block')
    }, 300)
  }
  function hideInteractions() {
    setTimeout(() => {
      setInteractions('hidden')
    }, 300)

  }

  //like handling
  const { handleLikePost } = useLike()

  const dispatch = useDispatch()

    const handlePushingPostId = (postId) => {
    dispatch(selectPost(postId));
  };

  //delete post
  const [deletePost, setDeletePost] = useState([])

  const handleDeletePost = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:4010/post/deletePost/${postId}`)
      if (response.status === 200) {
        setDeletePost((deleteOnTheWay) => [...deleteOnTheWay, postId])
      }
    } catch (err) {
      console.error(err);
    }
  }

  const filteredPosts = posts.filter((post) => !deletePost.includes(post._id))

  return (
    <>
      {filteredPosts.map((post) => (
        <Container
          className="px-0 py-2 "
          key={post._id}
        >

          <div className="flex justify-between px-3 py-2">
            <UserCircle
              name={post.publisherId.name}
              title={post.publisherId.jobTitle}
              isPost={true}
              img={post.publisherId.profilePhoto}
            />

            <div className="flex gap-2">
              <MoreHorizIcon className="hover:bg-gray-200 rounded-full text-gray-500 cursor-pointer" />
              <ClearIcon className="hover:bg-gray-200 rounded-full text-gray-500 cursor-pointer"
                onClick={() => handleDeletePost(post._id)}
              />
            </div>
          </div>
          {/* Post Content */}
          <div className="">
            <p className="text-sm p-3" dir="rtl">
              {post.postContent.text}

            </p>
            <div>
              {/* {post.postContent.photo.length > 0 ? ( */}
              <img
                className="p-0"
              // src={post.postContent.photo}
              />

              {/* ):null} */}
            </div>
          </div>
          {/* Post Interactions */}
          <div className="p-2 px-3 flex justify-between items center">
            <div className="flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500">
              <div className="flex" onClick={() => {setModal("SHOWLIKES"); handlePushingPostId(post._id)}}>

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
                <p className="text-xs text-gray-600 mr-4 font-light hover:text-blue-500"

                >
                  {/* {showModal=="SHOWLIKES" && (
                  <Portal>
                    <Likes />
                  </Portal>
                )} */}
                  {post.reactions?.length}
                  {/* Essam Konafa and 1.233 others */}
                </p>
              </div>
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
              className={`absolute bg-white rounded-lg custom_animation bottom-11 left-1  ${interactions} flex items-center justify-center `}
              onMouseEnter={() => showInteractions()}
              onMouseLeave={() => hideInteractions()}
            // onMouseEnter={()=> {showInteractions()}}
            // onMouseLeave={()=> {hideInteractions()}}
            >
              {reactions.map((reaction) => ReactionDiv(reaction, post._id))}
            </div>
            <div
              className="flex items-center text-gray-500 p-2 rounded cursor-pointer gap-1 hover:bg-gray-200"
              onMouseOver={() => showInteractions()}
              onMouseOut={() => hideInteractions()}
              onClick={() => handleLikePost(post._id, 'like')}
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
