import React, { Component } from 'react';
import './MyLocation.css'

export default class MyLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        document.title = "Locator - My Location";
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
                    zipCode: resData.zipCode
                }, () => { this.fetchData(resData.zipCode) })

            })
    }

    render() {


        return (
            <div>
                <p>My Location page is under construction.</p>
            </div>
        )
    }
}
