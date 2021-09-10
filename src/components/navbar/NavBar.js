import React, { Component } from 'react';
import { Menu, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NavBar.css';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: window.location.pathname,
            paths: ["/myLocation"]
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        let { paths, activeItem } = this.state;
        activeItem = paths.some((item) => item === activeItem) ? activeItem : "/myLocation";

        return (
            <Menu
                size="large"
                secondary
                inverted
                color="teal"
                // widths={3} 
                className="navbar-container"
            >
                <Menu.Item>
                    <Header as='h2' inverted color="white">
                        <Icon name='location arrow' />
                        <Header.Content>
                            adeziio
                            <Header.Subheader>Locator App</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/myLocation'
                    name='/myLocation'
                    active={activeItem === '/myLocation'}
                    onClick={this.handleItemClick}
                >
                    My Location
                </Menu.Item>
            </Menu>
        )
    }
}