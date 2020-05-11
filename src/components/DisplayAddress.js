import React from 'react'
import '../App.css';

function DisplayAddress(props) {

    return (
        <div className='box'>
            <p>The closest recycling is {props.distance} miles away from you and is at:</p>
            <p>{props.park}</p>
            <p>{props.address}, {props.borough}</p>
            <p>Latitude: {props.latitude}, Longitude: {props.longitude}</p>
        </div>
    )
}

export default DisplayAddress