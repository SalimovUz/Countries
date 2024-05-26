import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../utils/createSlice";

const Top = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div
      className={`duration-500 ${
        darkMode
          ? "bg-[#fff] w-full fixed top-0 px-12 md:px-20 py-4 z-44 border-b-gray-200 shadow-bottom-10px items-center text-[#111924]"
          : "bg-[#283949] w-full fixed top-0 px-12 md:px-20 py-4 z-44 border-b-gray-200 shadow-bottom-10px items-center text-white"
      }`}
    >
      <div className="top md:pb-[9px] md:pt-2  justify-between flex mx-auto container  items-center">
        <div className="left">
          <h1 className="md:text-2xl text-sm sm:text-lg font-semibold font-[Nunito Sans]">
            Where in the world?
          </h1>
        </div>

        <div className="right flex items-center gap-2">
          {darkMode ? (
            <MdOutlineDarkMode
              className={`duration-2000 hover-spin ${
                darkMode ? "  hover-spin" : " hover-spin"
              }`}
              onClick={handleToggle}
            />
          ) : (
            <MdOutlineLightMode onClick={handleToggle} />
          )}
          <button className={`font-semibold text-sm sm:text-md md:text-lg lg:text-xl`} onClick={handleToggle}>
            {`
             ${darkMode ? "Dark Mode" : "Light Mode"}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
