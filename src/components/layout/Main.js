import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Help from './../service/Help';
import Search from './../service/Search';
import Direction from './../service/Direction';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Search"
        }
    }

    setPage = (page) => {
        this.setState({
            page: page
        })
    }


    render() {
        const { page } = this.state;

        return (
            <>
                <div className="header-container">
                    <Header page={page} setPage={this.setPage} />
                </div>

                <div className="content-container">
                    {page === "Search" ? <Search />
                        : page === "Direction" ? <Direction />
                            : page === "Help" ? <Help />
                                : null
                    }
                </div>

                <div className="footer-container">
                    <Footer />
                </div>
            </>
        )
    }
}