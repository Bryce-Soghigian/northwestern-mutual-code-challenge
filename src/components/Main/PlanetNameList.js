import React, { useState, useEffect } from "react";
import axios from 'axios';
import Planet from './Planet'
import "./Main.css"
export default function PlanetNameList() {
  const [planetNames, setPlanetNames] = useState([]);
  useEffect(() => {
    axios
      .get("https://nasa-exoplanet-kepler-api.herokuapp.com/api/exoplanets/")
      .then(res => {
        console.log(res);
        let temp = []
        res.data.map( x => {
            temp.push(x.pl_hostname)
        })
        let set = Array.from(new Set(temp))
        console.log(set)
        console.log(setPlanetNames(set))
        setPlanetNames(set);

      });
  }, []);
  if (planetNames.length === 0) {
    return <div>Loading Planet Names ...</div>;
  } else {
    return (
      <div >
        <h3>Names To Search</h3>

        <div className="planet-list">
            {
                planetNames.map( x => {
                    return <Planet state={x}/>
                })
            }
            <Planet/>
        </div>

      </div>
    );
  }
}
