import React, { Component } from 'react';
import UnderConstruction from './../../img/Under-Construction-Sign.png';

export default class Direction extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <>
                <img src={UnderConstruction} alt="" style={{ maxWidth: "200px" }} />
            </>
        )
    }
}
