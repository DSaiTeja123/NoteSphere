import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-white py-3 px-4 pr-10 rounded-lg border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
      />
      <div
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-slate-500 hover:text-primary transition-colors duration-200"
        onClick={toggleShowPassword}
      >
        {isShowPassword ? (
          <FaRegEye size={20} className="text-primary" />
        ) : (
          <FaRegEyeSlash size={20} className="text-slate-400" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
