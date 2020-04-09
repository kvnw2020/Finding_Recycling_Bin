import React from 'react'

function DisplayAddress(props) {

    return (
        <div className='box'>
            <p>Nearest recycling is {props.rightSpot} miles away.</p>
        </div>
    )
}

export default DisplayAddress