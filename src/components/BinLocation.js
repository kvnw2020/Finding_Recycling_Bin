import React, {Component} from 'react'
import FindingBin from './FindingBin'

class BinLocation extends Component {
    constructor() {
        super()
        this.state= {
            recycleBins: [],
            latitude: null,
            longitude: null,
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this)
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

    findingDistance(lat1, lat2, lon1, lon2) {
        const dlon = [lon2 - lon1] * [Math.PI / 180]
        const dlat = [lat2 - lat1] * [Math.PI / 180]
        const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + 
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dlon / 2) * Math.sin(dlon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        const d = 3961 * c
        return d
    }

    render() {

        const listOfBins = this.state.recycleBins.map(recycleCan => <FindingBin 
                                                                        key={recycleCan.id} 
                                                                        recycleCan={recycleCan}
                                                                        userLatitude={this.state.latitude}
                                                                        userLongitude={this.state.longitude}
                                                                        findingDistance={this.findingDistance}
                                                                    />)

        return (
            <div>
                <button onClick={this.getLocation}>Get location.</button>
                {listOfBins}
            </div>
        )
    }
}

export default BinLocation