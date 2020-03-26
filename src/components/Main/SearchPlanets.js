import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInput } from "../custom_hooks/UseInput";
import PlanetData from './PlanetData';
import './Main.css'
export default function SearchPlanets() {
  const { value, bind, reset } = useInput("");
  const [planetData, setPlanetData] = useState([]);
  const [search, setSearch] = useState();
  const [submitting, setSubmitting] = useState(false);
  const CheckSubmission = () => {
    return setSubmitting(true);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Searching for ${value}`);
    reset();
    return setSearch(value);
  };

  useEffect(() => {
    console.log("submitting state", submitting);

    if (submitting === true ) {
      axios
        .get(
     `https://nasa-exoplanet-kepler-api.herokuapp.com/api/exoplanets/query?q=${search}`
        )
        .then(res => {
          console.log(res.data, "data from pl_hostname search");
          setPlanetData(res.data);
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err);
        });
    } 
  }, [search,submitting]);

  return (
    <div className="search-planets-container">
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" {...bind} />
        </label>
        <input type="submit" value="Submit" onClick={CheckSubmission} />
      </form>
      <PlanetData state={planetData}/>
    </div>
  );
}
