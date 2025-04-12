import React, { useState } from "react";
import { TagInput } from "../../components/index";
import { MdClose } from "react-icons/md";
import { axiosInstance } from "../../utils/index";

const AddEditNotes = ({
  getAllNotes,
  noteData,
  type,
  onClose,
  showToastMessage,
}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/api/notes/", {
        title,
        content,
        tags,
      });

      if (response?.data?.note) {
        showToastMessage("Note Added successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  const editNote = async () => {
    const noteId = noteData?._id;

    try {
      const response = await axiosInstance.put("/api/notes/" + noteId, {
        title,
        content,
        tags,
      });

      if (response?.data?.note) {
        showToastMessage("Note Updated successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Title is required.");
      return;
    }
    if (!content) {
      setError("Content is required.");
      return;
    }
    setError(null);
    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 bg-slate-100 hover:bg-slate-200 transition-all duration-200"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-500" />
      </button>

      <div className="flex flex-col gap-3">
        <label className="text-sm font-semibold text-slate-700">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-900 bg-transparent outline-none border-b-2 border-slate-300 focus:border-slate-500 focus:ring-0 transition-all duration-200"
          placeholder="Go to GYM at 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <label className="text-sm font-semibold text-slate-700">Content</label>
        <textarea
          className="text-slate-900 bg-slate-50 p-4 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          placeholder="Content"
          rows={6}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold text-slate-700">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none font-medium transition-all duration-200"
        onClick={handleAddNote}
      >
        {type === "edit" ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AddEditNotes;
