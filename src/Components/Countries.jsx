import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { useSelector } from "react-redux";

const Countries = ({ searchValue, region }) => {
  const [data, setData] = useState([]);
  const darkMode = useSelector((state) => state.mode.darkMode);

  useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const filteredCountries = data.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const matchesRegion = region === "All" || country.region === region;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="w-full">
      <div className="countries mt-32 md:mt-16 z-1">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 grid-cols-1 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {filteredCountries.map((country) => (
            <div
              className={`duration-500 ${
                darkMode
                  ? "shadow-md rounded-t-lg rounded-md cursor-pointer shadow-custom-gray hover:scale-110 transition-all duration-300 hover:z-1"
                  : "shadow-md rounded-t-lg rounded-md cursor-pointer shadow-lg bg-[#283949] hover:scale-110 transition-all duration-300 hover:z-1"
              }`}
              key={country.name.common}
            >
              <div className="justify-between flex flex-col pb-4 h-full">
                <img
                  className="rounded-t-lg h-[50%]"
                  src={country.flags.png}
                  alt=""
                />
                <div className="content px-6 mt-[-30px] items-start">
                  <h3 className="country-name text-lg font-semibold">
                    {country.name.common}
                  </h3>
                  <p className="text-md font-semibold">
                    Population:{" "}
                    <span className="text-sm font-normal font-[Nunito Sans]">
                      {country.population}
                    </span>
                  </p>
                  <p className="text-md font-semibold">
                    Region:{" "}
                    <span className="text-sm font-[Nunito Sans] font-normal">
                      {country.region}
                    </span>
                  </p>
                  <p className="text-md font-semibold">
                    Capital:{" "}
                    <span className="text-sm font-[Nunito Sans] font-normal">
                      {country.capital}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
