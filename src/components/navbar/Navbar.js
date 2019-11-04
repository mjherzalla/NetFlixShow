import React, { Component } from 'react';
import NFlogo from '../../imgs/Netflix_2015_logo.svg'
import './navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="navbar">
                    <li><a href=" "><img src={NFlogo}/></a></li>
                    <li><a href=" "><i className="fas fa-search"></i></a></li>
                    <li><a href=" "><i className="far fa-user"></i></a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;