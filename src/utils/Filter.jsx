import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const Filter = ({ setSearchValue, setRegion }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div
      className={`duration-500 
      ${
        darkMode
          ? " bg-[#FAFAFA] text-[#041A24] fixed w-full px-12 md:px-20  md:top-20 top-12 sm:top-[59px] py-4 container mx-auto "
          : " bg-[#202C37] text-white fixed w-full px-12 md:px-20  md:top-20 top-12 sm:top-[59px] py-4 container mx-auto "
      }`}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        id="form"
        className="filter form-control z-12 w-full gap-4   mx-auto flex flex-col md:flex-row justify-between md:items-center"
      >
        <label
          htmlFor="search"
          className={`duration-500 
flex gap-4 px-6 w-full md:w-[400px] py-3 items-center ${
            darkMode
              ? " bg-white z-12 text-[#858585] shadow-custom-gray rounded-md"
              : " bg-[#283949] shadow-lg rounded-md"
          }`}
        >
          <CiSearch />
          <input
            className="bg-transparent w-full border-none outline-none"
            type="search"
            placeholder="Search for a country..."
            id="search"
            name="search"
            onChange={handleSearchChange}
          />
        </label>

        <div className="right z-12">
          <select
            className={`duration-500 px-5 py-2 rounded-md ${
              darkMode
                ? " shadow-custom-gray bg-white"
                : " shadow-lg bg-[#283949]"
            }`}
            onChange={handleRegionChange}
          >
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
