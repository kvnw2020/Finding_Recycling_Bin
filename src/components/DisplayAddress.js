import React from 'react'

function DisplayAddress(props) {

    return (
        <div className='box'>
            <p>The closest recycling is at {props.closestOne} </p>
        </div>
    )
}

export default DisplayAddress