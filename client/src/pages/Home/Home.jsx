import React, { useEffect, useState } from "react";
import { Navbar, NoteCard, Toast, EmptyCard } from "../../components/index.js";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/index.js";
import AddNotesImg from "../../assets/images/addnotes.png";
import NoDataImg from "../../assets/images/nodata.png";
// import { AddNotesImg, NoDataImg} from "../../assets/images/index.js";

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToast, setShowToast] = useState({
    isShown: false,
    message: "",
    type: "add",
  });

  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
  };

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/auth/");
      if (response?.data?.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setUserInfo(null);
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/api/notes/");

      if (response?.data?.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({
      isShown: true,
      type: "edit",
      data: noteDetails,
    });
  };

  const showToastMessage = (message, type) => {
    setShowToast({
      isShown: true,
      message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToast({
      isShown: false,
      message: "",
    });
  };

  const deleteNote = async (data) => {
    const noteId = data?._id;
    try {
      const response = await axiosInstance.delete("/api/notes/" + noteId);

      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted successfully", "delete");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error deleting note:", error.response.data.message);
      }
    }
  };

  const onSearchNote = async (query) => {
    try {
      const response = await axiosInstance.get("/api/notes/search", {
        params: { query },
      });

      if (response?.data?.notes) {
        setAllNotes(response.data.notes);
        setIsSearch(true);
      }
    } catch (error) {
      console.error("Error searching notes:", error);
    }
  };

  const updateIsPinned = async (noteData) => {
    const noteId = noteData?._id;
    const newIsPinned = !noteData.isPinned;

    try {
      const response = await axiosInstance.put(
        `/api/notes/pin/${noteId}`,
        {
          isPinned: newIsPinned,
        }
      );

      if (response?.data?.note) {
        const message = newIsPinned
          ? "Note pinned successfully"
          : "Note unpinned successfully";
        showToastMessage(message);
        getAllNotes();
      }
    } catch (error) {
      console.error("Error updating pinned status:", error);
    }
  };

  const handleClickSearch = () => {
    setIsSearch(false);
    getAllNotes();
  };

  useEffect(() => {
    getAllNotes();
    getUserInfo();
    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 overflow-y-auto">
      <Navbar
        userInfo={userInfo}
        onSearchNote={onSearchNote}
        handleClickSearch={handleClickSearch}
      />

      <div className="container mx-auto px-4 mt-10">
        {allNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allNotes.map((item, index) => (
              <NoteCard
                key={item._id}
                title={item.title}
                date={item.createdOn}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => handleEdit(item)}
                onDelete={() => deleteNote(item)}
                onPinNote={() => updateIsPinned(item)}
                className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            className="mt-10"
            imgSrc={isSearch ? NoDataImg : AddNotesImg}
            message={
              isSearch
                ? `Oops! No notes found matching your search`
                : `Start creating your First Note! Click the 'Add' button to note down your thoughts, ideas, and reminders. Let's get started!`
            }
          />
        )}
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white fixed right-8 bottom-10 shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-110"
        onClick={() =>
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          })
        }
      >
        <MdAdd className="text-3xl" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={closeModal}
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.2)",
            zIndex: 50,
          },
        }}
        contentLabel="Add or Edit Note"
        className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] max-h-[80vh] bg-white rounded-lg mx-auto mt-14 p-6 overflow-y-auto shadow-lg"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </Modal>

      <Toast
        isShown={showToast.isShown}
        message={showToast.message}
        type={showToast.type}
        onClose={handleCloseToast}
      />
    </div>
  );
}

export default Home;
