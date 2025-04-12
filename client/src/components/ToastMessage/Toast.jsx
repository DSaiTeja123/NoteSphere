import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div
      className={`absolute top-20 right-6 transition-all duration-300 ease-in-out ${
        isShown
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`min-w-[200px] sm:min-w-[250px] md:min-w-[300px] bg-white border shadow-2xl rounded-md relative overflow-hidden ${
          type === "delete" ? "border-red-500" : "border-green-500"
        }`}
      >
        <div className="flex items-center gap-3 py-3 px-5">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${
              type === "delete" ? "bg-red-100" : "bg-green-100"
            }`}
          >
            {type === "delete" ? (
              <MdDeleteOutline className="text-2xl text-red-500" />
            ) : (
              <LuCheck className="text-2xl text-green-500" />
            )}
          </div>
          <p className="text-sm sm:text-base text-slate-800 font-medium">{message}</p>
        </div>
        <div
          className={`absolute top-0 left-0 h-full ${
            type === "delete" ? "bg-red-500" : "bg-green-500"
          } w-[5px] rounded-l-lg`}
        />
      </div>
    </div>
  );
};

export default Toast;
