import React from 'react'

export default function Planet(props) {
    console.log(props,"props in planet")
    return (
        <div>
            <p>{props.state}</p>
        </div>
    )
}