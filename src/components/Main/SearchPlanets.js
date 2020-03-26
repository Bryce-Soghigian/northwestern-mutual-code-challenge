import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInput } from "../custom_hooks/UseInput";
import PlanetData from './PlanetData';
import './Main.css'
import {GiPerspectiveDiceSixFacesFour} from 'react-icons/gi'
export default function SearchPlanets() {
  const { value, bind, reset } = useInput("");
  const [planetData, setPlanetData] = useState([]);
  const [search, setSearch] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [submitting_random,setRandom] = useState(false)
  const [id,setId] = useState(false)
  const CheckSubmission = () => {
    return setSubmitting(true);
  };


const SetRandom = () => {
    let random_id = Math.floor(Math.random() * Math.floor(4016))

   setId(random_id)
    return setRandom(true)
}
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
    if(submitting_random ===true){
        axios
        .get(
     `https://nasa-exoplanet-kepler-api.herokuapp.com/api/exoplanets/allsum`
        )
        .then(res => {
          console.log(res.data, "data from pl_hostname search");
          setPlanetData(res.data[id]);
          setSubmitting(false);
          setRandom(false)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [search,submitting,id,submitting_random]);

  return (
    <div className="search-planets-container">
        <button onClick={SetRandom}><GiPerspectiveDiceSixFacesFour/> </button>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" {...bind} />
        </label>
        <input type="submit" value="Submit" onClick={CheckSubmission} />
      </form>
      <div>
         {submitting_random?"Loading":""}
      </div>
      <PlanetData state={planetData}/>
    </div>
  );
}
