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
    <div className="border rounded-2xl p-5 bg-white hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="flex items-start justify-between">
        <div>
          <h6 className="text-base font-semibold text-gray-800">{title}</h6>
          <span className="text-xs text-gray-500">
            {moment(date).format("DD/MM/YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`cursor-pointer text-xl transition-colors duration-200 ${
            isPinned ? "text-blue-600" : "text-gray-300 hover:text-blue-400"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-sm text-gray-600 mt-3">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-1 text-xs text-gray-500">
          {tags.map((item, index) => (
            <span key={index} className="bg-gray-100 px-2 py-0.5 rounded-full">
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
