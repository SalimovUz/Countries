import React, { useState } from "react";
import Top from "../Components/Top";
import Countries from "../Components/Countries";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../utils/Filter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Container = () => {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("All");
  const body = document.querySelectorAll(".body");

  const darkMode = useSelector((state) => state.mode.darkMode);
  if (darkMode) {
    body[0].classList.add("bg-[#FAFAFA]");
    body[0].classList.add("text-[#041A24]");
  }
  return (
    <div
      className={`duration-500 
      ${
        darkMode ? " bg-[#FAFAFA] text-[#041A24]" : " bg-[#202C37] text-white"
      }`}
    >
      <div
        className={`duration-500 z-10 
      ${
        darkMode
          ? " bg-[#FAFAFA] text-[#041A24] z-10"
          : " bg-[#202C37] text-white z-10"
      }`}
      >
        <div className="">
          <Top />
        </div>
        <div className="container mx-auto">
          <Filter setSearchValue={setSearchValue} setRegion={setRegion} />
        </div>
      </div>
      <div className="pt-24 px-16 md:px-20 container mx-auto z-2">
        <Countries searchValue={searchValue} region={region} />
      </div>
    </div>
  );
};

export default Container;
