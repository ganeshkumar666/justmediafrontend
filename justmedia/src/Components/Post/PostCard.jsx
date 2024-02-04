import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handlePostSaved = () => {
    setIsSaved(!isSaved);
  };
  const handlePostLiked = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2024/01/12/23/02/stream-8504869_1280.png"
              alt=""
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="cursor-pointer" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/04/16/36/landscape-8487887_640.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-1">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostLiked}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLiked}
              />
            )}
            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handlePostSaved}
              />
            ) : (
              <BsBookmark
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handlePostSaved}
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
            <p>10 likes</p>
            <p>View all comments</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
