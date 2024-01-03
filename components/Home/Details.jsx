import Container from "@/app/ui/Container";
import React from "react";
import { Avatar } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Link from "next/link";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AddIcon from "@mui/icons-material/Add";
function Details() {
  return (
    <>
      <Container className="p-0">
        <div className="h-20">
          <img
            className="object-cover h-16 rounded-t-md w-full"
            src="https://images.pexels.com/photos/2096622/pexels-photo-2096622.jpeg"
            alt="cover image"
          />
        </div>
        <Avatar
        src='https://i.postimg.cc/523pcPrD/new.png'
          sx={{
            width: "70px",
            height: "70px",
            marginX: "auto",
            marginTop: "-3rem",
            border: "2px solid white",
          }}
        />
        <div className="text-center my-3">
          <Link href="/profile" className="font-semibold text-sm mb-1 hover:text-blue-600 hover:underline">
            Hossam Mohamed
          </Link>
          <p className="text-xs font-light">Frontend Developer</p>
        </div>
        <hr />
        <div className="py-2">
          <div className="flex  justify-between text-xs text-gray-700 px-3 py-1 cursor-pointer hover:bg-gray-200">
            <p>Profile viewers</p>
            <p className="text-blue-600">14</p>
          </div>
          <div className="flex justify-between text-xs text-gray-700 py-1 px-3 cursor-pointer hover:bg-gray-200 ">
            <p>Post impressions</p>
            <p className="text-blue-600">342</p>
          </div>
        </div>
        <hr />
        <div className="p-2 text-xs font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-700">
          <BookmarkIcon style={{ fontSize: "1rem" }} />
          <p>My Items</p>
        </div>
      </Container>
      <Container className="p-0 sticky top-20">
        <p className="px-3 pt-4 pb-2 text-xs text-gray-700">Recent</p>
        <div className="px-3 py-1 text-xs font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-500">
          <PodcastsIcon style={{ fontSize: "1rem" }} />
          <p className="truncate">Frontend Roadmap - Tech podcast بالعربي</p>
        </div>
        <div className="px-3 py-1 text-xs font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-500">
          <Diversity3Icon style={{ fontSize: "1rem" }} />
          <p className="truncate">Frontend Roadmap - Tech podcast بالعربي</p>
        </div>
        <div className="px-3 py-1 text-xs font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-500">
          <Diversity3Icon style={{ fontSize: "1rem" }} />
          <p className="truncate">Frontend Roadmap - Tech podcast بالعربي</p>
        </div>
        <Link
          href="#"
          className="px-3 pt-5 pb-2 text-xs font-semibold text-blue-500 hover:underline"
        >
          Groups
        </Link>
        <div className="px-3 py-1 text-xs font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-500">
          <Diversity3Icon style={{ fontSize: "1rem" }} />
          <p className="truncate">Frontend Roadmap - Tech podcast بالعربي</p>
        </div>
        <div className="px-3 py-1 text-xs font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-500">
          <Diversity3Icon style={{ fontSize: "1rem" }} />
          <p className="truncate">Frontend Roadmap - Tech podcast بالعربي</p>
        </div>
        <div className="px-3 py-1 text-xs font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-500">
          <p>See all</p>
        </div>
        <div className="flex justify-between w-full items-center text-xs pt-4 px-3">
          <Link
            href="#"
            className="   text-xs font-semibold text-blue-500 hover:underline"
          >
            Events
          </Link>
          <AddIcon className="hover:bg-gray-300 rounded-full text-base cursor-pointer"/>
        </div>
        <Link
          href="#"
          className="px-3 pt-5 pb-2 text-xs font-semibold text-blue-500 hover:underline"
        >
          Followed Hashtags
        </Link>
        <hr />
        <div className="px-3 py-3  text-sm font-semibold  flex items-center gap-2 cursor-pointer hover:bg-gray-200 text-gray-500 text-center">
            <Link className="w-full" href='/network'>Discover more</Link>
        </div>
      </Container>
    </>
  );
}

export default Details;
