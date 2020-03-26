import React from 'react'
import SearchPlanets from './SearchPlanets'
import PlanetNameList from './PlanetNameList'
export default function Main() {
    return (
        <div className="main-container">
            <SearchPlanets/>
            <PlanetNameList/>
        </div>
    )
}
