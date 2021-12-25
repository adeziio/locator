import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            mapData: {
                latitude: 0,
                longitude: 0,
            },
            markerData: {
                latitude: 0,
                longitude: 0,
            },
        };
    }

    componentDidMount = () => {
        document.title = "Locator - My Location";
        this.fetchLocation();
    }

    fetchLocation = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                mapData: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                },
                markerData: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                },
                isLoading: false,
            }),
            err => console.log(err)
        );

    }

    render() {
        const { isLoading, mapData, markerData } = this.state;
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
                                lat: mapData.latitude,
                                lng: mapData.longitude
                            }}
                            center={{
                                lat: mapData.latitude,
                                lng: mapData.longitude
                            }}
                        >
                            <Marker
                                title="My Location"
                                position={{
                                    lat: markerData.latitude,
                                    lng: markerData.longitude
                                }}
                            />
                        </Map>
                    </div> : null}

            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (`${process.env.REACT_APP_GOOGLE_API_KEY}`)
})(MapContainer)