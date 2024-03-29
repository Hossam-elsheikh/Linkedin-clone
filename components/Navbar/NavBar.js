import React from "react";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import NavLink from "../NavLink";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import useFetchUser from "../useHooks/useFetchUser";
import syncLogo from "../../public/sync-logo.svg"
function NavBar() {
  const userDetails = useFetchUser()

  return (
    <div className="flex bg-white justify-evenly items-center sticky top-0 z-30">
      <div className="flex items-center gap-5">
        {/* <LinkedInIcon className="logo" /> */}
        <Image height='30' src={syncLogo} />
        <div className="relative h-9">
          <SearchIcon className="absolute top-1.5 left-1 text-gray-600 lg:text-gray-400" />
          <input
            className="rounded p-2 bg-slate-100 h-9 pl-7 hidden lg:flex"
            type="search"
            placeholder="Search anything ..."
          />
        </div>
      </div>

      <div className="flex items-center">
        <NavLink href='/' Icon={HomeIcon} title="Home" />
        <NavLink href='/network' Icon={SupervisorAccountIcon} title="Network" className="hidden xxs:flex" />
        <NavLink href='/jobs' Icon={BusinessCenterIcon} title="Jobs" className='hidden xs:flex'/>
        <NavLink href='/messages' Icon={MessageIcon} title="Messages" />
        <NavLink href='/notifications' Icon={NotificationsIcon} title="Notifications" className='hidden xxxs:flex'/>
        <NavLink
          dropdown={true}
          avatar={userDetails.user?.profilePicture}

          title="Me"
        />
        <div className="border-l-2 border-gray-400 h-9 hidden sm:block"></div>
        <NavLink className='hidden sm:flex' dropdown={true} Icon={AppsIcon} title="For Business" />
        <Link
          className="text-xs underline w-28 text-center decoration-solid hidden sm:block"
          href="#"
        >
          Ignite your career with premium
        </Link>
        <MoreHorizIcon className="block sm:hidden" />
      </div>
    </div>
  );
}

export default NavBar;
