import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
 let Nav = props => {
    return(
        <div className="nav-container">
            <Link className="nav-link" to="/">New Texture</Link>
        </div>
    )
}

export default Nav