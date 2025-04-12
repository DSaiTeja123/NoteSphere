import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 bg-white rounded-3xl shadow-lg w-full max-w-3xl h-auto min-h-[400px] mx-auto">
      <img
        src={imgSrc}
        alt="Empty state"
        className="w-60 sm:w-72 md:w-80 h-auto object-contain mb-6 sm:mb-8"
      />
      <p className="text-base sm:text-lg font-semibold text-slate-600 text-center leading-relaxed px-4 sm:px-6">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
