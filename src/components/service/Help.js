import React, { Component } from 'react';
import { Typography } from '@mui/material';

export default class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Typography variant="h5" color="text.primary" fontSize="1.5rem" fontWeight="bold" margin="1rem" >
                    Help
                </Typography>
                <Typography variant="p" color="text.primary" fontSize="1rem" display="block" margin="1rem" >
                    <span style={{ fontWeight: "bold" }}>Search: </span>
                    Browse any location.
                </Typography>
                <Typography variant="p" color="text.primary" fontSize="1rem" display="block" margin="1rem" >
                    <span style={{ fontWeight: "bold" }}>Direction: </span>
                    Lookup any direction.
                </Typography>
            </>
        )
    }
}