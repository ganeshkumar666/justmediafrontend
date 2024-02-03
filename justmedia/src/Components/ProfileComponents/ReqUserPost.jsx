import React, { useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddFill, RiVideoAddLine } from "react-icons/ri";
import { FaTableCells } from "react-icons/fa6";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { FaRegUser, FaUser } from "react-icons/fa";
import ReqUserPostCard from "./ReqUserPostCard";
const ReqUserPost = () => {
  const [activeTab, setActiveTab] = useState();
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable></AiOutlineTable>,
      activeIcon: <FaTableCells></FaTableCells>,
    },

    {
      tab: "Reels",
      icon: <RiVideoAddLine></RiVideoAddLine>,
      activeIcon: <RiVideoAddFill></RiVideoAddFill>,
    },

    {
      tab: "Saved",
      icon: <IoBookmarkOutline></IoBookmarkOutline>,
      activeIcon: <IoBookmark></IoBookmark>,
    },
    {
      tab: "Tagged",
      icon: <FaRegUser></FaRegUser>,
      activeIcon: <FaUser></FaUser>,
    },
  ];
  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"}
              flex items-center cursor-pointer py-2 `}
          >
            <p>{activeTab===item.tab? item.activeIcon:item.icon}</p>
            <p className="ml-2">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {[1,1,1,1,1,1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
        </div>
      </div>
    </div>
  );
};

export default ReqUserPost;
