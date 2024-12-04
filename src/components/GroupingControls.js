import React, { useState } from "react";

const GroupingControls = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const toggleDisplayMenu = () => setIsDisplayOpen((prev) => !prev);
  const handleSubMenuClick = (menu) => setSubMenu(menu === subMenu ? null : menu);

  return (
    <div className="relative inline-block">
      {/* Main Display Button */}
      <button
        className="p-2 bg-gray-200 border rounded"
        onClick={toggleDisplayMenu}
      >
        Display
      </button>

      {/* Dropdown for Display */}
      {isDisplayOpen && (
        <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-40">
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => handleSubMenuClick("group")}
          >
            Group By
          </button>
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => handleSubMenuClick("sort")}
          >
            Sort By
          </button>
        </div>
      )}

      {/* Submenu for Group By */}
      {subMenu === "group" && (
        <div className="absolute left-40 top-0 mt-2 bg-white border rounded shadow-lg w-40">
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setGroupBy("status");
              setSubMenu(null);
              setIsDisplayOpen(false);
            }}
          >
            Status
          </button>
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setGroupBy("user");
              setSubMenu(null);
              setIsDisplayOpen(false);
            }}
          >
            User
          </button>
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setGroupBy("priority");
              setSubMenu(null);
              setIsDisplayOpen(false);
            }}
          >
            Priority
          </button>
        </div>
      )}

      {/* Submenu for Sort By */}
      {subMenu === "sort" && (
        <div className="absolute left-40 top-0 mt-2 bg-white border rounded shadow-lg w-40">
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setSortBy("");
              setSubMenu(null);
              setIsDisplayOpen(false);
            }}
          >
            No Sorting
          </button>
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setSortBy("priority");
              setSubMenu(null);
              setIsDisplayOpen(false);
            }}
          >
            Priority
          </button>
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setSortBy("title");
              setSubMenu(null);
              setIsDisplayOpen(false);
            }}
          >
            Title
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupingControls;
