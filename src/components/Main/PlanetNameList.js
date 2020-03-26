import React, { useState, useEffect } from "react";
import axios from 'axios';
import Planet from './Planet'
import "./Main.css"
export default function PlanetNameList() {
  const [planetNames, setPlanetNames] = useState(null);
  useEffect(() => {
    axios
      .get("https://nasa-exoplanet-kepler-api.herokuapp.com/api/exoplanets/")
      .then(res => {
        console.log(res);
        setPlanetNames(res.data);
      });
  }, []);
  if (planetNames === null) {
    return <div>Loading Planet Names ...</div>;
  } else {
    return (
      <div >
        <h3>Names To Search</h3>

        <div className="planet-list">
          {planetNames.map(pl_hostname => {
          return <Planet pl_name={pl_hostname} />;
        })}
        </div>

      </div>
    );
  }
}
