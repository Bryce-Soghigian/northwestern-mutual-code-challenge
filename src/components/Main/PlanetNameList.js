import React, { useState, useEffect } from "react";
import axios from 'axios';
import Planet from './Planet'
import "./Main.css"
export default function PlanetNameList() {
  const [planetNames, setPlanetNames] = useState([]);
  const [sortedPlanetNames,setSortedPlanetNames] = useState([])
  const [sorting,setSorting] = useState(false)




  //==========Sorting algorithm==============//
  const sortPlanetNames = (e) => {
    e.preventDefault();
    setSorting(true)
    let sorted_array = []
    planetNames.map(x => {
      if(x.pl_discmethod ===e.target.value ){
        sorted_array.push(x.pl_hostname)
      }

    })
          //After sorting we need to remove duplicates
    let set = Array.from(new Set(sorted_array))
   console.log(set,"set")
   setSorting(false)
    return setSortedPlanetNames(set)
  }
  useEffect(() => {
    axios
      .get("https://nasa-exoplanet-kepler-api.herokuapp.com/api/exoplanets/")
      .then(res => {
        console.log(res.data,"res.data")
        setPlanetNames(res.data)
        let temp = []
        res.data.map( x => {
            temp.push(x.pl_hostname)
        })
        let set = Array.from(new Set(temp))
        setSortedPlanetNames(set);

      });
  }, []);
  if (planetNames.length === 0 || sorting === true) {
    return <div>{sorting?"Sorting":"Loading"} Planet Names ...</div>;
  } else {
    return (
      <div >
        <h3>Names To Search({sortedPlanetNames.length + " planets"})</h3>
        <select onChange={sortPlanetNames}>
          <option>Filter By...</option>
          <option value="Transit">Transit</option>
          <option value="Radial Velocity">Radial Velocity</option>
          <option value="Microlensing">Microlensing</option>
          <option value="Imaging">Imaging</option>
        </select>
        <div className="planet-list">
            {
                sortedPlanetNames.map( x => {
                    return <Planet state={x}/>
                })
            }
            <Planet/>
        </div>

      </div>
    );
  }
}
