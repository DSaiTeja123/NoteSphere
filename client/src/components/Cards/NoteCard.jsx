import moment from "moment";
import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded-2xl p-4 sm:p-5 md:p-6 bg-white hover:shadow-2xl transition-all duration-300 ease-in-out w-full h-full">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h6 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
            {title}
          </h6>
          <span className="text-xs sm:text-sm text-gray-500 block">
            {moment(date).format("DD/MM/YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`shrink-0 cursor-pointer text-xl sm:text-2xl transition-colors duration-200 ${
            isPinned ? "text-blue-600" : "text-gray-300 hover:text-blue-400"
          }`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-sm sm:text-base text-gray-600 mt-3 line-clamp-3">
        {content?.slice(0, 100)}
      </p>

      <div className="flex items-center justify-between mt-4 flex-wrap gap-y-2">
        <div className="flex flex-wrap gap-1 text-xs sm:text-sm text-gray-500 max-w-[75%]">
          {tags.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 px-2 py-0.5 rounded-full break-words"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <MdCreate
            className="cursor-pointer text-lg text-gray-500 hover:text-green-600 transition-colors duration-150"
            onClick={onEdit}
          />
          <MdDelete
            className="cursor-pointer text-lg text-gray-500 hover:text-red-500 transition-colors duration-150"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
