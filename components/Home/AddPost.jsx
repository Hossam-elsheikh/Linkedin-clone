import Container from "@/app/ui/Container";
import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PostOption from "@/app/ui/PostOption";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ModalContext } from "@/contexts/ModalContext";
import { Tooltip } from 'react-tooltip'

const AddPost = () => {
    const { setModal } = useContext(ModalContext);

  return (
    <Container className="w-full p-5 flex flex-col relative">
      <div>
        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 w-fit cursor-pointer ">
          <Avatar
            src="https://i.postimg.cc/523pcPrD/new.png"
            sx={{
              width: "50px",
              height: "50px",
            }}
          />
          <div className="flex flex-col ">
            <h3 className="font-bold">
              Hossam Mohamed
              <span>
                <ArrowDropDownIcon className="text-gray-500" />
              </span>
            </h3>
            <p className="text-xs">Post to Anyone</p>
          </div>
        </div>
        <div className="absolute top-3 right-3  px-1 py-.5 rounded-full hover:bg-gray-200 cursor-pointer" onClick={()=>setModal(false)}>
          <CloseIcon className="text-xl text-gray-600 " />
        </div>
      </div>
      <form action="" className="flex flex-col p-3">
            <textarea name="" id="" rows='10' className="w-full focus:outline-none resize-none" placeholder="What do you want to talk about?"></textarea>
            <SentimentSatisfiedAltIcon className="p-1 text-gray-600 cursor-pointer text-4xl hover:bg-gray-200 rounded-full"/>
            <div className="flex gap-3 py-3">
                <PostOption tooltip='Add media' Icon={ImageIcon} />
                <PostOption tooltip='Create an Event' Icon={CalendarMonthIcon} />
                <PostOption tooltip='Celebrate an occasion' Icon={WorkspacePremiumIcon} />
                <PostOption tooltip='More' Icon={MoreHorizIcon} />
            </div>
            <hr />
            <div className="flex justify-end gap-3 items-center pt-3">
            <Tooltip id='schedule' />

                <AccessTimeIcon data-tooltip-id='schedule' data-tooltip-content='schedule for later' className="cursor-pointer  p-1 hover:bg-gray-200 rounded-full text-gray-500 text-3xl"/>
                <button className="bg-blue-700 text-white text-sm font-semibold py-1 px-3 rounded-full hover:bg-blue-900">Post</button>
            </div>
      </form>
    </Container>
  );
};

export default AddPost;
