import React from "react";
import ProfileUserdetails from "../../Components/ProfileComponents/ProfileUserdetails";
import ReqUserPost from "../../Components/ProfileComponents/ReqUserPost";

const Profile = () => {
  return (
    <div className="px-20">
      <div className="w-full">
        <ProfileUserdetails />
      </div>
      <div>
        <ReqUserPost />
      </div>
    </div>
  );
};

export default Profile;
