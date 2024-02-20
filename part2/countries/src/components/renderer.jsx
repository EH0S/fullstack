//I couldn't find any free weather API's, and those that I did find, did not work properly. - sadge

import React from "react";
function Renderer({ countries, countryData, setCountryData }) {

  const handleShowCountry = (country) => {
    setCountryData(country);
  };

  function RenderCountries() {
    if (countries === null || countries.length === 1) return;
    
    return (
      <>
        {countries.map((country, index) => (
          <div key={index}>
            <label htmlFor="show">{country.name.common}</label>
            <button id="show" onClick={() => handleShowCountry(country)}>
              Show
            </button>
          </div>
        ))}
      </>
    );
  }

  function RenderData() {
    if (countryData === null) return;

    return (
      <>
        <h1>{countryData.name.common}</h1>
        <p>Capital: {countryData.capital}</p>
        <p>Area: {countryData.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(countryData.languages).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </>
    );
  }

  function RenderFlag() {
    if (countryData === null) return;

    return <img src={countryData.flags.png}></img>;
  }

  return (
    <>
      <RenderCountries />
      <RenderData />
      <RenderFlag />
    </>
  );
}

export default Renderer;
