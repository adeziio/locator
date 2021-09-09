import React, { Component } from 'react';
import './Explore.css'

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        document.title = "Locator - Explore";
    }

    render() {

        return (
            <div>
                <p>Explore page is under construction.</p>
            </div>
        )
    }
}
