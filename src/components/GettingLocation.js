import React, {Component} from 'react'
import DisplayAddress from './DisplayAddress'

class GettingLocation extends Component {
    constructor() {
        super()
        this.state= {
            recycleBins: [],
            latitude: 0,
            longitude: 0,
            distance: [],
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    componentDidMount() {
        fetch("https://data.cityofnewyork.us/resource/sxx4-xhzg.json")
            .then(response => response.json())
            .then(data => {
                this.setState({recycleBins: data})
            })
    }

    calculatingDistance(lat1, lat2, lon1, lon2) {
        const dlon = [lon2 - lon1] * [Math.PI / 180]
        const dlat = [lat2 - lat1] * [Math.PI / 180]
        const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + 
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dlon / 2) * Math.sin(dlon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        const d = 3961 * c
        return d
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.distance.length !== prevState.recycleBins.length) {
            const updatedDistance = prevState.recycleBins.map(recyclecan => {
                return this.calculatingDistance(this.state.latitude, recyclecan.latitude, this.state.longitude, recyclecan.longitude)
            })
        this.setState({distance: updatedDistance})
        }
    }

    findShortestDistance() {
        const revisedUpdatedDistance = this.state.distance.filter(mile =>{
            return !isNaN(mile)
        })
        const position = revisedUpdatedDistance.indexOf(Math.min(...revisedUpdatedDistance))
        return position
    }

    render() {

        const closestOne = this.findShortestDistance()
        
        return (
            <div>
                <button onClick={this.getLocation}>Get location.</button>
                <DisplayAddress closestOne={closestOne} />
            </div>
        )
    }
}

export default GettingLocation