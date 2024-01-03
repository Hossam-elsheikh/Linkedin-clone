import Container from "@/app/ui/Container";
import React from "react";
import Link from 'next/link'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GroupIcon from "@mui/icons-material/Group";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SearchIcon from "@mui/icons-material/Search";
import ShowAll from "@/app/ui/ShowAll";
const Analytics = () => {
  const sections = [
    {
      icon: GroupIcon,
      title: "15 profile views",
      description: "Discover who's viewed your profile.",
    },
    {
      icon: EqualizerIcon,
      title: "275 Post Impressions",
      description: "Check out who's engaging with your post.",
    },
    {
      icon: SearchIcon,
      title: "5 search appearances",
      description: "See how often you appear on search results.",
    },
  ];
  const Section = (div) => {
    return (
      <Link href='#' className="flex gap-1 cursor-pointer">
        <div.icon />
        <div className="flex flex-col">
          <h3 className="font-semibold hover:underline hover:text-blue-600">{div.title}</h3>
          <p className="text-sm text-gray-600">{div.description}</p>
        </div>
      </Link>
    );
  };
  return (
    <Container>
      <div className="px-6 py-4">
        <h2 className="text-lg text-gray-700 font-semibold">Analytics</h2>
        <div className="flex items-center gap-1">
          <RemoveRedEyeIcon className="text-lg text-gray-500" />
          <p className="text-xs text-gray-500">Private to you</p>
        </div>
      </div>
      <div className="flex py-3 px-5 gap-5">
        {sections.map((section, index) => (
          Section(section) 
        ))}
      </div>
      <hr />
      <ShowAll title='Analytics'/>
    </Container>
  );
};

export default Analytics;
