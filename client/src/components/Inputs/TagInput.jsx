import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed !== "") {
      setTags([...tags, trimmed]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 text-sm text-slate-800 bg-slate-200 px-4 py-2 rounded-full"
            >
              #{tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="text-slate-500 hover:text-red-500 transition-colors duration-150"
              >
                <MdClose size={16} />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 mt-4">
        <input
          type="text"
          value={inputValue}
          className="text-sm w-full border border-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full border border-blue-600 hover:bg-blue-600 transition-all duration-200"
          onClick={addNewTag}
        >
          <MdAdd className="text-xl text-blue-600 hover:text-white transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
}

export default TagInput;
