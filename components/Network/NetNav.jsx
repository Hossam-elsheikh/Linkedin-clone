import Container from "@/app/ui/Container";
import React from "react";
import Link from "next/link";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Groups3Icon from '@mui/icons-material/Groups3';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TagIcon from '@mui/icons-material/Tag';

const NetNav = () => {
  const Links = [
    {
      icon: <GroupIcon />,
      title: "Connections",
      count: 128,
      link: "#",
    },
    {
      icon: <GroupAddIcon />,
      title: "Followers & Following",
      count: 55,
      link: "#",
    },
    {
      icon: <Groups3Icon />,
      title: "Groups",
      count: 6,
      link: "#",
    },
    {
      icon: <CalendarMonthIcon />,
      title: "Events",
      count: 2,
      link: "#",
    },
    {
      icon: <DescriptionIcon />,
      title: "Pages",
      count: 12,
      link: "#",
    },
    {
      icon: <NewspaperIcon />,
      title: "Newsletter",
      count: 3,
      link: "#",
    },
    {
      icon: <TagIcon />,
      title: "Hashtags",
      count: 3,
      link: "#",
    },
  ];
  return (
    <Container className=" flex flex-col">
      <h3 className="text-gray-700 p-4">Manage My Network</h3>
      <ul className="flex flex-col ">
        {Links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="text-gray-500 flex justify-between items-center hover:bg-gray-200 px-4 py-2 text-sm"
          >
            <div className="flex items-center gap-2">
                {link.icon}
              <p>{link.title}</p>
            </div>
            <p>{link.count}</p>
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default NetNav;
