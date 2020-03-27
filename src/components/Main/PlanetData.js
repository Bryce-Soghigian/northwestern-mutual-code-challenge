import React from "react";
import ThreePlanet from './ThreePlanet'
export default function PlanetData(props) {
  console.log(props);
  if (props.state.length === 0) {
    return <div>Please submit a valid exoplanet above!</div>;
  } else {
    return (
      <div className="planet-data">
        <p className="planet-data">Planet name:{props.state.pl_name}</p>
        <p className="planet-data">It was discovered by {props.state.pl_discmethod?props.state.pl_discmethod:"N/A"}</p>
        <p className="planet-data">its radus in Jupiter Radii is {props.state.pl_radj ? props.state.pl_radj:"N/A"} </p>
        <p className="planet-data">It's Planet Orbital Period Value(time it takes to orbit its star in days) is {props.state.pl_orbper ? props.state.pl_orbper:"N/A"}</p>
        <p className="planet-data">The Distance to this planets system is {props.state.st_dist? props.state.st_dist + " parsecs away":"N/A"} </p>
        
        <p className="planet-data">Data for this planet was last updated on {props.state.rowupdate}</p>
      <h6 className="planet-data">**Planets rendered below are just visualizations</h6>
        <div className="planet-container">
          <ThreePlanet state={props.state}/>
        </div>
      </div>
    );
  }
}

