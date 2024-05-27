import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Top from "./Top";
import { GoArrowLeft } from "react-icons/go";
import { useSelector } from "react-redux";

import "../Country.css"

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const { name } = useParams();
  const darkMode = useSelector((state) => state.mode.darkMode);


  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (!response.ok) {
          throw new Error("Country not found");
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCountryData();
  }, [name]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!country) {
    return <div>Loading...</div>;
  }

  const {
    flags,
    name: countryName,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <div className={`duration-500 ${
      darkMode
       ? " bg-[#FAFAFA] text-[#041A24]"
        : " bg-[#202C37] text-white"
    }`}>
      <div>
        <Top />
      </div>
      <section className="country pt-28 pb-8 container mx-auto px-20 w-full h-screen">
        <Link
          to="/"
          className="gap-2 inline-flex items-center border px-5 py-2 rounded-md hover:bg-blue-950 hover:text-white transition-all duration-500"
        >
          <GoArrowLeft />
          Back Home
        </Link>
        <article key={country.cca3}>
          <div className="country-inner flex-col md:flex md:flex-row justify-between items-center md:mt-16">
            <div className="flag">
              <img
                className="w-[600px] h-[400px] country__img object-contain"
                src={flags.png}
                alt={countryName.common}
              />
            </div>

            {/* Country details in text */}
            <div className="country-details flex flex-col gap-10">
              <h2 className="text-4xl font-semibold">{countryName.common}</h2>
              <div className="flex  gap-16">
                <div className="left">
                  <h5>
                    Native Name:{" "}
                    <span>{nativeName ? nativeName[0] : "N/A"}</span>
                  </h5>
                  <h5>
                    Population: <span>{population.toLocaleString()}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                </div>

                <div className="right">
                  <h5>
                    Top Level Domain: <span>{tld ? tld[0] : "N/A"}</span>
                  </h5>
                  <h5>
                    Currencies:{" "}
                    <span>
                      {currencies ? Object.values(currencies)[0].name : "N/A"}
                    </span>
                  </h5>
                  <h5>
                    Languages:{" "}
                    <span>
                      {languages ? Object.values(languages).join(", ") : "N/A"}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="flex-col md:flex-row items-center gap-4">
                <h3 className="text-2xl font-semibold">Border Countries: </h3>
                <div className="borders flex gap-4">
                  {borders ? (
                    borders.map((border) => (
                      <ul key={border}>
                        <li className="border px-4 py-1 rounded-md hover:bg-blue-950 hover:text-white transition-all duration-500 cursor-pointer">{border}</li>
                      </ul>
                    ))
                  ) : (
                    <p>No border countries</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CountryDetails;