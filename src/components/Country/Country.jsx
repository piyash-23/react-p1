import React, { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  // console.log(handleVisitedCountries);
  const [visited, setvisited] = useState(false);
  const handleVisited = () => {
    // if (visited) {
    //   setvisited(false);
    // } else {
    //   setvisited(true);
    // }
    setvisited(!visited);
    handleVisitedCountries(country);
  };

  // console.log(country);
  return (
    <div className={`card ${visited && "visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <p>Name: {country?.name?.common}</p>
      <h3>
        Area: {country?.area?.area}{" "}
        {country?.area?.area > 300000 ? "Big Country" : "Small Country"}
      </h3>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
