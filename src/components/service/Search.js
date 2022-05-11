import React, { Component } from 'react';
import { TextField } from '@mui/material';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delayCounter: 0,
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
        Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);
        this.fetchCurrentLocation();
    }

    setSearch = (e) => {
        this.setState({
            search: e.target.value,
            delayCounter: this.state.delayCounter + 1
        }, () => {
            setTimeout(() => {
                this.fetchData(e.target.value);
            }, 1200)
        })
    }

    fetchData = (search) => {
        if (this.state.delayCounter === 1) {
            if (search === "") {
                this.fetchCurrentLocation();
            }
            else {
                this.fetchLocation(search);
            }
        }

        this.setState({
            delayCounter: this.state.delayCounter - 1
        })
    }

    fetchCurrentLocation = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                mapData: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                },
                markerData: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            }),
            err => console.log(err)
        );
    }

    fetchLocation = (location) => {
        Geocode.fromAddress(location).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({
                    mapData: {
                        latitude: lat,
                        longitude: lng,
                    },
                    markerData: {
                        latitude: lat,
                        longitude: lng,
                    }
                })
            },
            (error) => {
                console.error(error);
            }
        );
    }


    render() {
        const { mapData, markerData } = this.state;
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }

        return (
            <>
                <TextField label="Address" variant="outlined" fullWidth onChange={this.setSearch} />
                <Map style={{ position: 'relative', height: '85vh', width: '100vw' }}
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
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (`${process.env.REACT_APP_GOOGLE_API_KEY}`)
})(Search)