import React, { useState } from "react";
import { ProfileInfo, SearchBar } from "../index";
import { useNavigate } from "react-router-dom";

function Navbar({ userInfo, onSearchNote, handleClickSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchValue) {
      onSearchNote(searchValue);
    }
  };

  const onClearSearch = () => {
    setSearchValue("");
    handleClickSearch();
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 sm:px-8 py-4 shadow-md rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">NoteSphere</h2>

      <SearchBar
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        className="w-full sm:w-1/3 max-w-xs"
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
}

export default Navbar;
