import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-full sm:w-80 flex items-center px-4 py-2 bg-slate-200 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
      <input
        type="text"
        placeholder="Search notes..."
        className="flex-grow text-sm sm:text-base bg-transparent outline-none text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-slate-400 cursor-pointer hover:text-red-500 ml-2 transition-colors duration-150"
          onClick={onClearSearch}
        />
      )}

      <FaSearch
        className="text-slate-400 cursor-pointer hover:text-blue-600 ml-2 transition-colors duration-150"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
