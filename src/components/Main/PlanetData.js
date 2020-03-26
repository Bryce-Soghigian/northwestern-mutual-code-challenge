import React from "react";
import ThreePlanet from './ThreePlanet'
export default function PlanetData(props) {
  console.log(props);
  if (props.state.length === 0) {
    return <div>Search A Planet Above</div>;
  } else {
    return (
      <div className="planet-data">
        <p>Planet name:{props.state.pl_name}</p>
        <p>It was discovered by {props.state.pl_discmethod?props.state.pl_discmethod:"N/A"}</p>
        <p>its radus in Jupiter Radii is {props.state.pl_radj ? props.state.pl_radj:"N/A"} </p>
        <p>It's Planet Orbital Period Value(time it takes to orbit its star in days) is {props.state.pl_orbper ? props.state.pl_orbper:"N/A"}</p>
        <p>The Distance to this planets system is {props.state.st_dist? props.state.st_dist + " parsecs away":"N/A"} </p>
        
        <p>Data for this planet was last updated on {props.state.rowupdate}</p>
     
        <div className="planet-container">
          <ThreePlanet state={props.state}/>
        </div>
      </div>
    );
  }
}

