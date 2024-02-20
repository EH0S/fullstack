import { useState } from "react";
import axios from "axios";
import Renderer from "./components/renderer";

function App() {
  const [errorMessage, showErrorMessage] = useState(false);
  const [countryData, setCountryData] = useState(null);
  const [countries, setCountries] = useState(null);

  const handleInputChange = (event) => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((res) => {
        const foundCountries = res.data.filter((item) =>
          item.name.common.toLowerCase().includes(event.target.value)
        );

        if (foundCountries.length > 10) {
          showErrorMessage(true);
          setCountries(null);
          setCountryData(null);
          return;
        } else if (foundCountries.length === 1) {
          setCountryData(foundCountries[0]);
        }

        showErrorMessage(false);
        setCountries(foundCountries);
      });
  };

  return (
    <div>
      {errorMessage ? <p>too many countries</p> : null}

      {/*Form */}
      <label htmlFor="filter">countries</label>
      <input id="filter" onChange={handleInputChange} type="text" />

      {/*Rendering*/}
      <Renderer
        countries={countries}
        countryData={countryData}
        setCountryData={setCountryData}
      />
    </div>
  );
}

export default App;
