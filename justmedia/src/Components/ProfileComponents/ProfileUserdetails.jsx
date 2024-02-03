import React from "react";
import { TbCircleDashed } from "react-icons/tb";

const ProfileUserdetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/11/29/10/32/mountains-8419249_1280.jpg"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>Username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">6</span>
              <span>Follower</span>
            </div>
            <div>
              <span className="font-semibold mr-2">9</span>
              <span>Following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">Har Har Mahadev</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserdetails;
