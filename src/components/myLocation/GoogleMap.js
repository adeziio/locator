import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            latitude: 0,
            longitude: 0,

        };
    }

    componentDidMount = () => {
        document.title = "Locator - My Location";
        this.fetchLocation();
    }

    fetchLocation = async () => {
        fetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=${process.env.REACT_APP_FIND_ANY_IP_API_KEY}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
            }
        })
            .then(response => response.json())
            .then(resData => {
                this.setState({
                    latitude: resData.latitude,
                    longitude: resData.longitude,
                    isLoading: false,
                })

            })
    }

    render() {
        const { isLoading, latitude, longitude } = this.state;
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }

        return (
            <>
                {!isLoading ?
                    <div >
                        <Map style={{ position: 'relative', height: '90vh', width: '100vw' }}
                            containerStyle={containerStyle}
                            google={this.props.google}
                            initialCenter={{
                                lat: latitude,
                                lng: longitude
                            }}
                            center={{
                                lat: latitude,
                                lng: longitude
                            }}
                        >
                            <Marker
                                position={{
                                    lat: latitude,
                                    lng: longitude
                                }} />
                        </Map>
                    </div> : null}

            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (`${process.env.REACT_APP_GOOGLE_API_KEY}`)
})(MapContainer)