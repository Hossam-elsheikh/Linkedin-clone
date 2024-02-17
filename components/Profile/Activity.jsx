"use client";
import Container from "@/app/ui/Container";
import React, { useContext, useState } from "react";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { ModalContext } from "@/context/ModalContext";
import Portal from "../Modal/Overlay";
import AddPost from "../Home/AddPost";
import ShowAll from "@/app/ui/ShowAll";
import clsx from "clsx";
import Image from "next/image";
// import love from "../../public/love-circle.svg";
import like from "../../public/like-circle.svg";
import support from "../../public/support-circle.svg";
import useFetchUser from "../useHooks/useFetchUser";
const Activity = () => {

  const userDetails = useFetchUser();

  const [posts, setPosts] = useState('')

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const { showModal, setModal } = useContext(ModalContext);
  const [activeSection, setActiveSection] = useState("posts");
  const PostPrev = () => {
    return (
      <div className="flex flex-col gap-1">
        <div>
          <p className="text-xs text-gray-500">
            {userDetails.user?.name} posted this - 2w
          </p>
        </div>
        <div className="flex gap-2 py-1">
          <img
            src="https://media.licdn.com/dms/image/D4D22AQHow7N134LU3g/feedshare-shrink_160/0/1702201185057?e=1707350400&v=beta&t=ENT-0iYrwPQsN7X_SZQHyvh5cL2cuucWiZ1iYzMUhF0"
            alt=""
            className="w-16 h-16 rounded-md object-cover"
          />
          <p className="text-sm text-gray-600 line-clamp-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            corrupti recusandae magnam cum id dicta ea quaerat consequuntur
            unde, iste voluptatem. Maiores magni voluptas consequatur
            voluptates, aliquid porro quibusdam magnam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Veniam adipisci praesentium
            officia eius rerum nostrum? Sint, eos sequi? Reprehenderit nemo
            autem quia laborum asperiores commodi repudiandae! Animi, est.
            Molestias, magni?
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 py-1">
            <div className="flex">
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
                // src={love}
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
            <p className="text-xs text-gray-600 font-light">
              Essam Konafa and 1.233 others
            </p>
          </div>
          <p className="text-xs text-gray-600 font-light">
            23 comments - 14 reposts
          </p>
        </div>
      </div>
    );
  };
  return (
    <Container>
      <div className="p-5 flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg text-gray-700 font-semibold">Activity</h2>
            <Link
              href="#"
              className="font-semibold text-xs text text-blue-600 hover:underline"
            >
              {userDetails.user?.followers?.length} followers
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <button
              className="text-blue-600 border-2 font-semibold  border-blue-600 rounded-full py-1 px-3 hover:bg-blue-100 text-sm"
              onClick={() => setModal(true)}
            >
              Create a post
            </button>
            <EditIcon className="text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer" />
            {showModal && (
              <Portal>
                <AddPost onAddPost={addPost}/>
              </Portal>
            )}
          </div>
        </div>
        {/* Navigation */}
        <div className="py-2 flex gap-2">
          <button
            className={clsx(
              `py-1 px-3 font-semibold text-sm border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full`,
              {
                "bg-blue-600 text-white": activeSection == "posts",
              }
            )}
            onClick={() => setActiveSection("posts")}
          >
            Posts
          </button>
          <button
            className={clsx(
              `py-1 px-3 font-semibold text-sm border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full`,
              {
                "bg-blue-600 text-white": activeSection == "comments",
              }
            )}
            onClick={() => setActiveSection("comments")}
          >
            Comments
          </button>
          <button
            className={clsx(
              `py-1 px-3 font-semibold text-sm border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full`,
              {
                "bg-blue-600 text-white": activeSection == "videos",
              }
            )}
            onClick={() => setActiveSection("videos")}
          >
            Videos
          </button>
          <button
            className={clsx(
              `py-1 px-3 font-semibold text-sm border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full`,
              {
                "bg-blue-600 text-white": activeSection == "images",
              }
            )}
            onClick={() => setActiveSection("images")}
          >
            Images
          </button>
        </div>
        <div className="flex- flex-col py-3 gap-2">
          {activeSection == "posts" && (
            <div className="flex flex-col gap-3">
              {PostPrev()} <hr />
              {PostPrev()} <hr />
              {PostPrev()}
            </div>
          )}
          {activeSection == "comments" && (
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-500">
                Hossam Elsheikh commented on this - 2w
              </p>
              <p className="text-gray-500 text-sm">
                It was a pleasure working with you ☘️ <br /> Wish you all the best 🔥
              </p>
              <hr />
              <p className="text-xs text-gray-500">
                Hossam Elsheikh commented on this - 2w
              </p>
              <p className="text-gray-500 text-sm">
                It was a pleasure working with you ☘️ <br /> Wish you all the best 🔥
              </p>
              <hr />
              <p className="text-xs text-gray-500">
                Hossam Elsheikh commented on this - 2w
              </p>
              <p className="text-gray-500 text-sm">
                It was a pleasure working with you ☘️ <br /> Wish you all the best 🔥
              </p>
            </div>
          )}
        </div>
      </div>
      <hr />
      <ShowAll title={activeSection} />
    </Container>
  );
};

export default Activity;
