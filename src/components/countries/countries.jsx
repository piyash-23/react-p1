import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const [visited, setHandlevisited] = useState([]);
  const handleVisitedCountries = (country) => {
    // console.log("visited here", country);
    const newVisited = [...visited, country];
    setHandlevisited(newVisited);
  };
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>Number of countries {countries.length}</h1>
      <h4>Visited Country Number: {visited.length} </h4>
      <ol>
        {visited.map((visit) => (
          <li>{visit.name.common}</li>
        ))}
      </ol>
      <div className="country">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
