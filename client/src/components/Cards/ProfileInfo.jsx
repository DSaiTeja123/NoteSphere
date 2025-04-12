import React from "react";
import { getInitials } from "../../utils/index";

function ProfileInfo({ userInfo, onLogout }) {
  return (
    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-slate-950 font-bold bg-slate-300 shadow-inner">
        {getInitials(userInfo?.fullName)}
      </div>
      <div>
        <p className="text-sm sm:text-base font-semibold text-gray-800">
          {userInfo?.fullName}
        </p>
        <button
          className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 underline transition-colors duration-150"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
