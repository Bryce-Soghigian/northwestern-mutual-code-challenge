import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
 let Nav = props =>{
    return(
        <div className="nav-container">
            <Link className="nav-link" to="/">Planet Exploration</Link>
            <Link className="nav-link" to ="/photo">Space Photos</Link>
        </div>
    )
}

export default Nav