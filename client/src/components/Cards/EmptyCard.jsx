import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-20 mt-15 bg-white rounded-3xl shadow-lg w-full max-w-3xl h-[500px] mx-auto">
      <img
        src={imgSrc}
        alt="Empty state"
        className="w-80 h-80 object-contain mb-8"
      />
      <p className="text-lg font-semibold text-slate-600 text-center leading-relaxed px-6">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
