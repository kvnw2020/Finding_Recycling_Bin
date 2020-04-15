import React from 'react'

function DisplayAddress(props) {

    return (
        <div className='box'>
            <p>The closest recycling is at:</p>
            <p>{props.park}</p>
            <p>{props.address}, {props.borough}</p>
            <p>{props.latitude}, {props.longitude}</p>
        </div>
    )
}

export default DisplayAddress