'use client'
import React from "react";
import { Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function NavLink({ avatar, Icon, title,dropdown,className,href }) {
  const pathname = usePathname()
  return (
    <Link href={href||'/'} className={clsx(`${className} flex flex-col items-center  hover:text-black cursor-pointer px-4 pt-2 `,{
      'text-black border-b-2 border-black': pathname === href,
      'text-gray-600' : pathname !== href
    })}>
      {Icon && <Icon />}
      {avatar && <Avatar src={avatar} sx={{width:'24px',height:'24px'}}/>}
      <p className="text-xs hidden lg:flex items-center">{title}{dropdown ? <ArrowDropDownIcon/> :'' }</p>
    </Link>
  );
}

export default NavLink;
