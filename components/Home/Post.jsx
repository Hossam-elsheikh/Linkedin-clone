import Container from "@/app/ui/Container";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ideaCircle from "../../public/idea-circle.svg";
import likeCircle from "../../public/like-circle.svg";
import supportCircle from "../../public/support-circle.svg";
import like from "../../public/like.svg";
import support from "../../public/support.svg";
import insightful from "../../public/idea.svg";
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
import Cookies from "js-cookie";
import { ModalContext } from "@/context/ModalContext";
import { useLikesContext } from "@/context/LikesContext";
import { useDispatch } from "react-redux";
import { selectPost } from "@/redux/slice/postIdSlice";
import { useSelector } from "react-redux";
import useGetComment from "../useHooks/useGetComment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LinkIcon from "@mui/icons-material/Link";
import FlagIcon from "@mui/icons-material/Flag";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Post = ({ post,myPost }) => {
  const posts = useGetPosts();
  const { setModal } = useContext(ModalContext);
  const [interactions, setInteractions] = useState("hidden");
  const [optionsDisplay, setOptions] = useState(false);
  const reactions = [
    { src: like, alt: "like", textClr: "text-blue-600" },
    { src: clap, alt: "clap", textClr: "text-orange-800" },
    { src: support, alt: "support", textClr: "text-red-800" },
    // {src:love,alt:'love'},
    { src: insightful, alt: "insightful", textClr: "text-yellow-600" },
    { src: inquire, alt: "inquire", textClr: "text-yellow-700" },
  ];

  const ReactionDiv = (reaction, postId) => {
    return (
      <Image
        width="60"
        src={reaction.src}
        alt={reaction.alt}
        key={reaction.alt}
        className="py-2 px-2"
        onClick={() => handleLikePost(postId, reaction.alt)}
      />
    );
  };
document.body.addEventListener('click',()=>{
  setOptions(false)
})
  //like handling
  const dispatch = useDispatch();
  const { handleLikePost } = useLike();
  const handlePushingPostId = (postId) => {
    dispatch(selectPost(postId));
  };

  // render current user reaction
  const filterReactions = (post) => {
    return post.reactions?.find(
      (reaction) => reaction.userId === Cookies.get("userId")
    );
  };
  const renderReaction = (post) => {
    let currentReaction = reactions.find(
      (reaction) => reaction.alt === filterReactions(post).reaction
    );
    return (
      <div className="flex items-center gap-1">
        <Image
          width="30"
          src={currentReaction.src}
          alt={currentReaction.alt}
          key={currentReaction.alt}
        />
        <p className={currentReaction.textClr}>{currentReaction.alt}</p>
      </div>
    );
  };
  // post options dropdown list
  const postOptionsDropdownList = () => {
    return (
      <>
        {myPost ? (
          <div
            className={`bg-white shadow-lg border w-52  z-20 flex  flex-col absolute top-5 right-8`}
            onClick={() => setOptions(false)}
          >
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <BookmarkIcon fontSize="small" />
              <p>Save</p>
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
              <EditIcon fontSize="small" />
              <p>Edit Post</p>
            </button>
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <DeleteIcon fontSize="small" />
              <p>Delete post</p>
            </button>
          </div>
        ) : (
          <div
            className={`bg-white shadow-lg border w-52  z-20 flex  flex-col absolute top-5 right-8`}
            onClick={() => setOptions(false)}
          >
            <button
              className="px-2 py-2 hover:bg-slate-200 text-gray-700 flex items-center gap-1"
              type="button"
            >
              <BookmarkIcon fontSize="small" />
              <p>Save</p>
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
              <PersonRemoveIcon fontSize="small" />
              <p>Unfollow person</p>
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

  //delete post
  const [deletePost, setDeletePost] = useState([]);
  const handleDeletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4010/post/deletePost/${postId}`
      );
      if (response.status === 200) {
        setDeletePost((deleteOnTheWay) => [...deleteOnTheWay, postId]);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const filteredPosts = posts.filter((post) => !deletePost.includes(post._id));
  const comments = useGetComment(post._id);

  return (
    <>
      <Container className="px-0 py-2 " key={post._id}>
        {post._id}
        <div className="flex justify-between px-3 py-2">
          <UserCircle
            name={post.publisherId.name}
            title={post.publisherId.jobTitle}
            isPost={true}
            img={post.publisherId.profilePhoto}
          />

          <div className="flex gap-2 relative">
            <MoreHorizIcon
              className="hover:bg-gray-200 rounded-full text-gray-500 cursor-pointer postOptions"
              onClick={(e) => {setOptions(!optionsDisplay)
              e.stopPropagation()
              }}
            />
            {optionsDisplay && postOptionsDropdownList()}
            <ClearIcon
              className="hover:bg-gray-200 rounded-full text-gray-500 cursor-pointer"
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
            <div
              className="flex"
              onClick={() => {
                setModal("SHOWLIKES");
                handlePushingPostId(post._id);
              }}
            >
              <Image
                width="20"
                height="20"
                src={likeCircle}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
              <Image
                width="20"
                height="20"
                src={ideaCircle}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
              <Image
                width="20"
                height="20"
                src={supportCircle}
                alt="love"
                className="border-2 border-white -ml-1 rounded-full"
              />
              <p className="text-xs text-gray-600 mr-4 font-light hover:text-blue-500">
                {/* {showModal=="SHOWLIKES" && (
                  <Portal>
                    <Likes />
                  </Portal>
                )} */}
                {post.reactions?.length !== 0 ? post.reactions.length : ""}
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
            onMouseEnter={() => setInteractions("block")}
            onMouseLeave={() => setInteractions("hidden")}
          >
            {reactions.map((reaction) => ReactionDiv(reaction, post._id))}
          </div>
          <div
            className="flex items-center text-gray-500 p-2 rounded cursor-pointer gap-1 hover:bg-gray-200"
            onMouseEnter={() => setInteractions("block")}
            onMouseLeave={() => setInteractions("hidden")}
            onClick={() => handleLikePost(post._id, "like")}
          >
            {filterReactions(post) ? (
              renderReaction(post)
            ) : (
              <>
                {" "}
                <ThumbUpOffAltIcon
                  className="text-xxl"
                  style={{ transform: "scaleX(-1)" }}
                />
                <p>Like</p>
              </>
            )}
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
        <AddComment
          postId={post._id}
          publisherId={posts.publisherId}
          type="Add a Comment..."
        />
        {/* Comments Filter */}
        <div className="flex gap-.5 px-3 font-semibold text-gray-500 text-xs cursor-pointer items-center p-2">
          <p>Most Relevant</p>
          <ArrowDropDownIcon />
        </div>
        {/* Comments */}
        {comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              commentInfo={comment}
              postId={post._id}
              myComment={() => comment.commenterId === Cookies.get("userId")}
            />
          );
        })}
        <p className="hover:bg-gray-200 cursor-pointer rounded py-1 mx-1 px-2 text-xs text-gray-500 font-semibold w-fit">
          Load More Comments
        </p>
      </Container>
    </>
  );
};

export default Post;
