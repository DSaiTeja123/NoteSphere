import React from "react";
import { getInitials } from "../../utils/index";

function ProfileInfo({ userInfo, onLogout }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-bold bg-slate-300 shadow-inner">
        {getInitials(userInfo?.fullName)}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">
          {userInfo?.fullName}
        </p>
        <button
          className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors duration-150"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
