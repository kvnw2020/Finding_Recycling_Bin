import React from 'react'

function FindingBin(props) {

    const farApart = props.findingDistance(props.userLatitude, props.recycleCan.latitude, props.userLongitude, props.recycleCan.longitude)
    
    return (
        <div className='box'>
            <p>User is here: latitude {props.userLatitude}, longitude {props.userLongitude}</p>
            <p>Recycle Bins is here: latitude {props.recycleCan.latitude}, longitude {props.recycleCan.longitude}</p>
            <p>They are : {farApart} apart.</p>
        </div>
    )
}

export default FindingBin