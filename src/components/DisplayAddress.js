import React from 'react'
import '../App.css';

function DisplayAddress(props) {

    const fixedNumber =props.distance.toFixed(2)

    return (
        <div className='box'>
            <p>The closest recycling is {fixedNumber} miles away from you and is at:</p>
            <p>{props.park}</p>
            <p>{props.address}, {props.borough}</p>
        </div>
    )
}

export default DisplayAddress