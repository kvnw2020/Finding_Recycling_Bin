import React from 'react'

function FindingBin(props) {

    return (
        <div className='box'>
            <p>User is here: latitude {props.userLatitude}, longitude {props.userLongitude}</p>
            <p>This is the distance: {props.miles} miles.</p>
        </div>
    )
}

export default FindingBin